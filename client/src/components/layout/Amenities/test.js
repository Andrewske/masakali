import React from 'react';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

import Amenities from '../Landing/Amenities';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const Left = styled.div`
  width: min(350px, 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin: 10px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: min(350px, 90%);
  min-height: 500px;
  margin: 10px;
`;

const TextBox = styled.div`
  flex-grow: 1;
  max-width: 450px;
  display: grid;
  place-items: center;
  text-align: justify;
  padding: 15px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
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
                width: '100%',
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
                  width: '100%',
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
