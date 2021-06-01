import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const SidebarIcon = ({ handleClick, isOpen }) => {
  return (
    <span onClick={handleClick}>
      {isOpen ? (
        <FontAwesomeIcon icon={faTimes} size='2x' className='hamburger' />
      ) : (
        <FontAwesomeIcon icon={faBars} size='2x' className='hamburger' />
      )}
    </span>
  );
};

SidebarIcon.propTypes = {};

export default SidebarIcon;
