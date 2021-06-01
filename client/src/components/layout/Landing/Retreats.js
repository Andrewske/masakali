import React from 'react';
import styled from 'styled-components';

import flowers_statue from '../../../img/retreats_and_workshops/flowers_statue.jpg';
import meditation_class from '../../../img/retreats_and_workshops/meditation_class.jpg';
import soundhealing_bowl from '../../../img/retreats_and_workshops/soundhealing_bowl.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  width: 100%;
  flex-basis: 90%;
  color: #3a1b49;
  border: 5px solid #3a1b49;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Image = styled.div`
  flex-grow: 1;
  margin: 1px;
  min-width: 200px;
  min-height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.1);
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Retreats = (props) => {
  return (
    <Container>
      <Images>
        <Image
          style={{
            backgroundImage: `url(${flowers_statue})`,
          }}
        />
        <Image
          style={{
            backgroundImage: `url(${meditation_class})`,
          }}
        />
        <Image
          style={{
            backgroundImage: `url(${soundhealing_bowl})`,
          }}
        />
      </Images>
      <TextBox>
        <div className='feature-header'>
          <h1>Retreats and Workshops</h1>
        </div>
        <div className='feature-text'>
          <p>Adventure into your Mind by meditation, </p>
          <p>Revive your Body with yoga</p>
          <p>Nourish your Spirit through healing sounds</p>
        </div>
      </TextBox>
    </Container>
  );
};

Retreats.propTypes = {};

export default Retreats;
