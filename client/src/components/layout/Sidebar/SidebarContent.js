import React from 'react';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from 'react-scroll';

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

const SidebarLink = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
`;

const linkData = [
  { id: 'home', name: 'Home' },
  { id: 'vision', name: 'Vision' },
  { id: 'location', name: 'Location' },
  { id: 'phase_one', name: 'Phase One' },
  { id: 'gallery', name: 'Gallery' },
  { id: 'phase_two', name: 'Phase Two' },
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
          </div>
        )}
      </Transition>
    );
  };
  return (
    <Transition in={isOpen} timeout={duration}>
      {(state) => (
        <div
          className='sidebar'
          style={{ ...sidebarStyle, ...sidebarTransitionStyles[state] }}
        >
          {renderLinks(isOpen)}
        </div>
      )}
    </Transition>
  );
};

SidebarContent.propTypes = {};

export default SidebarContent;
