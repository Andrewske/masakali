import React from 'react';
import styled from 'styled-components';

import Amenities from '../Landing/Amenities';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Images = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75%;
`;

const Image = styled.div`
  height: 200px;
  width: 300px;
  margin: 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
  text-align: justify;
`;

const Text = styled.p`
  padding: 5px;
`;

const Retreats = (props) => {
  return (
    <section className='container'>
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
        <Image>
          <ImageContext>
            <IKImage
              //className='carousel-image'
              path='/retreats-flowers-statue_J88f247-Y.jpg'
              transformation={[{ width: 'auto', height: '200px', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </ImageContext>
        </Image>
        <Image>
          <ImageContext>
            <IKImage
              //className='carousel-image'
              path='/amenities-retreats-and-workshops_RUXvKPcUY0.jpg'
              transformation={[{ width: 'auto', height: '200px', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </ImageContext>
        </Image>
        <Image>
          <ImageContext>
            <IKImage
              //className='carousel-image'
              path='/retreats-sound-bowl_Pv1fWtGA6.jpg'
              transformation={[{ width: 'auto', height: '200px', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </ImageContext>
        </Image>
      </Images>
      <Amenities items={{ desktop: 5, tablet: 2, mobile: 1 }} height={'100%'} />
    </section>
  );
};

Retreats.propTypes = {};

export default Retreats;
