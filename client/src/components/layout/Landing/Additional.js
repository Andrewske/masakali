import React from 'react';
import styled from 'styled-components';

import additional_structures from '../../../img/accommodations/additional_structures.jpeg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: stretch;
  justify-content: center;
  flex-grow: 1;
  min-height: 500px;
  min-width: 350px;
  flex-basis: 90%;
  flex-wrap: wrap;
  margin: 5px;
  color: #3a1b49;
  border: 5px solid #3a1b49;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-basis: 33%;
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-width: 350px;
  min-height: 350px;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 2;
  flex-basis: 33%;
  margin: 0 auto;
  min-width: 350px;
`;

const Additional = (props) => {
  return (
    <Container>
      <Left
        style={{
          backgroundImage: `url(${additional_structures})`,
        }}
      />
      <Center>
        <div className='feature-header' style={{ flexGrow: '0' }}>
          <h1>Additional Structures</h1>
        </div>
        <div className='feature-text'>
          <p>
            Adding a traditional Sumatra Batak house which sleeps 10 for 3
            months of YTT’s each year and the remaining 9 months will be
            converted to a 44-bedroom luxury guest house.{' '}
          </p>
          <p>
            3 Guesthouses Phase I: Total of 11 beds during yoga retreats and
            workshops for 6 months out of the year; total of 13 beds during 6
            months villa is not in use.
          </p>
          <p>Adding Café and Juice Bar</p>
          <p>Adding a Sound Healing Dome & Spa Facility.</p>
          <p>
            With 53 additional ara available for leasehold we will add 4 - 6
            additional guesthouses.
          </p>
        </div>
      </Center>
    </Container>
  );
};

Additional.propTypes = {};

export default Additional;
