import React from 'react';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

import Amenities from '../Landing/Amenities';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Left = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Right = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;
`;

const TextBox = styled.div`
  max-width: 550px;
  display: grid;
  place-items: center;
  text-align: justify;
`;
const Text = styled.p`
  padding: 15px 0px 15px;
`;

const Foundation = (props) => {
  return (
    <section className='container'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>FOUNDATION</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <ImageContext>
            <IKImage
              //className='carousel-image'
              path='/coins_fNyyPlzYW5T.jpg'
              transformation={[{ width: 'auto', height: '500px', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                height: '300px',
                maxWidth: '600px',
                padding: '5px',
              }}
            />
          </ImageContext>
          <ImageContext>
            <IKImage
              path='/Amenities/foundation/kids-in-water_nYQ2fvKXz.jpg'
              transformation={[{ width: 'auto', height: '500px', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                height: '300px',
                maxWidth: '600px',
                padding: '5px',
              }}
            />
          </ImageContext>
        </Left>
        <Right>
          <TextBox>
            <Text>
              We believe that everyone has the right to clean water, education,
              and the possibility to be nurtured and flourish. Therefore, 10% of
              the revenue from our organic beauty line once developed will go to
              the Akasha Foundation. Whether it will be donating to local
              charity organizations such as Yayasan Anak Anak Bali (Bali kids
              foundation), FNPF (Friends of the Natural Park Foundation) or
              initiating our own projects, the foundation will focus on giving
              back to Bali and empowering the local community.
            </Text>
            <Text>
              "Giving is not just about making a donation. It’s about making a
              difference." -Kathy Calvin
            </Text>
          </TextBox>
        </Right>
      </Box>
      <Amenities items={{ desktop: 5, tablet: 2, mobile: 1 }} height={'100%'} />
    </section>
  );
};

Foundation.propTypes = {};

export default Foundation;
