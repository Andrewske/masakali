import React, { Fragment, useState, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SidebarSublinks from './SidebarSublinks';
import { connect } from 'react-redux';
import { LOGOUT } from '../../../actions/types';

import { Transition } from 'react-transition-group';
import styled from 'styled-components';

const duration = 500;

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
  height: 100%;
`;

const SidebarLink = styled.a`
  color: black;
  padding: 15px;
`;

const Social = styled.div`
  display: flex;
  justify-content: start;
`;

const ExtLink = styled.div`
  display: flex;
  justify-content: space-between;
`;

const amenities = [
  { id: 'retreats-and-workshops', name: 'Retreats & Workshops' },
  { id: 'sound-healing', name: 'Sound Healing' },
  { id: 'yoga-teacher-training', name: 'Yoga Teacher Training' },
  { id: 'organic-beauty-products', name: 'Organic Beauty Products' },
  { id: 'foundation', name: 'Foundation' },
  { id: 'cafe-juice-bar', name: 'Cafe And Juice Bar' },
  { id: 'sustainable-development', name: 'Sustainable Development' },
  { id: 'organic-farm', name: 'Organic Farm' },
];

const linkData = [
  { id: 'home', name: 'Home' },
  { id: 'vision', name: 'Vision' },
  { id: 'location', name: 'The Land' },
  { id: 'facilities', name: 'Facilities' },
  { id: 'landing-gallery', name: 'Gallery' },
  { id: 'landing-video', name: 'Video' },
  { id: 'experience', name: 'Experience' },
  { id: 'community', name: 'Community' },
  { id: 'amenities', name: 'Amenities', subLinks: amenities },
  { id: 'team', name: 'Team' },
  { id: 'contact', name: 'Contact' },
];

const SidebarContent = ({ isOpen, handleClick, logout }) => {
  const [amenityIsOpen, setAmenityIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const openLinks = () => {
    setAmenityIsOpen((amenityIsOpen) => !amenityIsOpen);
  };

  const linkItems = linkData.map((d) =>
    d?.subLinks ? (
      <Fragment key={d.id}>
        <ExtLink>
          <Link
            className='sidebar-link'
            smooth
            to={`/#${d.id}`}
            onClick={handleClick}
            key={d.id}
          >
            {d.name}
          </Link>
          <div style={{ padding: '15px' }} onClick={openLinks}>
            <p>
              {amenityIsOpen ? (
                <span className='icon-chevron-up footer-icon' />
              ) : (
                <span className='icon-chevron-down footer-icon' />
              )}
            </p>
          </div>
        </ExtLink>
        <SidebarSublinks isOpen={amenityIsOpen} data={d.subLinks} />
      </Fragment>
    ) : (
      <Link
        className='sidebar-link'
        smooth
        to={`/#${d.id}`}
        onClick={handleClick}
        key={d.id}
      >
        {d.name}
      </Link>
    )
  );
  const renderLinks = (isOpen) => {
    return (
      <Transition in={isOpen} timeout={duration} nodeRef={nodeRef}>
        {(state) => (
          <div
            ref={nodeRef}
            style={{ ...linkStyle, ...linkTransitionStyles[state] }}
          >
            {linkItems}
            <ExtLink>
              <Link to={'/investors'} className='sidebar-link'>
                Investors
              </Link>
            </ExtLink>
            <ExtLink>
              <span className='sidebar-link' onClick={() => logout()}>
                Logout
              </span>
            </ExtLink>

            <Social>
              <SidebarLink href='https://www.instagram.com/masakaliretreat'>
                <span className='icon-instagram footer-icon' />
              </SidebarLink>
              <SidebarLink href='https://www.facebook.com/masakaliretreat'>
                <span className='icon-facebook-square footer-icon' />
              </SidebarLink>
            </Social>
          </div>
        )}
      </Transition>
    );
  };
  return (
    <Transition in={isOpen} timeout={duration} nodeRef={nodeRef}>
      {(state) => (
        <Sidebar
          //className='sidebar'
          style={{ ...sidebarStyle, ...sidebarTransitionStyles[state] }}
          ref={nodeRef}
        >
          {renderLinks(isOpen)}
        </Sidebar>
      )}
    </Transition>
  );
};

SidebarContent.propTypes = {};

const mapDispatchToProps = (dispatch) => ({
  logout: (payload) => dispatch({ type: LOGOUT }),
});

export default connect(null, mapDispatchToProps)(SidebarContent);
