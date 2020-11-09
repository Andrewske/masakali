import React, { Fragment, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';

const LoginPopup = ({ togglePopup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const loginRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        togglePopup();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [loginRef, togglePopup]);

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Fragment>
      <div className='popup'>
        <div className='popup-content' ref={loginRef}>
          <Alert />
          <h1 className='large text-primary'>Sign In</h1>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                minLength='6'
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <input type='submit' className='btn btn-primary' value='Login' />
          </form>
          <p className='my-1'>
            Don't have an account?{' '}
            <button onClick={() => togglePopup('register')}>Sign Up</button>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

LoginPopup.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(LoginPopup);
