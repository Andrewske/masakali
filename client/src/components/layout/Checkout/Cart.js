import React, { useState } from 'react';
import { connect } from 'react-redux';
import BillingDetails from '../../forms/BillingDetails';
import CartDetails from './CartDetails';
import CheckoutError from './CheckoutError';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Login from '../../auth/Login';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { loadUser } from '../../../actions/auth';
import {
  createReservation,
  updateUser,
  updateReservation,
  createError,
} from '../../../actions/user';
import { serverUrl } from '../../../config';
import {
  createPaymentIntent,
  createPaymentMethodReq,
  confirmCardPayment,
} from '../../../utils/stripe';
import useCurrencyFormat from '../../../utils/useCurrencyFormat';
import { percDiscount } from '../../../config';
import { makeReservation } from '../../../actions/smoobu';

//import {} from 'dotenv/config';

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
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [price, setPrice] = useState(0);
  const [numDays, setNumDays] = useState(0);

  useEffect(() => {
    if (reservations?.new) {
      setPrice(reservations.new.price);
      setNumDays(reservations.new.numDays);
    }
  }, [reservations]);

  let total = useCurrencyFormat(price * (1 - percDiscount) * numDays);

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
    let code = process.env.REACT_APP_ADMIN_TEST_CODE;
    if (e.target?.value == code) {
      console.log('discount added');
      setPrice(1.2); // finalPrice = 100
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    //setIsProcessing(true);
    const cardElement = elements.getElement(CardElement);

    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;

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

    // Create the reservation in the DB to get the Id
    const { reservationId } = await createReservation({
      userId: user._id,
      reservation: reservations.new,
    });

    try {
      // Create the Payment Intent
      let finalPrice = price * (1 - percDiscount) * numDays * 100;

      if (e.target?.discount?.value === process.env.ADMIN_TEST_CODE) {
        console.log('discount added');
        setPrice(100); // finalPrice = 100
      }

      const { clientSecret, paymentIntentError } = await createPaymentIntent({
        price: price,
      });

      if (paymentIntentError) {
        throw paymentIntentError;
      }

      // Create the Payment Method Request
      const { paymentMethodReqId, paymentMethodReqError } =
        await createPaymentMethodReq({ stripe, cardElement, billingDetails });

      if (paymentMethodReqError) {
        throw paymentMethodReqError;
      }

      // Confirm the card payment
      const { paymentIntent, confirmCardPaymentError } =
        await confirmCardPayment({ stripe, clientSecret, paymentMethodReqId });

      if (confirmCardPaymentError) {
        throw confirmCardPaymentError;
      }

      // Create the booking in Smoobu
      const { smoobuId } = await makeReservation({
        startDate: reservations.new.startDate,
        endDate: reservations.new.endDate,
        name: reservations.new.name,
        firstName,
        lastName,
        email: billingDetails.email,
        guests: reservations.new.guests,
        price: parseFloat(price * (1 - percDiscount) * numDays),
        address: billingDetails.address,
      });

      // Update the reservation with reservationId and stripeId & SmoobuId
      if (reservationId && paymentIntent?.id && smoobuId) {
        await updateReservation({ reservationId, stripeId: paymentIntent.id });
      }
      //console.log({ stripeId: paymentIntent.id });

      setIsProcessing(false);
      history.push('/success');
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
    <div className='cart-container'>
      <header>
        <h1>Cart</h1>
      </header>
      {reservations?.new && (
        <div className='row'>
          <CartDetails reservation={reservations.new} />
        </div>
      )}
      <span className=''>
        {isAuthenticated ? (
          <form
            className='row'
            onSubmit={handleSubmit}
            onChange={(e) => discountPrice(e)}
          >
            <BillingDetails
              user={user}
              isDefault={isDefault}
              setIsDefault={setIsDefault}
            />
            <div className='card-element-container'>
              <CardElement
                options={cardElementOptions}
                onChange={handleCardDetailsChange}
              />
            </div>
            <span style={{ fontSize: '.5rem', margin: '0 auto' }}>
              Powered by Stripe
            </span>
            {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}

            <button className='btn submit' disabled={isProcessing || !stripe}>
              {isProcessing ? 'Processing...' : `Pay ${total}`}
            </button>
          </form>
        ) : (
          <div className='row'>
            <h2>Log in or sign up to book</h2>
            <Login />
          </div>
        )}
        <div className='row'>
          <p className='subtext'>
            Having troubles with checkout? Contact us at{' '}
            <a href='mailto:admin@masakaliretreat.com'>
              admin@masakaliretreat.com
            </a>
          </p>
        </div>
      </span>
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
})(Cart);
