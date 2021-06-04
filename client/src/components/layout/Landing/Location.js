import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Container = styled.section`
  display: grid;
  grid-template: auto 1fr 1fr;
`;

const Header = styled.div`
  display: grid;
  place-items: center;
  grid-column: 1 / 4;
`;

const Box = styled.div`
  display: grid;
  grid-column: 1 / 4;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  min-height: 100vh;
  margin-bottom: 25px;
`;

const TextBox = styled.div`
  height: 100%;
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

const Left = styled.div`
  min-width: 350px;
`;
const Right = styled.div`
  min-width: 350px;
`;

const List = styled.div`
  text-align: left;
  padding: 15px 15px 15px;
`;

const Location = (props) => {
  return (
    <Container id='accommodations'>
      <Header className='header'>
        <h1>Accommodations</h1>
      </Header>
      <Box style={{ backgroundColor: '#f5f5f5' }}>
        <Left>
          <ImageContext>
            <IKImage
              path='/location-drone-photo_YFB6yaJzxI2.jpg'
              transformation={[{ width: 'auto', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                height: '100%',
                width: '100%',
              }}
            />
          </ImageContext>
        </Left>

        <Right>
          <TextBox>
            <h2>Location</h2>
            <h3>
              <a href='https://goo.gl/maps/VaiXjJZuJp4stygE9'>
                Kelusa, Payangan, Bali
              </a>
            </h3>
            <div>
              <p>
                Nestled in rice fields, surrounded by tropical jungle and local
                farms is where you find Kelusa, a small village located 20
                minutes outside the heart of Ubud.
              </p>
              <p> A place to experience your natural state of abundance.</p>
              <p>
                By offering a sanctuary for holidays, retreats and a variety of
                workshops we are aiming to empower both individuals and the
                local community.
              </p>
              <p>
                Our goal is to create a space where we invite you to reconnect
                with yourself, others and nature
              </p>
            </div>
          </TextBox>
        </Right>
      </Box>
      <Box>
        <Left>
          <TextBox>
            <h2>Facilities</h2>
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
              path='/master-plan-klusa-cad-3d-skinny_Hfsk5FT_lLC.jpg'
              transformation={[{ width: 'auto', dpr: 'auto' }]}
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

Location.propTypes = {};

export default Location;
