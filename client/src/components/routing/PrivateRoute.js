import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, user: { admin } }) => {
  return !admin ? <Navigate to='/' /> : children;
};

PrivateRoute.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(PrivateRoute);
