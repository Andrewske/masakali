import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const EmailRegister = ({ setAlert, setToggle, register }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ firstName, lastName, email, password });
    }
  };

  return (
    <form className='email-login'>
      <input
        type='text'
        placeholder='First Name'
        name='firstName'
        value={firstName}
        onChange={(e) => onChange(e)}
        required
      />
      <input
        type='text'
        placeholder='Last Name'
        name='lastName'
        value={lastName}
        onChange={(e) => onChange(e)}
        required
      />
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
        autoComplete='new-password'
        onChange={(e) => onChange(e)}
      />
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Confirm Password'
        name='password2'
        minLength='6'
        value={password2}
        onChange={(e) => onChange(e)}
      />
      <span
        className='show-password'
        onClick={() => setShowPassword(!showPassword)}
      >
        <i className='icon-view-show'></i>
        <p className='small'>Show Password</p>
      </span>
      <span className='btn' onClick={handleSubmit}>
        Register
      </span>
      <p className='sub-text'>
        Already have an account?{' '}
        <span className='link' onClick={() => setToggle('login')}>
          Sign In
        </span>
      </p>
    </form>
  );
};

EmailRegister.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(EmailRegister);
