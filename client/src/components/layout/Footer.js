import React from 'react';

//import { Link, animateScroll as scroll } from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

import insta from '../../img/instagram-64.ico';
import facebook from '../../img/facebook.png';
import CountryPicker from './CountryPicker';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  width: 100%;
  color: white;
  padding: 50px;
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
  { id: 'vision', name: 'Vision' },
  { id: 'location', name: 'The Land' },
  { id: 'facilities', name: 'Facilities' },
  { id: 'landing-gallery', name: 'Gallery' },
  { id: 'landing-video', name: 'Video' },
  { id: 'experience', name: 'Experience' },
  { id: 'community', name: 'Community' },
  { id: 'amenities', name: 'Amenities' },
  { id: 'team', name: 'Team' },
  { id: 'contact', name: 'Contact' },
];

const Footer = (props) => {
  const linkItems = linkData.map((d) => (
    <Link className='footer-link' to={`/#${d.id}`} smooth key={d.id}>
      {d.name}
    </Link>
  ));
  return (
    <Container className='background-purple'>
      <Info>
        <a className='footer-link' href='https://goo.gl/maps/VaiXjJZuJp4stygE9'>
          <p>Masakali</p>
          <p>Br. Ayah Kelusa Payangan</p>
          <p>Gianyar Bali 80572</p>
        </a>
        <a
          className='footer-link'
          href='https://www.instagram.com/masakaliretreat'
        >
          <div style={{ display: 'flex', width: 'max-content' }}>
            <IconImg src={insta} />
            <p>/masakaliretreat</p>
          </div>
        </a>
        <a
          className='footer-link'
          href='https://www.facebook.com/masakaliretreat'
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
        <a className='footer-link' href='mailto: info@masakaliretreat.com'>
          <p>
            <span className='icon-email footer-icon' /> info@masakaliretreat.com
          </p>
        </a>
      </Info>
      <Pages>
        {linkItems}
        <Link to='/gallery' className='footer-link'>
          Full Gallery
        </Link>
        <Link to='/investors' className='footer-link'>
          Investors
        </Link>
        {/* <CountryPicker /> */}
      </Pages>
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;
