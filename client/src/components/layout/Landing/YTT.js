import React from 'react';
import styled from 'styled-components';

import yoga_training from '../../../img/retreats_and_workshops/yoga_training.jpeg';
import yoga_training_2 from '../../../img/retreats_and_workshops/yoga_training_2.jpg';

const YTT = (props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    flex-grow: 1;
    min-height: 500px;
    min-width: 350px;
    flex-basis: 45%;
    flex-wrap: wrap;
    margin: 5px;
    color: #3a1b49;
    border: 5px solid #3a1b49;
  `;

  const Left = styled.div`
    flex-grow: 2;
    flex-basis: 40%;
    min-width: 200px;
    min-height: 200px;
  `;

  const Right = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-basis: 60%;
  `;

  return (
    <Container>
      <Left
        style={{
          backgroundImage: `url(${yoga_training_2})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Right>
        <div className='feature-header' style={{ flexGrow: '0' }}>
          <h1>Yoga Teacher Training</h1>
        </div>
        <div className='feature-text'>
          <p>
            With the ability to house a minimum of 25 guests and teachers, we
            are now able to host 3 to 4 week-long yoga teacher trainings.
          </p>
          <p>
            Perfectly located to provide the privacy necessary for these
            intensive courses while still being close to Ubud, Mount Batur and
            other destinations to explore and get a much deserved break.
          </p>
        </div>
      </Right>
    </Container>
  );
};

YTT.propTypes = {};

export default YTT;
