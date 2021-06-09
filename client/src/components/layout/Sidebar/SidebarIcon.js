import React from 'react';

const SidebarIcon = ({ handleClick, isOpen }) => {
  return (
    <span onClick={handleClick}>
      {isOpen ? (
        <span className='icon-close sidebar-icon' />
      ) : (
        <span className='icon-bars sidebar-icon' />
      )}
    </span>
  );
};

SidebarIcon.propTypes = {};

export default SidebarIcon;
