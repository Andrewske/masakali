import React from 'react';
import styled from 'styled-components';

//import flowers_statue from '../../../img/retreats_and_workshops/flowers_statue.jpg';
//import meditation_class from '../../../img/retreats_and_workshops/meditation_class.jpg';
//import soundhealing_bowl from '../../../img/retreats_and_workshops/soundhealing_bowl.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 50px 0px 50px;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
`;

const Image = styled.div`
  flex-grow: 1;
  margin: 10px;
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
  padding-bottom: 25px;
  text-align: center;
`;

const Text = styled.p`
  padding: 5px;
`;

const Retreats = (props) => {
  return (
    <Container>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>RETREATS AND WORKSHOPS</h1>
        <div className='divider' />
      </div>
      <TextBox>
        <Text>Adventure into your Mind by meditation, </Text>
        <Text>Revive your Body with yoga</Text>
        <Text>Nourish your Spirit through healing sounds</Text>
      </TextBox>
      <Images>
        {/* <Image
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
        /> */}
      </Images>
    </Container>
  );
};

Retreats.propTypes = {};

export default Retreats;
