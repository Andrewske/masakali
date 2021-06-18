import React from 'react';
import styled from 'styled-components';

import Amenities from '../Landing/Amenities';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Images = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const Image = styled.div`
  max-height: 300px;
  max-width: 300px;
  margin: 10px;
  overflow: hidden;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
  margin: 0 auto;
  text-align: justify;
  width: min(350px, 90%);
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
        <Text>Adventure into your Mind by meditation</Text>
        <Text>Revive your Body with yoga</Text>
        <Text>Nourish your Spirit through healing sounds</Text>
      </TextBox>
      <Images>
        <Image>
          <ImageContext>
            <IKImage
              //className='carousel-image'
              path='/Amenities/retreats-and-workshops/flower-statue_AIqrhVUzd.jpg'
              transformation={[
                { height: '300px', width: '300px', dpr: 'auto' },
              ]}
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
              path='/Amenities/retreats-and-workshops/yoga_WXAePzCE7H.jpg'
              transformation={[
                { width: '300px', height: '300px', dpr: 'auto' },
              ]}
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
              path='/Amenities/retreats-and-workshops/sound-bowl_OdjExtuv1.jpg'
              transformation={[
                { width: '300px', height: '300px', dpr: 'auto' },
              ]}
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
