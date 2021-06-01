import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import spa from '../../../img/experience/spa.jpg';

const Spa = (props) => {
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
    flex-grow: 2;
    flex-basis: 40%;
    min-width: 200px;
    min-height: 200px;
  `;

  const Right = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-basis: 60%;
  `;
  return (
    <Container>
      <Left
        style={{
          backgroundImage: `url(${spa})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Right>
        <div className='feature-header'>
          <h1>SPA</h1>
        </div>
        <div className='feature-text'>
          <p>
            Adding an on-site fully equipped Spa facility and showroom for our
            own organic organic beauty product line along with incense and
            candles allowing you to take the scent of Bali home with you.{' '}
          </p>
          <p>
            Some treatment rooms will be indoors in our spa while others will be
            open to the rice fields for soothing sounds and a fresh breeze.
          </p>
          <p>
            You can either take some valuable alone time or share a reviving
            experience with your partner.
          </p>
        </div>
      </Right>
    </Container>
  );
};

Spa.propTypes = {};

export default Spa;
