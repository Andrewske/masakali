import React from 'react';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px 50px;
  min-height: 100vh;
`;

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
  text-align: center;
`;

const ImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const Text = styled.p`
  padding: 5px;
`;

const OrganicProducts = (props) => {
  //https://ik.imagekit.io/4kpopox69zp/amenities-organic-beauty-products_LF76dAzQL.jpg
  //https://ik.imagekit.io/4kpopox69zp/almonds_9SN7bxPi1.jpg
  //https://ik.imagekit.io/4kpopox69zp/flowers_84yjb02D3.jpg
  return (
    <Container>
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
              path='/amenities-organic-beauty-products_LF76dAzQL.jpg'
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
            <p>
              We are working with the local farms to grow organic coconut,
              cacao, healing plants and herbs. Our own products will not only be
              used for the treatments in the Spa, they are also provided in the
              rooms and available for purchase in our new on-site shop
            </p>
          </TextBox>
          <ImageBox>
            <ImageContext>
              <IKImage
                //className='carousel-image'
                path='/almonds_9SN7bxPi1.jpg'
                transformation={[
                  { width: 'auto', height: '200px', dpr: 'auto' },
                ]}
                loading='lazy'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: '200px',
                  width: '200px',
                }}
              />
            </ImageContext>
            <ImageContext>
              <IKImage
                //className='carousel-image'
                path='/flowers_84yjb02D3.jpg'
                transformation={[
                  { width: 'auto', height: '500px', dpr: 'auto' },
                ]}
                loading='lazy'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: '200px',
                  width: '200px',
                }}
              />
            </ImageContext>
          </ImageBox>
        </Right>
      </Box>
    </Container>
  );
};

OrganicProducts.propTypes = {};

export default OrganicProducts;
