import React, { Fragment, useEffect, useState } from 'react';

import masakaliMain from '../../img/masakali_joglo_1_main.jpg';

//accommodation_photos
import Accommodations from './Landing/Accommodations';
import Additional from './Landing/Additional';
//retreats and workshops
import Retreats from './Landing/Retreats';
import YTT from './Landing/YTT';
//community
import Community from './Landing/Community';
import Foundation from './Landing/Foundation';

//sound healing
import SoundHealing from './Landing/SoundHealing';

//sustainability
import Sustainable from './Landing/Sustainable';
import OrganicProducts from './Landing/OrganicProducts';
import OrganicFarm from './Landing/OrganicFarm';

//experience
import Experience from './Landing/Experience';
import Spa from './Landing/Spa';
import CafeJuiceBar from './Landing/CafeJuiceBar';

import Gallery from './Landing/Gallery';
import ContactForm from './ContactForm';

import { useHotkeys } from 'react-hotkeys-hook';
import LoginPopup from '../auth/LoginPopup';
import RegisterPopup from '../auth/RegisterPopup';

const color = `#3a1b49`;

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

  //   useKeyboardShortcut(['Shift', 'L'], () => {
  //     toggle();
  //     console.log(isToggled);
  //   });

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
        <section
          id='home'
          className='section-column'
          style={{
            backgroundImage: `url(${masakaliMain})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className='landing-text'>
            <h1 className='x-large'>Masakali Retreat</h1>
          </div>
        </section>
        <section id='vision' className='section-column'>
          <div className='header' style={{ marginTop: '0px' }}>
            <h1>Vision</h1>
          </div>
          <div className='section-header'>
            <h3>- Masakali -</h3>
            <p>
              A romance of an extraordinary destination with nourishment of the
              mind, body and spirit, exemplary service and premium, yet
              ecologically conscious, accommodations. Join us on the Island of
              the Gods
            </p>
            <h3>- Bali -</h3>
            <p>
              With its serene landscape and rich culture. Whether you are
              looking for a refreshing holiday, a thrilling adventure or to
              immerse yourself spiritually, every aspect of Bali invites you to
              take a step on your journey towards happiness and fulfillment. The
              heart and soul of this island paradise is Bali’s center for art,
              culture and healing
            </p>
            <h3>- Ubud -</h3>
            <p>
              A mere twenty minutes north of Ubud nestled amidst lush green hues
              of rolling rice fields and surrounded by gardens of tropical
              jungle resting poetically in the center of a green zone, you will
              find us– a sanctuary for you to rest, rejuvenate, and reconnect
              with yourself and nature. We are dedicated to providing this safe
              haven to you all the while being conscious of using earth’s
              natural resources responsibly and conscious of the impact on the
              local community
            </p>
          </div>
        </section>
        <section id='location' className='section-row'>
          <div
            className='section-row-img'
            style={{
              backgroundImage: `url(${masakaliMain})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></div>
          <div className='section-row-text'>
            <div className='section-header'>
              <h1>Location</h1>
              <h3>
                <a href='https://goo.gl/maps/VaiXjJZuJp4stygE9'>
                  Kelusa, Payangan, Bali
                </a>
              </h3>
              <div className='section-text-block'>
                <p>
                  Nestled in rice fields, surrounded by tropical jungle and
                  local farms is where you find Kelusa, a small village located
                  20 minutes outside the heart of Ubud.
                </p>
                <p> A place to experience your natural state of abundance.</p>
                <p>
                  By offering a sanctuary for holidays, retreats and a variety
                  of workshops we are aiming to empower both individuals and the
                  local community.
                </p>
                <p>
                  Our goal is to create a space where we invite you to reconnect
                  with yourself, others and nature
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id='phase_one' className='section-row'>
          <div className='header'>
            <h1>Phase One</h1>
          </div>
          <div className='features'>
            <Accommodations />
            <Retreats />
            <Community color={color} />
            <SoundHealing color={color} />
            <Sustainable />
            <Experience />
          </div>
        </section>
        <section id='gallery' className='section-row'>
          <div className='header'>
            <h1>Gallery</h1>
          </div>
          <Gallery />
        </section>
        <section id='phase_two' className='section-row'>
          <div className='header'>
            <h1>Phase Two</h1>
          </div>
          <div className='features'>
            <Additional />
            <YTT />
            <OrganicProducts />
            <Foundation />
            <Spa />
            <CafeJuiceBar />
            <OrganicFarm />
          </div>
        </section>
        <ContactForm />
      </div>
    </Fragment>
  );
};

export default Landing;
