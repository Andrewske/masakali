import React from 'react';
import styled from 'styled-components';

import Amenities from '../Landing/Amenities';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Left = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  min-width: 350px;
  padding: 25px;
  //max-height: 500px;
`;

const Right = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 350px;
`;

const TextBox = styled.div`
  display: grid;
  place-items: center;
  text-align: justify;
  width: min(550px, 90%);
`;
const Text = styled.p`
  padding: 5px;
`;

const YTT = (props) => {
  return (
    <section className='container'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>YOGA TEACHER TRAINING</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <ImageContext>
            <IKImage
              //className='carousel-image'
              path='/amenities-yoga-teacher-training_A3h6udN9A.jpg'
              transformation={[{ width: 'auto', height: '500px', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                height: '450px',
                width: '100%',
              }}
            />
          </ImageContext>
        </Left>
        <Right>
          <TextBox>
            <Text>
              With the ability to house a minimum of 25 guests and teachers, we
              are now able to host 3 to 4 week-long yoga teacher trainings.
            </Text>
            <Text>
              Perfectly located to provide the privacy necessary for these
              intensive courses while still being close to Ubud, Mount Batur and
              other destinations to explore and get a much deserved break.
            </Text>
          </TextBox>
        </Right>
      </Box>
      <Amenities items={{ desktop: 5, tablet: 2, mobile: 1 }} height={'100%'} />
    </section>
  );
};

YTT.propTypes = {};

export default YTT;
