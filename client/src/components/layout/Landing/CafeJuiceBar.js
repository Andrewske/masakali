import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import fruit from '../../../img/organic/fruit.jpg';
import juicebar from '../../../img/organic/juicebar.jpg';

const CafeJuiceBar = (props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    flex-grow: 1;
    min-height: 500px;
    min-width: 350px;
    flex-basis: 45%;
    flex-wrap: wrap;
    margin: 5px;
    color: #3a1b49;
    border: 5px solid #3a1b49;
  `;

  const Left = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-basis: 60%;
    min-width: 350px;
  `;

  const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: 2;
    flex-basis: 40%;
  `;

  const Image = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    flex-grow: 1;
    min-height: 150px;
  `;
  return (
    <Container>
      <Left>
        <div className='feature-header'>
          <h1>Cafe & Juice Bar</h1>
        </div>
        <div className='feature-text'>
          <p>
            Delight your taste buds and olfactory senses with culinary
            masterpieces prepared using local ingredients in our Café and Juice
            Bar.
          </p>
          <p>
            Our menu will celebrate Bali with its local flavors but include some
            of your western favorites as well. Our Juice Bar will provide the
            perfect recipes of fresh and delicious juices and smoothies that
            will regenerate and energize you. Working with nature and what the
            seasons bring, our menus will vary throughout the year
          </p>
        </div>
      </Left>
      <Right>
        <Image
          style={{
            backgroundImage: `url(${fruit})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Image
          style={{
            backgroundImage: `url(${juicebar})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Right>
    </Container>
  );
};

CafeJuiceBar.propTypes = {};

export default CafeJuiceBar;
