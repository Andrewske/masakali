import React from 'react';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

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
  display: grid;
  place-items: center;
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
  width: 90%;
`;

const Text = styled.div`
  text-align: justify;
  padding: 15px 0px 15px;
`;

const Community = ({ color }) => {
  return (
    <Container id='community'>
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
              transformation={[{ height: '500px', width: 'auto', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
              }}
            />
          </ImageContext>
        </Left>
        <Right>
          <TextBox>
            <Text>
              It is our goal here at Masakali to support the Balinese community
              as well as to connect with their rich and unique culture. We
              support the community by hiring local staff and contractors, using
              local vendors and suppliers and making donations to local
              charities through our foundation. Each guesthouse is furnished
              with teakwood furniture handmade by the Balinese people as are the
              statues, artwork, ceramics, bedding and other furnishings. Yes it
              is luxurious here and yes it is local. We connect with the
              community by participating in ceremonies, offering donation-based
              yoga classes exclusively for Balinese people and by hosting
              English/Bahasa classes. Additionally, we want to work together
              with the Balinese, and particularly with the youth, to ensure
              Kelusa will soon be rated one of the most environmentally friendly
              and clean villages in Bali.
            </Text>
          </TextBox>
        </Right>
      </Box>
    </Container>
  );
};

Community.propTypes = {};

export default Community;
