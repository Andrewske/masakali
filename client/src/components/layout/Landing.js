import React, { Fragment, useEffect, useState } from 'react';
import masakaliView from '../../img/masakali_view.jpeg';
import masakaliJoglo from '../../img/masakali_joglo.jpeg';
import { useHotkeys } from 'react-hotkeys-hook';
import LoginPopup from '../auth/LoginPopup';
import RegisterPopup from '../auth/RegisterPopup';

const Landing = () => {
  const [imgs, setImgs] = useState([
    { id: 1, src: masakaliView },
    { id: 2, src: masakaliJoglo },
  ]);
  const [count, setCount] = useState(0);
  const [activeItem, setActiveItem] = useState(imgs[count]);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  useEffect(() => {
    setActiveItem(imgs[count]);
  }, [imgs, count]);

  useHotkeys('shift+l', () =>
    setShowLoginPopup((showLoginPopup) => !showLoginPopup)
  );
  useHotkeys('esc', () => {
    setShowLoginPopup((showLoginPopup) => false);
    setShowRegisterPopup((showRegisterPopup) => false);
  });

  const nextImg = (e) => {
    if (count < imgs.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  const prevImg = (e) => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(imgs.length - 1);
    }
  };

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
        <div className='landing-text'>
          <h1 className='x-large'>Masakali Retreat</h1>
          <p className='lead'>Coming Soon</p>
          <p>
            Location:{' '}
            <a href='https://goo.gl/maps/VaiXjJZuJp4stygE9'>
              Tengallalang, Bali
            </a>
            . Only 10 min north of Ubud
          </p>
        </div>
        <div className='landing-images'>
          <button className='previous' onClick={(e) => prevImg(e)}>
            <span>
              <i className='fas fa-angle-left'></i>
            </span>
          </button>
          <img
            className='active'
            src={activeItem.src}
            alt={`Default ${activeItem.id}`}
          />
          <button className='next' onClick={(e) => nextImg(e)}>
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
