import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderDropDown from './HeaderDropDown';
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  height: 65px;
  width: 100vw;
  background-color: #3a1b49;
  z-index: 1;
`;

const HeaderLink = styled.div`
  text-align: center;
  width: 150px;
  height: 100%;
  color: white;
`;

const Link = styled.p`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  margin: auto;
  :hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const Header = ({ changeImages }) => {
  const [constructionIsOpen, setConstructionIsOpen] = useState(false);
  const [completedIsOpen, setCompletedIsOpen] = useState(false);

  const handleClick = (type) => {
    console.log(type);
  };

  return (
    <Container>
      <HeaderLink
        onMouseEnter={() => setConstructionIsOpen(true)}
        onMouseLeave={() => setConstructionIsOpen(false)}
        onClick={() => changeImages({ type: 'yogaShala' })}
      >
        <Link>Under Construction</Link>
        <HeaderDropDown
          isOpen={constructionIsOpen}
          data={[
            { type: 'yogaShala', name: 'Yoga Shala' },
            //{ type: 'jalaConstruction', name: 'Jala' },
          ]}
          changeImages={changeImages}
        />
      </HeaderLink>

      <HeaderLink
        onMouseEnter={() => setCompletedIsOpen(true)}
        onMouseLeave={() => setCompletedIsOpen(false)}
      >
        <Link>Completed</Link>
        <HeaderDropDown
          isOpen={completedIsOpen}
          data={[
            { type: 'surya', name: 'Surya' },
            { type: 'jala', name: 'Jala' },
            { type: 'chandra', name: 'Chandra' },
          ]}
          changeImages={changeImages}
        />
      </HeaderLink>
      <HeaderLink onClick={() => changeImages({ type: 'views' })}>
        <Link>Views</Link>
      </HeaderLink>
    </Container>
  );
};

export default Header;
