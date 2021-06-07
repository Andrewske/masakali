import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap;
  padding: 50px 0px 50px;
`;

const Box = styled.div`
  display: grid;
  grid-column: 1 / 4;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  min-height: 100vh;
  margin-bottom: 25px;
`;

const TextBox = styled.div`
  height: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

const Left = styled.div`
  min-width: 350px;
`;
const Right = styled.div`
  min-width: 350px;
`;

const Heading = styled.h2`
  padding: 10px;
`;
const SubHeading = styled.h3`
  padding: 10px;
`;

const Text = styled.p`
  padding: 10px;
  text-align: justify;
`;

const Location = (props) => {
  return (
    <Container id='location' className='background-gray'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>THE LAND</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <ImageContext>
            <IKImage
              path='/location-drone-photo_YFB6yaJzxI2.jpg'
              transformation={[{ width: 'auto', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                height: '100%',
                width: '100%',
              }}
            />
          </ImageContext>
        </Left>

        <Right>
          <TextBox>
            <SubHeading>
              <a href='https://goo.gl/maps/VaiXjJZuJp4stygE9'>
                Kelusa, Payangan, Bali
              </a>
            </SubHeading>
            <Text>
              Nestled amidst lush green hues of rolling rice fields, surrounded
              by gardens of tropical jungle, resting poetically in the center of
              a green zone where there can be no further construction, is where
              you will find Masakali – a sanctuary for you to rest, rejuvenate,
              and reconnect with yourself and nature. We are located in a small
              village called Kelusa 20 minutes north of the center of Ubud - the
              heart and soul of this island paradise and Bali’s center for art,
              culture and healing.
            </Text>
          </TextBox>
        </Right>
      </Box>
    </Container>
  );
};

Location.propTypes = {};

export default Location;
