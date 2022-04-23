import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../actions/auth';
import EmailLogin from './EmailLogin';
import EmailRegister from './EmailRegister';
import GoogleLoginButton from './GoogleLoginButton';

const Login = ({ errors }) => {
  const [toggle, setToggle] = useState('register');

  //if I want to have google open in a pop up https://www.youtube.com/watch?v=yICiz12SdI4
  // const googleLogin = () => {
  //   const newWindow = window.open(
  //     'http://localhost/5000/api/auth/google',
  //     '_blank',
  //     'width=500,height=600'
  //   );
  // };

  return (
    <span className='login-form'>
      {errors.length > 0 &&
        errors.map((error) => <p className='error'>{error.msg}</p>)}
      {toggle === 'login' ? (
        <EmailLogin setToggle={setToggle} />
      ) : (
        <EmailRegister setToggle={setToggle} />
      )}
      <GoogleLoginButton />
    </span>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.alert,
});

export default connect(mapStateToProps, { login })(Login);
