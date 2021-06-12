import React, { useState } from 'react';

import styled from 'styled-components';
import SidebarContent from './SidebarContent';
import SidebarIcon from './SidebarIcon';

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: white;
  position: fixed;
  z-index: 10000;
  overflow: scroll;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarIcon isOpen={isOpen} handleClick={toggleSidebar} />
      <Container>
        <SidebarContent isOpen={isOpen} handleClick={toggleSidebar} />
      </Container>
    </>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
