import React from 'react';
import { Link } from 'react-router-dom';

import { Transition } from 'react-transition-group';
import styled from 'styled-components';

const duration = 500;

const sublinkStyle = {
  transition: `max-height ${duration}ms ease-in-out`,
  maxHeight: 0,
};

const sublinkTransitionStyles = {
  entering: { maxHeight: 0, overflow: 'hidden' },
  entered: { height: 'auto', maxHeight: '500px' },
  exiting: { height: 'auto', maxHeight: '500px' },
  exited: { maxHeight: 0, overflow: 'hidden' },
};

const SubLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const SidebarSublinks = ({ isOpen, data }) => {
  const renderLinks = () =>
    data.map((l) => (
      <Link className='sidebar-sublink' to={`/${l.id}`} key={l.id}>
        {l.name}
      </Link>
    ));

  return (
    <Transition in={isOpen} timeout={duration}>
      {(state) => (
        <SubLinks
          style={{ ...sublinkStyle, ...sublinkTransitionStyles[state] }}
        >
          {renderLinks()}
        </SubLinks>
      )}
    </Transition>
  );
};

export default SidebarSublinks;
