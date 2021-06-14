import React from 'react';
import styled from 'styled-components';

import Amenities from '../Landing/Amenities';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Left = styled.div`
  //flex-grow: 1;
  //flex-basis: 50%;
  min-width: 350px;
  padding: 25px;
  max-width: 550px;
`;

const Right = styled.div`
  //flex-grow: 1;
  //flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 350px;
`;

const TextBox = styled.div`
  max-width: 550px;
  display: grid;
  place-items: center;
  text-align: justify;
  padding: 25px;
`;
const Text = styled.p`
  //padding: 5px;
`;

const Spa = () => {
  return (
    <section id='spa' className='container'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>SPA</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <ImageContext>
            <IKImage
              path='/Amenities/spa/spa-head-massage_J21akigAg.jpg'
              transformation={[{ width: 'auto', height: '500px', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                height: '500px',
                width: '100%',
              }}
            />
          </ImageContext>
        </Left>
        <Right>
          <TextBox>
            <Text>
              Adding an on-site fully equipped spa as well as a showroom to
              showcase our own organic beauty product line. Along with beauty
              products, we will offer for sale incense and candles allowing you
              to take the scent of Bali home with you. Some treatment rooms will
              be indoors in our spa while others will be open to the rice fields
              for soothing sounds and a fresh breeze. You can either enjoy some
              valuable alone time for a relaxing massage or one of our other
              treatments or share a reviving experience with your partner.
            </Text>
          </TextBox>
        </Right>
      </Box>
      <Amenities items={{ desktop: 5, tablet: 2, mobile: 1 }} height={'100%'} />
    </section>
  );
};

export default Spa;
