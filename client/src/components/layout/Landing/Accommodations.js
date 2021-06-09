import React from 'react';
import styled from 'styled-components';

import guesthouse_interior from '../../../img/accommodations/guesthouse_interior.jpg';
import guesthouse_showers from '../../../img/accommodations/guesthouse_showers.JPG';
import guesthouses from '../../../img/accommodations/guesthouses.jpg';
import main_house from '../../../img/accommodations/main_house.jpg';
import meditation_center from '../../../img/accommodations/meditation_center.jpg';
import yoga_shala from '../../../img/accommodations/yoga_shala.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  flex-basis: 66%;
  flex-grow: 1;
  flex-wrap: wrap;
`;

const Image = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  flex-grow: 1;
  height: 300px;
  min-width: 300px;
  border: 1px solid #3a1b49;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.1);
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 33%;
  max-width: 33%;
  min-width: 300px;
  justify-content: center;
`;

const Header = styled.div`
  flex-grow: 1;
`;

const SubHeader = styled.div`
  flex-grow: 1;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 75%;
  margin: 0 auto;
  padding: 15px;
  text-align: center;
`;

const Accommodations = (props) => {
  return (
    <Container>
      <Images>
        <Image
          style={{
            backgroundImage: `url(${yoga_shala})`,
          }}
        >
          <p>Yoga Shala</p>
        </Image>
        <Image
          style={{
            backgroundImage: `url(${main_house})`,
          }}
        >
          <p>Main House</p>
        </Image>
        <Image
          style={{
            backgroundImage: `url(${meditation_center})`,
          }}
        >
          <p>Meditation Center</p>
        </Image>
        <Image
          style={{
            backgroundImage: `url(${guesthouses})`,
          }}
        >
          <p>Guesthouses</p>
        </Image>
        <Image
          style={{
            backgroundImage: `url(${guesthouse_interior})`,
          }}
        >
          <p>Guesthouse Interior</p>
        </Image>
        <Image
          style={{
            backgroundImage: `url(${guesthouse_showers})`,
          }}
        >
          <p>Guesthouse Showers</p>
        </Image>
      </Images>
      <TextBox>
        <Header>
          <h1>Accommodations</h1>
        </Header>
        <SubHeader>
          <h3>Luxury 3-bedroom Villa</h3>
          <h3>&</h3>
          <h3>3 Guest Houses</h3>
        </SubHeader>
        <Text>
          <p>
            3 Guesthouses Phase I: Total of 11 beds during yoga retreats and
            workshops for 6 months out of the year; total of 13 beds during 6
            months villa is not in use.
          </p>
        </Text>
      </TextBox>
    </Container>
  );
};

export default Accommodations;
