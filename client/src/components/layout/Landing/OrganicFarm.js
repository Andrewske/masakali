import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import tomato from '../../../img/organic/tomato.jpg';
import vegtable from '../../../img/organic/vegtable.jpg';

const OrganicFarm = (props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
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

  const Side = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 25%;
    min-width: 250px;
    min-height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `;

  const Center = styled.div`
    display: flex;
    flex-grow: 2;
    flex-basis: 40%;
    flex-direction: column;
    text-align: center;
    min-width: 350px;
  `;
  return (
    <Container>
      <Side
        style={{
          backgroundImage: `url(${tomato})`,
        }}
      />
      <Center>
        <div className='feature-header'>
          <h1>Organic Farm</h1>
        </div>
        <div className='feature-subheader'>
          <h3>
            “Organic products are the best from nature, and the best for
            nature.”
          </h3>
        </div>
        <div className='feature-text'>
          <p>
            Organic farming practices not only reduce pollution in the air,
            water and soil and help conserve water, reduce soil erosion and use
            less energy, organic farming has lower input costs, food keeps
            longer, it reduces health hazards, is more nutritious and, of
            course, the food tastes better.
          </p>
          <p>
            By offering natural and fresh food and drinks from our own organic
            garden at our Café and Juice Bar, you will be getting nutritious and
            great tasting food straight from the earth to your table.
          </p>
        </div>
      </Center>
      <Side
        style={{
          backgroundImage: `url(${vegtable})`,
        }}
      />
    </Container>
  );
};

OrganicFarm.propTypes = {};

export default OrganicFarm;
