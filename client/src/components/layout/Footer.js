import React from 'react';
import PropTypes from 'prop-types';

import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

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
`;

const LinkStyle = styled.a`
  color: white;

  :hover {
    text-shadow: 1px 1px 1px yellow;
  }
`;

const linkData = [
  { id: 'home', name: 'Home' },
  { id: 'vision', name: 'Vision' },
  { id: 'accommodations', name: 'Accommodations' },
  { id: 'landing-gallery', name: 'Gallery' },
  { id: 'experience', name: 'Experience' },
  { id: 'organic_farm', name: 'Organic Farm' },
  { id: 'amenities', name: 'Amenities' },
  { id: 'contact', name: 'Contact' },
];

const Footer = (props) => {
  const linkItems = linkData.map((d) => (
    <Link
      className='footer-link'
      to={d.id}
      spy={true}
      smooth={true}
      offset={0}
      key={d.id}
    >
      {d.name}
    </Link>
  ));
  return (
    <Container className='purple'>
      <Info>
        <LinkStyle href='https://goo.gl/maps/VaiXjJZuJp4stygE9'>
          <p>Masakali</p>
          <p>Br. Ayah Kelusa Village Payangan</p>
          <p>Gianyar Bali 80572</p>
        </LinkStyle>
        <LinkStyle href='https://www.instagram.com/masakaliretreat'>
          <p>
            <FontAwesomeIcon
              icon={faInstagram}
              size='md'
              className='footer-icon'
            />{' '}
            /masakaliretreat
          </p>
        </LinkStyle>
        <LinkStyle href='https://www.instagram.com/masakaliretreat'>
          <p>
            <FontAwesomeIcon
              icon={faFacebook}
              size='md'
              className='footer-icon'
            />{' '}
            /masakaliretreat
          </p>
        </LinkStyle>
        <LinkStyle href='https://www.instagram.com/masakaliretreat'>
          <p>
            <FontAwesomeIcon
              icon={faEnvelope}
              size='md'
              className='footer-icon'
            />{' '}
            info@masakaliretreat.com
          </p>
        </LinkStyle>
      </Info>
      <Pages>{linkItems}</Pages>
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;
