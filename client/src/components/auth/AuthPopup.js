import React, { useState, useEffect, useRef } from 'react';
import Login from './Login';
import Register from './EmailRegister';
import Alert from '../layout/Alert';

const AuthPopup = () => {
  const [toggle, setToggle] = useState('login');

  const popupRef = useRef(null);
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (popupRef.current && !popupRef.current.contains(e.target)) {
  //       togglePopup();
  //     }
  //   };

  //   document.addEventListener('click', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [popupRef, togglePopup]);

  return (
    <div className='popup'>
      <div className='popup-content' ref={popupRef}>
        <Alert />
        {toggle === 'login' && <Login setToggle={setToggle} />}
        {toggle === 'register' && <Register setToggle={setToggle} />}
      </div>
    </div>
  );
};

export default AuthPopup;
