import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import eco_bags from '../../../img/sustainability/eco_bags.jpg';
import recycle from '../../../img/sustainability/recycle.jpg';
import solar from '../../../img/sustainability/solar.jpg';
import composting from '../../../img/sustainability/composting.jpg';

const Sustainable = (props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: stretch;
    justify-content: center;
    flex-grow: 1;
    min-height: 500px;
    min-width: 350px;
    flex-basis: 90%;
    flex-wrap: wrap;
    margin: 5px;
    color: #3a1b49;
    border: 5px solid #3a1b49;
  `;

  const Left = styled.div`
    flex-grow: 1;
    flex-basis: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `;
  const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    flex-grow: 1;
    flex-basis: 33%;
    min-width: 350px;
  `;
  const Right = styled.div`
    flex-grow: 1;
    flex-basis: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-width: 350px;
  `;

  const LeftImage = styled.div`
    width: 100%;
    min-height: 300px;
    height: auto;
    display: flex;
    flex-grow: 1;
    align-items: stretch;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `;

  const RightImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    flex-grow: 1;
    width: 100%;
    border: 1px solid #3a1b49;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.1);
  `;
  return (
    <Container>
      <Left>
        <LeftImage
          style={{
            backgroundImage: `url(${recycle})`,
          }}
        />

        <div className='feature-text'>
          <ul>
            <li>Recycling</li>
            <li>Composting</li>
            <li>Permaculture</li>
            <li>Water purification</li>
            <li>Rainwater harvesting</li>
            <li>Wastewater treatment</li>
            <li>Solar energy</li>
            <li>Eco landscaping</li>
            <li>Sustainable materials</li>
            <li>Reduction in use of plastics</li>
          </ul>
        </div>
      </Left>
      <Center>
        <div className='feature-header'>
          <h1>Sustainable Developement</h1>
        </div>
        <div className='feature-text'>
          <p>
            Ecologically sustainable development is defined as: “using,
            conserving and enhancing the community’s resources so that
            ecological processes, on which life depends, are maintained, and the
            total quality of life, now and in the future, can be increased”.
          </p>
          <p>
            Being conscious of using earth’s natural resources, we strive to
            build and maintain an environmentally friendly facility by:
          </p>
        </div>
      </Center>
      <Right>
        <RightImage
          style={{
            backgroundImage: `url(${composting})`,
            minHeight: '200px',
          }}
        />
        <RightImage
          style={{
            backgroundImage: `url(${eco_bags})`,
            minHeight: '200px',
          }}
        />
        <RightImage
          style={{
            backgroundImage: `url(${solar})`,
            minHeight: '200px',
          }}
        />
      </Right>
    </Container>
  );
};

Sustainable.propTypes = {};

export default Sustainable;
