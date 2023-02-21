import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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

import {QueryClient, QueryClientProvider} from 'react-query';





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
import MessageModal from './components/layout/MessageModal';

// New Landing Page
import Home from './components/layout/Home/Home';

// New Listing Pages
import Villas from './components/layout/Villas/Template';

// Auth Pages
import Login from './components/auth/Login';
import ResetPassword from './components/auth/ResetPassword';

//imageKitId = 4kpopox69zpcd

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const queryClient = new QueryClient();

const App = () => {
  return (
    
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <Router>
        <PersistGate persistor={persistor}>
          <ScrollToTop />
          {/* <CountryPicker /> */}
          <Fragment>
            {/* <Sidebar /> */}
            <Routes>
              <Route exact path='/investors' element={<Landing />} />
              <Route exact path='/login' element={<Login />} />
              <Route
                exact
                path='/investors/investors'
                element={<Financials />}
              />
              <Route exact path='/investors/gallery' element={<Gallery />} />
              <Route
                exact
                path='/investors/amenities'
                element={<Amenities />}
              />
              <Route
                exact
                path='/investors/retreats-and-workshops'
                element={<Retreats />}
              />
              <Route
                exact
                path='/investors/sound-healing'
                element={<SoundHealing />}
              />
              <Route
                exact
                path='/investors/yoga-teacher-training'
                element={<YTT />}
              />
              <Route
                exact
                path='/investors/cafe-juice-bar'
                element={<CafeJuiceBar />}
              />
              <Route exact path='/investors/spa' element={<Spa />} />
              <Route
                exact
                path='/investors/sustainable-development'
                element={<Sustainable />}
              />
              <Route
                exact
                path='/investors/organic-beauty-products'
                element={<OrganicProducts />}
              />
              <Route
                exact
                path='/investors/foundation'
                element={<Foundation />}
              />
              <Route
                exact
                path='/investors/organic-farm'
                element={<OrganicFarm />}
              />
              <Route
                exact
                path='/investors/listings/surya'
                element={<Surya />}
              />
              <Route
                exact
                path='/investors/listings/chandra'
                element={<Chandra />}
              />
              <Route exact path='/investors/listings/jala' element={<Jala />} />
              <Route exact path='/cart' element={<Cart />} />
              <Route exact path='/success' element={<Success />} />
              {/* <Route exact path='/home' element={<Home />} /> */}
              <Route exact path='/reset-password' element={<ResetPassword />} />
              <Route path='/' element={<Home />} />

              {/* <Route
                path='/home'
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              /> */}
              <Route path='/villas' element={<Villas />} />
              <Route
                path='/dashboard'
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
            {/* <MessageModal /> */}
            <Footer />
          </Fragment>
        </PersistGate>
      </Router>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
