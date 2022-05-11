import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles/App.scss';
import './styles/slideTransition.scss';

import ScrollToTop from './components/routing/ScrollToTop';
import Landing from './components/layout/Landing';
import Financials from './components/layout/Financials';
import Gallery from './components/layout/Gallery/Gallery';
import Amenities from './components/layout/Landing/Amenities';

import Sidebar from './components/layout/Sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
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
import Chandra from './components/layout/Listings/Chandra';
import Jala from './components/layout/Listings/Jala';

// Checkout Pages
import Cart from './components/layout/Checkout/Cart';
import Success from './components/layout/Checkout/Success';

import Footer from './components/layout/Footer';
import CountryPicker from './components/layout/CountryPicker';

//imageKitId = 4kpopox69zpcd

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <PersistGate persistor={persistor}>
          <ScrollToTop />
          {/* <CountryPicker /> */}
          <Fragment>
            <Sidebar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/investors' component={Financials} />
              <Route exact path='/gallery' component={Gallery} />
              <Route exact path='/amenities' component={Amenities} />
              <Route
                exact
                path='/retreats-and-workshops'
                component={Retreats}
              />
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
              <Route exact path='/listings/chandra' component={Chandra} />
              <Route exact path='/listings/jala' component={Jala} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/success' component={Success} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Switch>
            <Footer />
          </Fragment>
        </PersistGate>
      </Router>
    </Provider>
  );
};

export default App;
