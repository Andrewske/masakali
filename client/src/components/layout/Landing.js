import React, { Fragment } from 'react';

//Layout
import Home from './Landing/Home';
import Vision from './Landing/Vision';
import Location from './Landing/Location';
import Facilities from './Landing/Facilities';
import Booking from './Landing/Booking';
import Gallery from './Landing/Gallery';
import Experience from './Landing/Experience';
import Community from './Landing/Community';
import Amenities from './Landing/Amenities';
import Team from './Landing/Team';
import ContactSection from './Landing/ContactSection';

//import { useHotkeys } from 'react-hotkeys-hook';
import YoutubeEmbed from '../../utils/YoutubeEmbed';

import useWindowSize from '../../utils/useWindowSize';

const Landing = () => {
  const { width, height } = useWindowSize();

  // useHotkeys('shift+l', () =>
  //   setShowLoginPopup((showLoginPopup) => !showLoginPopup)
  // );
  // useHotkeys('esc', () => {
  //   setShowLoginPopup((showLoginPopup) => false);
  //   setShowRegisterPopup((showRegisterPopup) => false);
  // });

  return (
    <Fragment>
      <div className='landing'>
        {/* {showLoginPopup ? <LoginPopup togglePopup={togglePopup} /> : null}
        {showRegisterPopup ? <RegisterPopup togglePopup={togglePopup} /> : null} */}
        <Home />
        <Vision />
        <Location height={height} width={width} />
        <Facilities />
        <Booking />
        <Gallery width={width} />
        <div
          id='landing-video'
          className='header'
          style={{ paddingTop: '50px' }}
        >
          <p>MASAKALI</p>
          <h1>Video</h1>
          <div className='divider' />
        </div>
        {height && (
          <YoutubeEmbed
            embedId={'in8GqtSGIJ0'}
            title={'Masakali Tour Video'}
            preview={`https://ik.imagekit.io/4kpopox69zp/tr:h-${height},w-${width},c-at_max,dpr-auto/masakali-tour-video-thumbnail_UOIa12ChI.png`}
          />
        )}
        <Experience />
        <Community />
        <Amenities bg={'background-gray'} />
        <Team />
        <ContactSection />
      </div>
    </Fragment>
  );
};

export default Landing;
