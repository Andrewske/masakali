import React, { useEffect } from 'react';
import { getErrors, getUsers } from '../../actions/admin';
import { connect } from 'react-redux';

const Dashboard = ({ getUsers, getErrors }) => {
  useEffect(() => {
    getUsers();
    getErrors();
  }, []);
  return <div className='container full'>Dashboard</div>;
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { getUsers, getErrors })(Dashboard);
