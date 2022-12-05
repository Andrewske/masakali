import React from 'react';
import { serverUrl } from '../../config';

const GoogleLoginButton = () => {
  const handleClick = (e) => {
    window.open(`${serverUrl}/auth/google?redirect=cart`, '_self');
  };

  return (
    <span
      className='google-btn'
      onClick={(e) => handleClick(e)}
      id='cart_google_login'
    >
      <div className='google-icon-wrapper' id='cart_google_login'>
        <img
          className='google-icon'
          src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
          alt='google-icon'
          id='cart_google_login'
        />
      </div>
      <p className='btn-text' id='cart_google_login'>
        Sign in with Google
      </p>
    </span>
  );
};

export default GoogleLoginButton;
