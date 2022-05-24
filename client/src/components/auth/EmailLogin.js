import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

const EmailLogin = ({ login, setToggle }) => {
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
        type='password'
        placeholder='Password'
        name='password'
        minLength='6'
        value={password}
        autoComplete='current-password'
        onChange={(e) => onChange(e)}
      />
      <span onClick={handleSubmit} className='btn'>
        Login
      </span>
      <p className='sub-text'>
        Don't have an account?{' '}
        <span className='link' onClick={() => setToggle('register')}>
          Sign Up
        </span>
      </p>
    </form>
  );
};

export default connect(null, { login })(EmailLogin);
