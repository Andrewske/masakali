import React, { Fragment, useEffect, useState } from 'react';

import ImageContext from '../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

//sustainability
import OrganicFarm from './Landing/OrganicFarm';

//experience
import Experience from './Landing/Experience';

import Vision from './Landing/Vision';
import Location from './Landing/Location';
import Amenities from './Landing/Amenities';
import Gallery from './Landing/Gallery';
import ContactForm from './ContactForm';
import Footer from './Footer';
import { useHotkeys } from 'react-hotkeys-hook';
import LoginPopup from '../auth/LoginPopup';
import RegisterPopup from '../auth/RegisterPopup';

const color = `#3a1b49`;

const MasakaliMain =
  'https://ik.imagekit.io/4kpopox69zp//masakali_joglo_1_main_Cpampp_Mv.jpg';

const Landing = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  useHotkeys('shift+l', () =>
    setShowLoginPopup((showLoginPopup) => !showLoginPopup)
  );
  useHotkeys('esc', () => {
    setShowLoginPopup((showLoginPopup) => false);
    setShowRegisterPopup((showRegisterPopup) => false);
  });

  const togglePopup = (type) => {
    if (type === 'login') {
      setShowRegisterPopup(false);
      setShowLoginPopup((showLoginPopup) => !showLoginPopup);
    } else if (type === 'register') {
      console.log('type = register');
      setShowLoginPopup(false);
      setShowRegisterPopup((showRegisterPopup) => !showRegisterPopup);
    } else {
      setShowLoginPopup(false);
      setShowRegisterPopup(false);
    }
  };

  return (
    <Fragment>
      <div className='landing'>
        {showLoginPopup ? <LoginPopup togglePopup={togglePopup} /> : null}
        {showRegisterPopup ? <RegisterPopup togglePopup={togglePopup} /> : null}
        <section id='home' className='home'>
          <ImageContext>
            <IKImage
              className='background-image'
              path='/main-photo_p9l1NRPmw.jpg'
              transformation={[{ width: 'auto', dpr: 'auto' }]}
              loading='lazy'
            />
          </ImageContext>
          <div className='home-text'>
            <h1 className='x-large'>Masakali Retreat</h1>
          </div>
        </section>
        <Vision />
        <Location />
        <Gallery />
        <Experience />
        <OrganicFarm />
        <Amenities />
        <ContactForm />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Landing;
