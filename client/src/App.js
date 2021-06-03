import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Gallery from './components/layout/Gallery/Gallery';
import Navbar from './components/layout/Navbar';
import Amenities from './components/layout/Landing/Amenities';
import Sidebar from './components/layout/Sidebar/Sidebar';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

//imageKitId = 4kpopox69zpcd

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          {/* <Navbar /> */}
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/amenities' component={Amenities} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
