import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import community from '../../../img/community/community.jpg';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Community = ({ color }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0px 50px;
    min-height: 100vh;
  `;

  const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const Left = styled.div`
    flex-grow: 1;
    flex-basis: 50%;
    min-width: 350px;
    max-height: 500px;
  `;

  const Right = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-basis: 50%;
    padding: 15px;
  `;

  const TextBox = styled.div`
    max-width: 350px;
    text-align: center;
  `;

  return (
    <Container className='background-gray'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>COMMUNITY</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <ImageContext>
            <IKImage
              path='/community_lpfIhHuAk.JPG'
              transformation={[{ width: 'auto', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                height: '500px',
                width: '100%',
              }}
            />
          </ImageContext>
        </Left>
        <Right>
          <h3>support - educate - connect</h3>
          <TextBox>
            <p>
              We Support the community by hiring local staff, using local
              suppliers, and making donations to local charities through our
              foundation.
            </p>
            <p>
              We Educate through offering oncea-week donation based yoga classes
              exclusively for Balinese people and hosting English/Bahasa
              classes.
            </p>
            <p>
              We Connect as we learn a new language together while sharing
              experiences and our different cultures
            </p>
          </TextBox>
        </Right>
      </Box>
    </Container>
  );
};

Community.propTypes = {};

export default Community;
