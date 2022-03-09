import React, { Fragment, useRef, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../actions/auth';
import EmailLogin from './EmailLogin';
import EmailRegister from './EmailRegister';
import GoogleLoginButton from './GoogleLoginButton';

const Login = ({ login, errors }) => {
  const [toggle, setToggle] = useState('register');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

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
