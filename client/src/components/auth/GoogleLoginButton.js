import React from 'react';
import { serverUrl } from '../../config';
import googleBtn from '../../img/btn_google_signin_dark_normal_web@2x.png';

const GoogleLoginButton = () => {
  const handleClick = (e) => {
    window.open(`${serverUrl}/auth/google?redirect=cart`, '_self');
  };

  return (
    <img
      src={googleBtn}
      className='google-btn'
      onClick={(e) => handleClick(e)}
      id='cart_google_login'
      alt='google_login_btn'
    />
  );
};

export default GoogleLoginButton;
