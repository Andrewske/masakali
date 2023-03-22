import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import BillingDetails from '../../forms/BillingDetails';
import CartDetails from './CartDetails';
import RetreatCartDetails from './RetreatCartDetails';
import CheckoutError from './CheckoutError';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../../auth/Login';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { loadUser } from '../../../actions/auth';
import {
  createReservation,
  updateUser,
  updateReservation,
  createError,
  updatePricing,
} from '../../../actions/user';
import { serverUrl } from '../../../config';
import { stripeCheckout } from '../../../utils/stripe';
import useCurrencyFormat from '../../../hooks/useCurrencyFormat';
import { makeReservation } from '../../../actions/smoobu';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import moment from 'moment';
import { capitalize } from 'lodash';
import Header from '../Header';

import useRetreat from '../../../hooks/useRetreat';

import {
  sendAdminBookingConfirmation,
  sendBookingConfirmation,
} from '../../../actions/sendgrid';

const images = {
  surya: '/Main/Surya/surya-front-main_yynphR5d1s.webp',
  chandra: '/Main/Chandra/chandra-front-main_ohrGHDvTvf.webp',
  jala: '/Main/Jala/jala-front-main_yJaEapAckn.webp',
};

const Cart = ({
  isAuthenticated,
  loadUser,
  reservations,
  user,
  createReservation,
  updateUser,
  updateReservation,
  makeReservation,
  createError,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);
  const [isDefault, setIsDefault] = useState(false);
  const [discountCode, setDiscountCode] = useState(null);
  const navigate = useNavigate();

  const { retreatName, villaName } = useSelector(
    (state) => state.retreatReservation
  );

  const isRetreat = retreatName !== null;

  const retreat = useRetreat(retreatName);

  const {
    retreatData: { totalUSD },
    guest: { setGuestName, setGuestEmail },
    sendConfirmationEmail,
    confirmBooking,
  } = retreat;

  const stripe = useStripe();
  const elements = useElements();

  let adminCode = process.env.REACT_APP_ADMIN_TEST_CODE;

  let price = useCurrencyFormat(reservations?.new?.amount);
  let discount = useCurrencyFormat(reservations?.new?.discount);
  let total =
    discountCode === adminCode ? 1.2 : reservations?.new?.total ?? totalUSD;
  let formattedTotal = useCurrencyFormat(total);

  let taxes = useCurrencyFormat(reservations?.new?.taxes);
  const imgUrl = images[reservations?.new?.name ?? villaName];

  useEffect(() => {
    async function loginSuccess() {
      console.log('Cart User', user);
      const config = {
        params: {
          email: user?.email,
        },
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      try {
        const response = await axios.get(
          serverUrl + '/auth/login/success',
          config
        );
        loadUser(response.data.user._id);
      } catch (err) {
        console.error({ err });
      }
    }

    loginSuccess();
  }, []);

  const handleCardDetailsChange = (e) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError();
  };

  const discountPrice = (e) => {
    setDiscountCode(e.target?.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    setIsProcessing(true);
    setGuestName(e.target?.guestName?.value ?? null);
    setGuestEmail(e.target?.guestEmail?.value ?? null);

    const cardElement = elements.getElement(CardElement);
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const totalAsInt = total;

    const billingDetails = {
      name: firstName + ' ' + lastName,
      email: e.target.email.value,
      address: {
        city: e.target.city.value,
        line1: e.target.address.value,
        state: e.target.state.value,
        country: e.target.country.value,
        postal_code: e.target.zip.value,
      },
      phone: e.target.phone?.value,
    };

    // Update the user
    updateUser({ userId: user._id, billingDetails, isDefault });

    try {
      let paymentIntent, error;
      if (process.env.NODE_ENV === 'production') {
        let stripeData = await stripeCheckout({
          price: totalAsInt * 100,
          stripe,
          cardElement,
          billingDetails,
        });

        paymentIntent = stripeData.paymentIntent;
        error = stripeData.error;

        if (error) throw error;
      }

      let reservationId;
      let emailData = {
        name: billingDetails.name,
        email: billingDetails.email,
        country: billingDetails.address.country,
      };

      if (!isRetreat) {
        //Create the booking in Smoobu
        const { smoobuId } = await makeReservation({
          startDate: reservations.new.startDate,
          endDate: reservations.new.endDate,
          name: reservations.new.name,
          firstName,
          lastName,
          email: billingDetails.email,
          guests: reservations.new.guests,
          price: parseFloat(totalAsInt),
          address: billingDetails.address,
        });

        // Create the reservation in the DB to get the Id
        const dbRes = await createReservation({
          userId: user._id,
          reservation: reservations.new,
        });

        reservationId = dbRes.reservationId;
        //Update the reservation with reservationId and stripeId & SmoobuId
        if (reservationId && paymentIntent?.id && smoobuId) {
          await updateReservation({
            reservationId,
            stripeId: paymentIntent.id,
          });
        } else {
          console.log({ reservationId, smoobuId, paymentIntent });
        }

        emailData = {
          ...emailData,
          villaName: capitalize(reservations.new.name),
          startDate: moment
            .utc(reservations.new.startDate)
            .format('ddd MMM DD YYYY')
            .toString(),
          endDate: moment
            .utc(reservations.new.endDate)
            .format('ddd MMM DD YYYY')
            .toString(),
          numDays: reservations.new.numDays,
          price,
          discount,
          taxes,
          total,
          id: reservationId,
        };

        await sendBookingConfirmation(emailData);

        if (process.env.NODE_ENV === 'production') {
          await sendAdminBookingConfirmation(emailData);
          window.dataLayer.push({ conversionValue: totalAsInt });
        }
      } else {
        emailData = {
          ...emailData,
          isRetreat: true,
        };

        sendConfirmationEmail(emailData);
        confirmBooking({
          userId: user._id,
          name: billingDetails.name,
          email: billingDetails.email,
          stripeId: paymentIntent?.id,
        });
      }

      setIsProcessing(false);
      navigate('/success');
    } catch (err) {
      console.error({ location: 'handleSubmit', err });
      createError({ error: err, userId: user._id });
      setCheckoutError(err.message);
    }
  };

  const cardElementOptions = {
    hidePostalCode: true,
  };

  return (
    <div className="container full">
      <Header hide={false} />
      <div className="cart-container">
        <header>
          <h1>Check out</h1>
        </header>
        <span className="row image">
          <ImageContext>
            <IKImage
              path={imgUrl}
              transformation={[{ width: '800px', dpr: 'auto' }]}
              lqip={{ active: true }}
              loading="lazy"
            />
          </ImageContext>
        </span>

        {reservations?.new && (
          <div className="row">
            <CartDetails reservation={reservations?.new} />
          </div>
        )}

        {retreatName && (
          <div className="row">
            <RetreatCartDetails retreat={retreat} />
          </div>
        )}

        {isAuthenticated ? (
          <form
            className="billing-form"
            onSubmit={handleSubmit}
            onChange={(e) => discountPrice(e)}
          >
            <BillingDetails
              user={user}
              isDefault={isDefault}
              setIsDefault={setIsDefault}
              retreat={retreat}
            />
            <div className="card-element-container">
              <CardElement
                options={cardElementOptions}
                onChange={handleCardDetailsChange}
              />
            </div>
            <span style={{ fontSize: '.5rem', margin: '0 auto' }}>
              Powered by Stripe
            </span>
            {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}

            <button
              id="cart_complete_payment"
              className="btn submit"
              disabled={isProcessing || !stripe}
            >
              {isProcessing ? 'Processing...' : `Pay ${formattedTotal}`}
            </button>
            <p className="subtext">
              *Please be aware that booking through the website is
              non-refundable.
            </p>
          </form>
        ) : (
          <div className="row">
            <h2 className="cart-login-header">Log in or sign up to book</h2>
            <Login />
          </div>
        )}
        <div className="">
          <p className="subtext">
            Having troubles with checkout? Contact us at{' '}
            <a href="mailto:admin@masakaliretreat.com">
              admin@masakaliretreat.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user,
  reservations: state.user.reservations,
});

export default connect(mapStateToProps, {
  loadUser,
  createReservation,
  updateReservation,
  makeReservation,
  updateUser,
  createError,
  updatePricing,
})(Cart);
