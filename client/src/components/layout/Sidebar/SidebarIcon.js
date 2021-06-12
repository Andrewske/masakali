import React from 'react';

const SidebarIcon = ({ handleClick, isOpen }) => {
  return (
    <>
      {isOpen ? (
        <span className='icon-close sidebar-icon' onClick={handleClick} />
      ) : (
        <span className='icon-bars sidebar-icon' onClick={handleClick} />
      )}
    </>
  );
};

SidebarIcon.propTypes = {};

export default SidebarIcon;
