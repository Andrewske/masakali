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
  flex: 1 1 350px;
  max-width: 500px;
  padding: 25px;
`;

const Center = styled.div`
  flex: 1 1 350px;
  display: grid;
  place-items: center;
`;

const Right = styled.div`
  flex: 1 1 350px;
  max-width: 500px;
  padding: 25px;
`;

const Text = styled.div`
  width: 90%;
  text-align: justify;
  padding: 50px 0px 50px;
`;

const OrganicFarm = (props) => {
  return (
    <section id='organic_farm' className='container'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>ORGANIC FARM</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <ImageContext>
            <IKImage
              path='/tomato_chH8e3KPN.jpg'
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
        <Center>
          <Text>
            <p style={{ paddingBottom: '15px' }}>
              “Organic products are the best from nature, and the best for
              nature.”
            </p>
            <p style={{ paddingBottom: '15px' }}>
              Organic farming practices not only decrease pollution in the air,
              water and soil and help conserve water, diminishes soil erosion
              and use less energy, organic farming has lower input costs, food
              keeps longer, it reduces health hazards, is more nutritious and,
              of course, the food tastes better.
            </p>
            <p>
              By offering natural and fresh food and drinks from our own organic
              garden at our Café and Juice Bar, you will be getting nutritious
              and great tasting food straight from the earth to your table.
            </p>
          </Text>
        </Center>
        <Right>
          <ImageContext>
            <IKImage
              path='/vegtable_SEHv7lswzOf.jpg'
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
        </Right>
      </Box>
      <Amenities items={{ desktop: 5, tablet: 2, mobile: 1 }} height={'100%'} />
    </section>
  );
};

OrganicFarm.propTypes = {};

export default OrganicFarm;
