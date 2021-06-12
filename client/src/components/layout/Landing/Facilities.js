import React from 'react';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap;
  padding: 50px 0px 50px;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  margin-bottom: 25px;
`;

const TextBox = styled.div`
  height: 100%;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 15px;
`;

const Left = styled.div`
  flex: 1 1 350px;
`;
const Right = styled.div`
  flex: 1 1 350px;
`;

const List = styled.div`
  text-align: left;
  padding: 15px 15px 15px;
`;

const Facilities = (props) => {
  return (
    <Container id='facilities'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>FACILITIES</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <TextBox>
            <List>
              <h3>Phase I</h3>
              <ul>
                <li>
                  3 antique Gladak guesthouses from Java each with plunge pools
                  and luxury bathrooms
                </li>
                <li>Yoga Shala</li>
                <li>Reception/staff area/kitchen</li>
                <li>
                  Luxury 2.5 story 2 bedroom 2.5 bath villa with pool (master
                  bedroom is a 10x12 antique Joglo from Java)
                </li>
              </ul>
            </List>
            <List>
              <h3>Phase II</h3>
              <ul>
                <li>
                  5 additional antique Gladak guesthouses from Java each with
                  plunge pools and luxury bathrooms
                </li>
                <li>
                  5 antique 2 story Lumbung guesthouses popular in the rice
                  fields of Bali with luxury bathrooms
                </li>
                <li>
                  1 antique Batak Tribe guesthouse from Sumatra converted into 4
                  bedroom villa
                </li>
                <li>Sound Healing Dome</li>
                <li>Café and Juice Bar with communal pool</li>
                <li>Spa</li>
              </ul>
            </List>
          </TextBox>
        </Left>
        <Right>
          <ImageContext>
            <IKImage
              path='/Master-Plan-Klusa-Cad-3H-tiny_G1TDmR5W_.jpg' // Add a download link pdf version
              transformation={[{ dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                height: '100%',
                maxHeight: '700px',
                width: '100%',
              }}
            />
          </ImageContext>
        </Right>
      </Box>
    </Container>
  );
};

export default Facilities;
