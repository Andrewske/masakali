import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import fruit from '../../../img/organic/fruit.jpg';
import juicebar from '../../../img/organic/juicebar.jpg';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const CafeJuiceBar = (props) => {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    text-align: center;
  `;
  const Text = styled.p`
    padding: 15px;
  `;
  return (
    <Container>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>CAFE JUICE BAR</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <TextBox>
            <Link to='/#landing-video'>Vision</Link>
            <Text>
              Delight your taste buds and olfactory senses with culinary
              masterpieces prepared using local ingredients in our Café and
              Juice Bar.
            </Text>
            <Text>
              Our menu will celebrate Bali with its local flavors but include
              some of your western favorites as well. Our Juice Bar will provide
              the perfect recipes of fresh and delicious juices and smoothies
              that will regenerate and energize you. Working with nature and
              what the seasons bring, our menus will vary throughout the year
            </Text>
          </TextBox>
        </Left>
        <Right>
          <ImageContext>
            <IKImage
              //className='carousel-image'
              path='/amenities-cafe-juice-bar_x_JQWigHC.jpg'
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
        </Right>
      </Box>
    </Container>
  );
};

CafeJuiceBar.propTypes = {};

export default CafeJuiceBar;
