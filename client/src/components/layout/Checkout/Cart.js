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

const Cart = ({
  isAuthenticated,
  loadUser,
  reservations,
  user,
  createReservation,
  updateUser,
  updateReservation,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  const [isDefault, setIsDefault] = useState(false);
  const [price, setPrice] = useState(0);
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
    if (reservations.new.length > 0) {
      setPrice(
        reservations?.new
          .map((r) => r.price * r.numDays)
          .reduce((a, b) => a + b)
      );
    }
  }, [reservations]);

  useEffect(() => {
    async function loginSuccess() {
      const config = {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      };
      console.log('loginSuccess', serverUrl);
      const response = await axios.get(
        serverUrl + '/auth/login/success',
        config
      );
      console.log({ res: response.data });
      loadUser(response.data.user._id);
    }

    loginSuccess();
  }, []);

  const handleCardDetailsChange = (e) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const billingDetails = {
      name: e.target.name.value,
      email: e.target.email.value,
      address: {
        city: e.target.city.value,
        line1: e.target.address.value,
        state: e.target.state.value,
        country: e.target.country.value,
        postal_code: e.target.zip.value,
      },
    };
    //setIsProcessing(true);
    updateUser({ userId: user._id, billingDetails, isDefault });
    const { reservationId = null } = await createReservation({
      userId: user._id,
      reservation: reservations.new[0],
    });

    console.log(reservationId);
    const cardElement = elements.getElement(CardElement);

    try {
      const {
        data: { error: backendError, clientSecret },
      } = await axios.post(
        process.env.REACT_APP_API_URL + '/stripe/payment/create-payment-intent',
        {
          amount: price * 100,
        }
      );

      if (backendError) {
        setCheckoutError(backendError.message);
        setIsProcessing(false);
        return;
      }

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingDetails,
      });

      console.log(paymentMethodReq);

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setIsProcessing(false);
        return;
      }

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
        if (reservationId && paymentIntent?.id) {
          updateReservation({ reservationId, stripeId: paymentIntent.id });
        }
      }

      setIsProcessing(false);
      history.push('/success');
    } catch (err) {
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
      {reservations?.new.length > 0 ? (
        reservations?.new.map((reservation) => (
          <div className='row'>
            <CartDetails reservation={reservation} />
          </div>
        ))
      ) : (
        <></>
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
            {isProcessing ? 'Processing...' : `Pay $${price}`}
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
})(Cart);
