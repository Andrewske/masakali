import React from 'react';

//import { Link, animateScroll as scroll } from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import insta from '../../img/instagram-64.ico';
import facebook from '../../img/facebook.png';
import CountryPicker from './CountryPicker';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  width: 100%;
  color: white;
  padding: 50px;
  font-family: 'Avenir Book';
  bottom: 0;
  margin-bottom: 0;
`;

const Info = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Pages = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;
`;

const IconImg = styled.img`
  margin: auto;
  margin-right: 5px;
  height: 20px;
  width: 20px;
`;

const linkData = [
  { id: 'home', name: 'Home' },
  { id: 'availability', name: 'Availability' },
  { id: 'about', name: 'About' },
  { id: 'villas', name: 'Villas' },
  { id: 'dining', name: 'Dining' },
  { id: 'amenities', name: 'Amenities' },
];

const Footer = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const scrollToTarget = (el) => {
    var headerOffset = 200;
    var elPosition = el.getBoundingClientRect().top;
    var offsetPosition = elPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const linkItems = linkData.map((d) => (
    <Link
      className="footer-link"
      to={`/#${d.id}`}
      smooth
      key={d.id}
      scroll={(el) => scrollToTarget(el)}
    >
      {d.name}
    </Link>
  ));

  return (
    <Container className="background-purple">
      <Info>
        <a
          className="footer-link"
          href="https://goo.gl/maps/VaiXjJZuJp4stygE9"
        >
          <p>Masakali</p>
          <p>Br. Ayah Kelusa Payangan</p>
          <p>Gianyar Bali 80572</p>
          <p>+62 821-4635-5565</p>
        </a>
        <a
          className="footer-link"
          href="https://www.instagram.com/masakaliretreat"
        >
          <div style={{ display: 'flex', width: 'max-content' }}>
            <IconImg src={insta} />
            <p>/masakaliretreat</p>
          </div>
        </a>
        <a
          className="footer-link"
          href="https://www.facebook.com/masakaliretreat"
        >
          <div
            style={{
              display: 'flex',
              width: 'max-content',
            }}
          >
            <IconImg src={facebook} />
            <p>/masakaliretreat</p>
          </div>
        </a>
        <a
          className="footer-link"
          href="mailto: info@masakaliretreat.com"
        >
          <p>
            <span className="icon-email footer-icon" /> info@masakaliretreat.com
          </p>
        </a>
      </Info>
      <Pages>
        {linkItems}
        {/* <CountryPicker /> */}
        {user.name && (
          <span onClick={() => dispatch({ type: 'LOGOUT' })}>Log Out</span>
        )}
      </Pages>
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;
