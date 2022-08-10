import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import Alert from '../layout/Alert';
import { sendPasswordReset } from '../../actions/sendgrid';
import { setAlert } from '../../actions/alert';

const EmailLogin = ({ login, setToggle, setAlert }) => {
  const [showPassword, setShowPassword] = useState(false);
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

  const emailValidation = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      return false;
    }
    return true;
  };

  const resetPassword = async () => {
    if (!emailValidation()) {
      setAlert('Please give a valid email', 'danger');
      return;
    }

    let { error } = await sendPasswordReset({ email });

    if (error) {
      setAlert(error, 'danger');
    } else {
      setAlert('Please check your email for reset link', 'danger');
    }
  };

  return (
    <form className='email-login'>
      <input
        type='email'
        placeholder='Email Address'
        name='email'
        value={email}
        onChange={(e) => onChange(e)}
        required
      />
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Password'
        name='password'
        minLength='6'
        value={password}
        autoComplete='current-password'
        onChange={(e) => onChange(e)}
      />
      <span
        className='show-password'
        onClick={() => setShowPassword(!showPassword)}
      >
        <p className='small'>{showPassword ? 'Hide' : 'Show'} Password</p>
      </span>
      <span onClick={handleSubmit} className='button purple'>
        Login
      </span>
      <p className='sub-text'>
        Forgot your password?{' '}
        <span className='link' onClick={resetPassword}>
          Reset Password
        </span>
      </p>
      <p className='sub-text'>
        Don't have an account?{' '}
        <span className='link' onClick={() => setToggle('register')}>
          Sign Up
        </span>
      </p>
    </form>
  );
};

export default connect(null, { login, setAlert })(EmailLogin);
