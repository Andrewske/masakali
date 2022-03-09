import React from 'react';
const API_URL = 'http://localhost:5000/api';

const GoogleLoginButton = () => {
  const handleClick = () => {
    window.open(`${API_URL}/auth/google?redirect=cart`, '_self');
  };
  return (
    <div className='google-btn' onClick={handleClick}>
      <div className='google-icon-wrapper'>
        <img
          className='google-icon'
          src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
        />
      </div>
      <p className='btn-text'>
        <b>Sign in with google</b>
      </p>
    </div>
  );
};

export default GoogleLoginButton;
