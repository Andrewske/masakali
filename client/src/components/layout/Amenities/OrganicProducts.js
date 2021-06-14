import React from 'react';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

import Amenities from '../Landing/Amenities';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Left = styled.div`
  min-width: 350px;
  display: flex;
  justify-content: center;
  margin: 25px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 350px;
  min-height: 500px;
  margin: 25px;
`;

const TextBox = styled.div`
  flex-grow: 1;
  max-width: 450px;
  display: grid;
  place-items: center;
  text-align: justify;
  padding-bottom: 50px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const OrganicProducts = (props) => {
  return (
    <section className='container'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>ORGANIC BEAUTY PRODUCTS</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <ImageContext>
            <IKImage
              //className='carousel-image'
              path='/Amenities/organic-beauty-products/Masakali-Vision-PowerPoint5_8SFdMIjUS.jpg'
              transformation={[{ width: 'auto', height: '500px', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                height: '500px',
                width: 'auto',
              }}
            />
          </ImageContext>
        </Left>
        <Right>
          <TextBox>
            <p>
              We are working with the local farms to grow organic coconut,
              cacao, healing plants and herbs. Our own products will not only be
              used for the treatments in the Spa, they are also provided in the
              rooms and available for purchase in our new on-site shop.
            </p>
          </TextBox>
          <ImageBox>
            <ImageContext>
              <IKImage
                //className='carousel-image'
                path='/Amenities/organic-beauty-products/mockuporganicbeautyline_xRfpZKAwD.jpg'
                transformation={[
                  { width: 'auto', height: '300px', dpr: 'auto' },
                ]}
                loading='lazy'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: 'auto',
                  width: 'auto',
                }}
              />
            </ImageContext>
          </ImageBox>
        </Right>
      </Box>
      <Amenities items={{ desktop: 5, tablet: 2, mobile: 1 }} height={'100%'} />
    </section>
  );
};

OrganicProducts.propTypes = {};

export default OrganicProducts;
