import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Container = styled.div`
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0px 50px;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1 1 40%;
  min-width: 350px;
`;

const Right = styled.div`
  flex: 1 1 60%;
  min-width: 350px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  justify-content: center;
  margin: auto;
  padding: 15px;
`;

const SubHeading = styled.h2`
  font-style: italic;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  text-align: center;
  padding: 25px;
`;

const Text = styled.p`
  padding: 15px 0px 15px;
  text-align: justify;
`;

const Vision = (props) => {
  return (
    <Container id='vision'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>VISION</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <ImageContext>
            <IKImage
              //className='carousel-image'
              path='/vision_7S69wmFLG5N.jpg' //Balancing Rocks
              transformation={[{ height: '600px', width: 'auto', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                maxHeight: '600px',
                width: '100%',
              }}
            />
          </ImageContext>
        </Left>
        <Right>
          <TextBox>
            <SubHeading>
              Masakali means “aspiring to fly high
              <br /> through peace and liberation”.
            </SubHeading>
            <Text>
              Masakali is the perfect romance of an extraordinary destination
              with nourishment of the mind, body and spirit, exemplary service
              and premium, yet ecologically conscious, accommodations.
            </Text>
            <Text>
              Join us on the Island of the Gods surrounded by serene landscape
              and rich culture. Whether you are looking for a refreshing
              holiday, a thrilling adventure or to immerse yourself spiritually,
              every aspect of Bali and Masakali invites you to take a step on
              your journey towards peace and liberation.
            </Text>
            <Text>
              By offering a sanctuary for holidays, retreats, a variety of
              workshops and the space to conduct yoga teacher trainings, we are
              aiming to empower you and enchant you. Our goal is to create a
              space where we invite you to reconnect with yourself, others and
              nature.
            </Text>
          </TextBox>
        </Right>
      </Box>
    </Container>
  );
};

Vision.propTypes = {};

export default Vision;
