import React, { useEffect, useState } from 'react';
import Logo from '../../img/masakali-home-logo.png';
import useBreakpoint from '../../utils/useBreakpoint';
import CountryPicker from './CountryPicker';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Header = ({ hide }) => {
  const [isSmall, setIsSmall] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hideHeader, setHideHeader] = useState(hide);
  const point = useBreakpoint();
  const navigate = useNavigate();

  useEffect(() => {
    if (point === 'xs' || point === 'sm') {
      setIsSmall(true);
    } else {
      setIsSmall(false);
      setIsExpanded(false);
    }
  }, [point]);

  useEffect(() => {
    if (hide) {
      window.onscroll = () =>
        window.pageYOffset === 0 ? setHideHeader(true) : setHideHeader(false);

      return () => (window.onscroll = null);
    }
  });

  return (
    <div className={hideHeader ? 'header-container' : 'header-container show'}>
      <span className='main'>
        <div>
          <img src={Logo} alt='Masakali Logo' className='logo' />
        </div>
        {!isSmall && (
          <span className='links'>
            <Link to='/#home'>Home</Link>
            <Link to='/#villas'>Villas</Link>
            <Link to='/#dining'>Dining</Link>
            <Link to='/#amenities'>Amenities</Link>
          </span>
        )}
        <div>
          <button className='button white' onClick={() => navigate('/villas')}>
            BOOK NOW
          </button>
        </div>
        {/* <CountryPicker /> */}
      </span>

      {isSmall && (
        <span className='expander' onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            <i className='icon-chevron-up' />
          ) : (
            <i className='icon-chevron-down' />
          )}
        </span>
      )}

      <span
        className={isExpanded ? 'expanded-content true' : 'expanded-content'}
      >
        <span className='links'>
          <Link to='#home'>Home</Link>
          <Link to='#villas'>Villas</Link>
          <Link to='#dining'>Dining</Link>
          <Link to='#amenities'>Amenities</Link>
        </span>
      </span>
    </div>
  );
};

export default Header;
