import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import almonds from '../../../img/organic/almonds.jpg';
import coconut from '../../../img/organic/coconut.jpg';
import flowers from '../../../img/organic/flowers.jpg';

const OrganicProducts = (props) => {
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
          <h1>Organic Beauty Products</h1>
        </div>
        <div className='feature-text'>
          <p>
            We are working with the local farms to grow organic coconut, cacao,
            healing plants and herbs. Our own products will not only be used for
            the treatments in the Spa, they are also provided in the rooms and
            available for purchase in our new on-site shop
          </p>
        </div>
      </Left>
      <Right>
        <Image style={{ backgroundImage: `url(${almonds})` }} />
        <Image style={{ backgroundImage: `url(${coconut})` }} />
        <Image style={{ backgroundImage: `url(${flowers})` }} />
      </Right>
    </Container>
  );
};

OrganicProducts.propTypes = {};

export default OrganicProducts;
