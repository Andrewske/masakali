import React, { useEffect, useState } from 'react';
import Logo from '../../img/masakali-home-logo.png';
import useBreakpoint from '../../utils/useBreakpoint';
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
    } else {
      window.onscroll = () =>
        window.pageYOffset <= 75 ? setHideHeader(false) : setHideHeader(true);

      return () => (window.onscroll = null);
    }
  });

  const scrollToTarget = (el) => {
    var headerOffset = 200;
    var elPosition = el.getBoundingClientRect().top;
    var offsetPosition = elPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={hideHeader ? 'header-container' : 'header-container show'}>
      <div className="main">
        <div>
          <Link
            smooth
            to="/#home"
          >
            <img
              src={Logo}
              alt="Masakali Logo"
              className="logo"
            />
          </Link>
        </div>
        {!isSmall && (
          <span className="links">
            <Link
              smooth
              to="/#home"
            >
              Home
            </Link>
            <Link
              to="/#villas"
              scroll={(el) => scrollToTarget(el)}
            >
              Villas
            </Link>
            <Link
              to="/#dining"
              scroll={(el) => scrollToTarget(el)}
            >
              Dining
            </Link>
            <Link
              to="/#amenities"
              scroll={(el) => scrollToTarget(el)}
            >
              Amenities
            </Link>
            <Link to="/retreats/shanti">Retreats</Link>
          </span>
        )}
        <div>
          <button
            id="header_book_now"
            className="button white"
            onClick={() => navigate('/villas', { replace: true })}
          >
            BOOK NOW
          </button>
        </div>
        {/* <CountryPicker /> */}
      </div>

      {isSmall && (
        <span
          className="expander"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <i className="icon-chevron-up" />
          ) : (
            <i className="icon-chevron-down" />
          )}
        </span>
      )}

      <span
        className={isExpanded ? 'expanded-content true' : 'expanded-content'}
      >
        <span className="links">
          <Link to="/#home">Home</Link>
          <Link to="/#villas">Villas</Link>
          <Link to="/#dining">Dining</Link>
          <Link to="/#amenities">Amenities</Link>
          {/* <Link to="/retreats/shanti">Retreats</Link> */}
          <Link to="/#yoga">Yoga</Link>
        </span>
      </span>
    </nav>
  );
};

export default Header;
