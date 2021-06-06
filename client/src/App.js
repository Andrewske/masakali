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

//Amenities Pages
import Retreats from './components/layout/Amenities/Retreats';
import SoundHealing from './components/layout/Amenities/SoundHealing';
import YTT from './components/layout/Amenities/YTT';
import OrganicProducts from './components/layout/Amenities/OrganicProducts';
import Foundation from './components/layout/Amenities/Foundation';
import CafeJuiceBar from './components/layout/Amenities/CafeJuiceBar';
import Sustainable from './components/layout/Amenities/Sustainable';

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
            <Route exact path='/retreats' component={Retreats} />
            <Route exact path='/sound-healing' component={SoundHealing} />
            <Route exact path='/yoga-teacher-training' component={YTT} />
            <Route exact path='/cafe-juice-bar' component={CafeJuiceBar} />
            <Route
              exact
              path='/sustainable-development'
              component={Sustainable}
            />
            <Route
              exact
              path='/organic-beauty-products'
              component={OrganicProducts}
            />
            <Route exact path='/foundation' component={Foundation} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
