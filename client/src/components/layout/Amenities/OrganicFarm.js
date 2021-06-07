import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const OrganicFarm = (props) => {
  const Container = styled.div`
    display: grid;
    grid-template: auto 1fr;
    min-height: 100vh;
    padding: 50px 0px 50px;
  `;
  const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    width: 75%;
    text-align: left;
    padding: 50px 0px 50px;
  `;

  const Item = styled.li`
    padding-bottom: 10px;
  `;
  return (
    <Container id='organic_farm' className='background-gray'>
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
            <h3>
              “Organic products are the best from nature, and the best for
              nature.”
            </h3>
            <p>
              Organic farming practices not only reduce pollution in the air,
              water and soil and help conserve water, reduce soil erosion and
              use less energy, organic farming has lower input costs, food keeps
              longer, it reduces health hazards, is more nutritious and, of
              course, the food tastes better.
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
    </Container>
  );
};

OrganicFarm.propTypes = {};

export default OrganicFarm;
