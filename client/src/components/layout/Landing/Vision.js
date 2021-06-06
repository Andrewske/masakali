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
  display: flexx;
`;

const Left = styled.div`
  flex-basis: 50%;
  min-width: 350px;
`;

const Right = styled.div`
  flex-basis: 50%;
  min-width: 350px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  padding-top: 25px;
  text-align: center;
  max-width: 650px;
`;

const Heading = styled.h3`
  padding: 15px;
`;
const SubHeading = styled.h4`
  padding: 15px;
`;

const Text = styled.p`
  padding: 15px;
  text-align: center;
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
              path='/vision_7S69wmFLG5N.jpg'
              transformation={[{ width: 'auto', dpr: 'auto' }]}
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
            <Heading>- Masakali -</Heading>
            <SubHeading>
              Masakali means “aspiring to fly high through peace and
              liberation”.
            </SubHeading>
            <Text>
              Masakali is the perfect romance of an extraordinary destination
              with nourishment of the mind, body and spirit, exemplary service
              and premium, yet ecologically conscious, accommodations. Join us
              on the Island of the Gods surrounded by serene landscape and rich
              culture. Whether you are looking for a refreshing holiday, a
              thrilling adventure or to immerse yourself spiritually, every
              aspect of Bali and Masakali invites you to take a step on your
              journey towards peace and liberation.
            </Text>
            <Text>
              By offering a sanctuary for holidays, retreats, a variety of
              workshops and the space to conduct yoga teacher trainings, we are
              aiming to empower both individuals and the local community. Our
              goal is to create a space where we invite you to reconnect with
              yourself, others and nature.
            </Text>
          </TextBox>
        </Right>
      </Box>
    </Container>
  );
};

Vision.propTypes = {};

export default Vision;
