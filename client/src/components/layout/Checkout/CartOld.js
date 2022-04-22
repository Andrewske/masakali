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
} from '../../../actions/user';
import { serverUrl } from '../../../config';
import {
  createPaymentIntent,
  createPaymentMethodReq,
} from '../../../utils/stripe';
import useCurrencyFormat from '../../../utils/useCurrencyFormat';
import { percDiscount } from '../../../config';
import { makeReservation } from '../../../actions/smoobu';

const Cart = ({
  isAuthenticated,
  loadUser,
  reservations,
  user,
  createReservation,
  updateUser,
  updateReservation,
  createPaymentIntent,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);
  const [isDefault, setIsDefault] = useState(false);
  // const [price, setPrice] = useState(0);
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();
  // let { amount, total, discount } = useFormatCurrency(
  //   reservations.new.price,
  //   reservations.new.numDays
  // );

  let { price, numDays } = reservations.new;

  let total = useCurrencyFormat(price * (1 - percDiscount) * numDays);
  // useEffect(() => {
  //   reservations.new &&
  //     setPrice(reservations.new.price * reservations.new.numDays);
  // }, [reservations]);

  useEffect(() => {
    async function loginSuccess() {
      console.log(user);
      const config = {
        params: {
          user: user,
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
        console.error(err);
      }
    }

    loginSuccess();
  }, []);

  const handleCardDetailsChange = (e) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const billingDetails = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
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
    //setIsProcessing(true);

    updateUser({ userId: user._id, billingDetails, isDefault });

    // const { reservationId = null } = await createReservation({
    //   userId: user._id,
    //   reservation: reservations.new[0],
    // });

    // console.log(reservationId);

    const cardElement = elements.getElement(CardElement);

    try {
      // const {
      //   data: { error: backendError, clientSecret },
      // } = await axios.post(
      //   serverUrl + '/stripe/payment/create-payment-intent',
      //   {
      //     amount: price * 100,
      //   }
      // );

      // if (backendError) {
      //   setCheckoutError(backendError.message);
      //   setIsProcessing(false);
      //   return;
      // }

      const { clientSecret, paymentIntentError } = await createPaymentIntent({
        price: price * (1 - percDiscount) * numDays,
      });

      if (paymentIntentError) {
        console.error({ paymentIntentError });
        throw paymentIntentError.message;
      }

      console.log({ clientSecret });

      const { paymentMethodReq } = await createPaymentMethodReq({
        stripe,
        cardElement,
        billingDetails,
        setCheckoutError,
        setIsProcessing,
      });

      console.log({ paymentMethodReq });

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: paymentMethodReq.paymentMethod.id,
        }
      );

      console.log(paymentIntent);

      if (error) {
        setCheckoutError(error.message);
        setIsProcessing(false);
        return;
      } else {
        console.log('no error');
        // if (reservationId && paymentIntent?.id) {
        //   updateReservation({ reservationId, stripeId: paymentIntent.id });
        // }
      }

      makeReservation({
        startDate: reservations.new.startDate,
        endDat: reservations.new.endDate,
        name: reservations.new.name,
        firstName: billingDetails.firstName,
        lastName: billingDetails.lastName,
        email: billingDetails.email,
        guests: reservations.new.guests,
        price: total,
        address: billingDetails.address,
      });

      setIsProcessing(false);
      history.push('/success');
    } catch (err) {
      console.error({ location: 'handleSubmit', err });
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

      {isAuthenticated ? (
        <form className='row' onSubmit={handleSubmit}>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  reservations: state.user.reservations,
});

export default connect(mapStateToProps, {
  loadUser,
  createReservation,
  updateReservation,
  updateUser,
  createPaymentIntent,
})(Cart);
