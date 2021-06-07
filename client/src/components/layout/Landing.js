import React, { Fragment, useEffect, useState } from 'react';

import ImageContext from '../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

//sustainability
import MasakaliLogo from '../../img/masakali-home-logo.png';

//Layout
import Vision from './Landing/Vision';
import Location from './Landing/Location';
import Facilities from './Landing/Facilities';
import Gallery from './Landing/Gallery';
import MasakaliVideo from './Landing/MasakaliVideo';
import Experience from './Landing/Experience';
import Community from './Landing/Community';
import Amenities from './Landing/Amenities';
import ContactForm from './ContactForm';
import Footer from './Footer';

import { useHotkeys } from 'react-hotkeys-hook';
import LoginPopup from '../auth/LoginPopup';
import RegisterPopup from '../auth/RegisterPopup';
import YoutubeEmbed from '../../utils/YoutubeEmbed';

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
            <img src={MasakaliLogo} className='home-logo' />
            {/* <h1 className='x-large'>Masakali Retreat</h1> */}
          </div>
        </section>
        <Vision />
        <Location />
        <Facilities />
        <Gallery />
        <div
          id='landing-video'
          className='header'
          style={{ paddingTop: '50px' }}
        >
          <p>MASAKALI</p>
          <h1>Video</h1>
          <div className='divider' />
        </div>
        <YoutubeEmbed
          embedId={'9EfalIZ2NuA'}
          title={'Masakali Tour Video'}
          preview={
            'https://ik.imagekit.io/4kpopox69zp/drone-default-masakali-video_ZmltYP6bJ.jpg'
          }
        />
        {/* <MasakaliVideo /> */}
        <Experience />
        {/* <OrganicFarm /> */}
        <Community />
        <Amenities />
        <ContactForm />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Landing;
