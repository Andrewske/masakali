import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import community from '../../../img/community/community.jpg';

const Community = ({ color }) => {
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
    color: ${color};
    border: 5px solid ${color};
  `;

  const Left = styled.div`
    display: flex;
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
          backgroundImage: `url(${community})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Right>
        <div className='feature-header'>
          <h2>Community</h2>
        </div>
        <h3>support - educate - connect</h3>
        <div className='feature-text'>
          <p>
            We Support the community by hiring local staff, using local
            suppliers, and making donations to local charities through our
            foundation.
          </p>
          <p>
            We Educate through offering oncea-week donation based yoga classes
            exclusively for Balinese people and hosting English/Bahasa classes.{' '}
          </p>
          <p>
            We Connect as we learn a new language together while sharing
            experiences and our different cultures
          </p>
        </div>
      </Right>
    </Container>
  );
};

Community.propTypes = {};

export default Community;
