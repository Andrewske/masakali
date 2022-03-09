import React from 'react';
import GoogleLoginButton from '../../auth/GoogleLoginButton';
import EmailLogin from '../../auth/EmailLogin';

const CartLogin = () => {
  return (
    <div className='cart-login'>
      <h2>Log in or sign up to book</h2>
      <EmailLogin />
      <GoogleLoginButton />
    </div>
  );
};

export default CartLogin;
