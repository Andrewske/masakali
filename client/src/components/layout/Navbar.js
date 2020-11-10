import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Link } from 'react-router-dom';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'> Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = <Fragment />;

  return (
    <nav class='navbar bg-light'>
      <h1>
        <a href='index.html'>Masakali</a>
      </h1>
      <ul>
        <li>
          <a href='https://www.instagram.com/masakaliretreat'>
            <i className='fa fa-instagram fa-lg icon' aria-hidden='true'></i>
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/masakaliretreat'>
            <i className='fa fa-facebook fa-lg icon' aria-hidden='true'></i>
          </a>{' '}
        </li>
      </ul>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
