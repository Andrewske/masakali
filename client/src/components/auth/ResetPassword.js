import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { loadUser, resetPassword } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';
import Alert from '../layout/Alert';

const ResetPassword = ({ loadUser, user, setAlert, resetPassword }) => {
  const [formData, setFormData] = useState({
    password: '',
    password2: '',
  });
  const [isUser, setIsUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const email = searchParams.get('email');

  const { password, password2 } = formData;

  const navigate = useNavigate();

  useEffect(() => {
    loadUser(searchParams.get('userId'));
  }, [searchParams]);

  useEffect(() => {
    if (userId == user._id && email == user.email) {
      setIsUser(true);
    }
  }, [searchParams, user]);

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) return;
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      let message = await resetPassword({ userId, email, password });
      console.log(message);
      if (message === 'Success') {
        setAlert('Success', 'success');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        setAlert(message, 'danger');
      }
    }
  };

  return isUser ? (
    <span className='container'>
      <form className='reset-password'>
        <h1>Reset Your Password</h1>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='New Password'
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
        {password.length > 0 && password.length < 6 && (
          <p className='small red'>Password must be more than 6 characters</p>
        )}
        <span
          className='show-password'
          onClick={() => setShowPassword(!showPassword)}
        >
          <i className='icon-view-show'></i>
          <p className='small'>Show Password</p>
        </span>
        <Alert />
        <span className='btn' onClick={handleSubmit}>
          Reset Password
        </span>
      </form>
    </span>
  ) : (
    <span className='container'>
      <div className='reset-password'>
        <h1>Sorry, no user found</h1>
        <p>Please try again</p>
        <div className='row'>
          <p className='small'>
            Having troubles? Contact us at{' '}
            <a href='mailto:admin@masakaliretreat.com'>
              admin@masakaliretreat.com
            </a>
          </p>
        </div>
      </div>
    </span>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { loadUser, setAlert, resetPassword })(
  ResetPassword
);
