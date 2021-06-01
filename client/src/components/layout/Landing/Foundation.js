import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import children from '../../../img/community/children.jpg';
import coins from '../../../img/community/coins.jpg';

const Foundation = (props) => {
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
    <Container
    //
    >
      <Side
        style={{
          backgroundImage: `url(${children})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Center>
        <div className='feature-header'>
          <h1>Foundation</h1>
        </div>
        <div className='feature-text'>
          <p>
            We believe that everyone has the right to clean water, education,
            and the possibility to be nurtured and flourish.
          </p>
          <p>
            Therefore, 10% of the revenue from our Organic Beauty line will go
            to the Akasha foundation.
          </p>
          <p>
            Whether it will be donating to local charity organizations such as
            Yayasan Anak Anak Bali (Bali kids foundation), FNPF (Friends of the
            Natural Park Foundation) or initiating our own projects, the
            foundation will focus on giving back to Bali and empowering the
            local community
          </p>
          <p>
            "Giving is not just about making a donation. It’s about making a
            difference." -Kathy Calvin
          </p>
        </div>
      </Center>
      <Side
        style={{
          backgroundImage: `url(${coins})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
    </Container>
  );
};

Foundation.propTypes = {};

export default Foundation;
