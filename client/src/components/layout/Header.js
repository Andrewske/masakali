import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 10px;
  padding: 0px 50px 0px 50px;
`;

const amenities = [
  { id: 'retreats-and-workshops', name: 'Retreats & Workshops' },
  { id: 'sound-healing', name: 'Sound Healing' },
  { id: 'yoga-teacher-training', name: 'Yoga Teacher Training' },
  { id: 'organic-beauty-products', name: 'Organic Beauty Products' },
  { id: 'foundation', name: 'Foundation' },
  { id: 'cafe-juice-bar', name: 'Cafe Juice Bar' },
  { id: 'sustainable-development', name: 'Sustainable Development' },
  { id: 'organic-farm', name: 'Organic Farm' },
];

const Header = ({ type }) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    switch (type) {
      case 'amenities':
        setMenu(amenities);
      default:
        return;
    }
  });

  return (
    menu && (
      <Container className='bg-purple'>
        {menu.map((i) => (
          <Link to={`/${i.id}`} key={i.id} style={{ flexGrow: 1 }}>
            {i.name}
          </Link>
        ))}
      </Container>
    )
  );
};

export default Header;
