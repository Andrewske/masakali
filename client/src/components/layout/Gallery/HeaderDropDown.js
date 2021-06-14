import React from 'react';

import { Transition } from 'react-transition-group';
import styled from 'styled-components';

const duration = 100;

const dropdownStyle = {
  transition: `max-height ${duration}ms ease-in-out`,
  maxHeight: 0,
};

const dropdownTransitionStyles = {
  entering: { maxHeight: 0, overflow: 'hidden', padding: '0px' },
  entered: { height: 'auto', maxHeight: '500px', padding: '10px' },
  exiting: { height: 'auto', maxHeight: '500px', padding: '10px' },
  exited: { maxHeight: 0, overflow: 'hidden', padding: '0px' },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  position: absolute;
  background-color: #a38f9f;
  border-radius: 2px;
`;

const Link = styled.p`
  color: white;
  :hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const HeaderDropDown = ({ isOpen, data, changeImages }) => {
  const renderLinks = () =>
    data.map((l) => (
      <Link key={l.type} onClick={() => changeImages({ type: l.type })}>
        {l.name}
      </Link>
    ));
  return (
    <Transition in={isOpen} timeout={duration}>
      {(state) => (
        <Container
          style={{ ...dropdownStyle, ...dropdownTransitionStyles[state] }}
        >
          {renderLinks()}
        </Container>
      )}
    </Transition>
  );
};

export default HeaderDropDown;
