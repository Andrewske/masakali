import React from 'react';

//import { Link, animateScroll as scroll } from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

import insta from '../../img/instagram-64.ico';
import facebook from '../../img/facebook.png';

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
  justify-content: space-between;
`;

const Pages = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const LinkStyle = styled.a`
  color: white;

  :hover {
    text-shadow: 1px 1px 1px yellow;
  }
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
        <LinkStyle href='https://goo.gl/maps/VaiXjJZuJp4stygE9'>
          <p>Masakali</p>
          <p>Br. Ayah Kelusa Village Payangan</p>
          <p>Gianyar Bali 80572</p>
        </LinkStyle>
        <LinkStyle href='https://www.instagram.com/masakaliretreat'>
          <div style={{ display: 'flex', width: 'fit-content' }}>
            <IconImg src={insta} />
            <p>/masakaliretreat</p>
          </div>
        </LinkStyle>
        <LinkStyle href='https://www.facebook.com/masakaliretreat'>
          <div style={{ display: 'flex', width: 'fit-content' }}>
            <IconImg src={facebook} />
            <p>/masakaliretreat</p>
          </div>
        </LinkStyle>
        <LinkStyle href='info@masakaliretreat.com'>
          <p>
            <span className='icon-email footer-icon' /> info@masakaliretreat.com
          </p>
        </LinkStyle>
      </Info>
      <Pages>{linkItems}</Pages>
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;
