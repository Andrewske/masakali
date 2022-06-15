import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children, auth: { isAuthenticated, loading } }) => {
  const navigate = useNavigate();
  return !isAuthenticated && !loading ? navigate('/') : children;
};
// <Route
//   {...rest}
//   render={(props) =>
//     !isAuthenticated && !loading ? <Navigate to='/' /> : children
//   }
// />

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
