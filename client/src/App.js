import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles/App.scss';
import './styles/react_dates_overrides.scss';

import ScrollToTop from './components/routing/ScrollToTop';
import Landing from './components/layout/Landing';
import Financials from './components/layout/Financials';
import Gallery from './components/layout/Gallery/Gallery';
import Amenities from './components/layout/Landing/Amenities';

import Sidebar from './components/layout/Sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
//import { loadUser } from './actions/auth';

//Amenities Pages
import Retreats from './components/layout/Amenities/Retreats';
import SoundHealing from './components/layout/Amenities/SoundHealing';
import YTT from './components/layout/Amenities/YTT';
import OrganicProducts from './components/layout/Amenities/OrganicProducts';
import Foundation from './components/layout/Amenities/Foundation';
import CafeJuiceBar from './components/layout/Amenities/CafeJuiceBar';
import Sustainable from './components/layout/Amenities/Sustainable';
import OrganicFarm from './components/layout/Amenities/OrganicFarm';
import Spa from './components/layout/Amenities/Spa';

// Listing Pages
import Surya from './components/layout/Listings/Surya';

//imageKitId = 4kpopox69zpcd

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Fragment>
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/investors' component={Financials} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/amenities' component={Amenities} />
            <Route exact path='/retreats-and-workshops' component={Retreats} />
            <Route exact path='/sound-healing' component={SoundHealing} />
            <Route exact path='/yoga-teacher-training' component={YTT} />
            <Route exact path='/cafe-juice-bar' component={CafeJuiceBar} />
            <Route exact path='/spa' component={Spa} />
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
            <Route exact path='/organic-farm' component={OrganicFarm} />
            <Route exact path='/listings/surya' component={Surya} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
