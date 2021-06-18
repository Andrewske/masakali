import React from 'react';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0px 50px;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Left = styled.div`
  flex-grow: 1;
  flex-basis: 40%;
  min-width: 350px;
  display: flex;
  align-content: center;
  padding: 25px;
`;

const Right = styled.div`
  flex-grow: 1;
  flex-basis: 60%;
  width: min(700px, 90%);
  display: flex;
  align-content: center;
  padding: 25px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  // @media (max-width: 786px) {
  //   width: 90%;
  // }
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
              path='/vision-purple_GTMPlqNE-.jpg' //Balancing Rocks
              transformation={[{ height: '650px', width: 'auto', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                maxHeight: '650px',
                maxWidth: '100%',
                margin: '0 auto',
                //border: '25px solid #372137',
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

export default Vision;
