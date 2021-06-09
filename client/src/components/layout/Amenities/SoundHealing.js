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
  max-width: 450px;
  display: grid;
  place-items: center;
  text-align: justify;
`;

const ImageBox = styled.div`
    padding: 25px;
    object-fit: 'cover',
    objectPosition: 'center',
    height: '200px',
    width: '100%',
  `;

const Text = styled.p`
  padding: 5px;
`;

const SoundHealing = ({ color }) => {
  ///amenities-sound-healing_dYzsUtxnTO.jpg
  ///shervin_VewAMRrkuLI.png
  return (
    <section className='container'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>SOUND HEALING</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <ImageContext>
            <IKImage
              //className='carousel-image'
              path='/amenities-sound-healing_dYzsUtxnTO.jpg'
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
          <TextBox style={{ maxWidth: '550px' }}>
            <Text>
              With our sound healing center, a 12x12 square meter dome designed
              specifically to enhance the healing vibration of every ripple and
              frequency from the instruments used, we are excited to offer
              vibrational sound therapy in bigger groups as well as private
              sessions.
            </Text>
            <Text>
              Our goal is to partner with Shervin Boloorian, a world-renowned
              sound healing therapist and artist, we will describe it using his
              words:
            </Text>
          </TextBox>
          <Box>
            <TextBox>
              <Text>
                "Vibrational sound therapy uses music and vibrational energy to
                support physiological, psychological and emotional well-being.
                Throughout the world, a number of different ancient cultures
                have turned to sound vibration as away to improve and balance
                health. Modern science is also acknowledging soundʼs potential
                as an alternative healing force which can complement Western
                medical practices."
                <br /> -Shervin Boloorian
              </Text>
            </TextBox>
            <ImageBox>
              <ImageContext>
                <IKImage
                  //className='carousel-image'
                  path='/shervin_VewAMRrkuLI.png'
                  transformation={[
                    { width: 'auto', height: '200px', dpr: 'auto' },
                  ]}
                  loading='lazy'
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    height: '200px',
                    width: 'auto',
                  }}
                />
              </ImageContext>
            </ImageBox>
          </Box>
        </Right>
      </Box>
      <Amenities items={{ desktop: 5, tablet: 2, mobile: 1 }} height={'100%'} />
    </section>
  );
};

SoundHealing.propTypes = {};

export default SoundHealing;
