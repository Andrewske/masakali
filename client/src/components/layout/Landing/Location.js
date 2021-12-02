import React from 'react';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  flex-grow: 1;
  flex-basis: 50%;
`;
const Right = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  width: 90%;
  min-width: 300px;
`;

const SubHeading = styled.h2`
  padding: 0px;
`;

const Text = styled.p`
  padding: 10px;
  text-align: justify;
`;

const Location = ({ width, height }) => {
  const actualWidth = width > height ? height : width;
  return (
    <section id='location' className='container background-gray'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>THE LAND</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          {height && (
            <ImageContext>
              <IKImage
                path='/location-drone-photo_YFB6yaJzxI2.jpg'
                transformation={[
                  {
                    height: height,
                    width: actualWidth,
                    fo: 'center',
                    dpr: 'auto',
                  },
                ]}
                lqip={{ active: true }}
                loading='lazy'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: '700px',
                  width: '100%',
                }}
              />
            </ImageContext>
          )}
        </Left>

        <Right>
          <TextBox>
            <SubHeading>Kelusa, Payangan, Bali</SubHeading>
            <a
              style={{ fontSize: '.75em' }}
              className='purple'
              href='https://goo.gl/maps/VaiXjJZuJp4stygE9'
            >
              Get directions
            </a>
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
    </section>
  );
};

export default Location;
