import React from 'react';
import { serverUrl } from '../../config';

const GoogleLoginButton = () => {
  const handleClick = () => {
    window.open(`${serverUrl}/auth/google?redirect=cart`, '_self');
  };
  return (
    <div className='google-btn' onClick={handleClick}>
      <div className='google-icon-wrapper'>
        <img
          className='google-icon'
          src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
          alt='google-icon'
        />
      </div>
      <p className='btn-text'>
        <b>Sign in with google</b>
      </p>
    </div>
  );
};

export default GoogleLoginButton;
