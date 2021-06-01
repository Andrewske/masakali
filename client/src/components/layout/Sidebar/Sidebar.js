import React, { useState } from 'react';

import styled from 'styled-components';
import SidebarContent from './SidebarContent';
import SidebarIcon from './SidebarIcon';

const Container = styled.div`
  min-height: 100vh;
  background-color: white;
  position: fixed;
  z-index: 100;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <Container>
      <SidebarIcon isOpen={isOpen} handleClick={toggleSidebar} />
      <SidebarContent isOpen={isOpen} handleClick={toggleSidebar} />
    </Container>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
