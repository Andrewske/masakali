import React, { useEffect } from 'react';
import { getErrors, getUsers } from '../../actions/admin';
import { connect } from 'react-redux';

import Errors from './Errors';

const Dashboard = ({ users, errors, getUsers, getErrors }) => {
  useEffect(() => {
    getUsers();
    getErrors();
  }, [getUsers, getErrors]);
  return <div className='container full'>Dashboard {errors && <Errors />}</div>;
};

const mapStateToProps = (state) => ({
  errors: state.admin.errors,
  users: state.admin.users,
});

export default connect(mapStateToProps, { getUsers, getErrors })(Dashboard);
