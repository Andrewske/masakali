import React from 'react';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { Transition } from 'react-transition-group';
import styled from 'styled-components';

const duration = 500;
const linkDuration = 1000;

const sidebarStyle = {
  transition: `width ${duration}ms`,
};

const sidebarTransitionStyles = {
  entering: { width: 0 },
  entered: { width: '200px' },
  exiting: { width: '200px' },
  exited: { width: 0 },
};

const linkStyle = {
  transition: `opacity ${duration}ms`,
};

const linkTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

const Sidebar = styled.div`
  width: 200px;
  padding-top: 50px;
`;

const SidebarLink = styled.a`
  color: black;
  padding: 15px;
`;

const Social = styled.div`
  display: flex;
  justify-content: start;
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

const SidebarContent = ({ isOpen, handleClick }) => {
  const linkItems = linkData.map((d) => (
    <Link
      className='sidebar-link'
      to={d.id}
      spy={true}
      smooth={true}
      offset={0}
      duration={linkDuration}
      onClick={handleClick}
      key={d.id}
    >
      {d.name}
    </Link>
  ));
  const renderLinks = () => {
    return (
      <Transition in={isOpen} timeout={duration}>
        {(state) => (
          <div style={{ ...linkStyle, ...linkTransitionStyles[state] }}>
            {linkItems}
            <Social>
              <SidebarLink href='https://www.instagram.com/masakaliretreat'>
                <p>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size='lg'
                    className='footer-icon'
                  />
                </p>
              </SidebarLink>
              <SidebarLink href='https://www.facebook.com/masakaliretreat'>
                <p>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size='lg'
                    className='footer-icon'
                  />
                </p>
              </SidebarLink>
            </Social>
          </div>
        )}
      </Transition>
    );
  };
  return (
    <Transition in={isOpen} timeout={duration}>
      {(state) => (
        <Sidebar
          //className='sidebar'
          style={{ ...sidebarStyle, ...sidebarTransitionStyles[state] }}
        >
          {renderLinks(isOpen)}
        </Sidebar>
      )}
    </Transition>
  );
};

SidebarContent.propTypes = {};

export default SidebarContent;
