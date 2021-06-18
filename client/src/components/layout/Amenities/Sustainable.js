import React from 'react';
import styled from 'styled-components';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

import Amenities from '../Landing/Amenities';

// import eco_bags from '../../../img/sustainability/eco_bags.jpg';
// import recycle from '../../../img/sustainability/recycle.jpg';
// import solar from '../../../img/sustainability/solar.jpg';
// import composting from '../../../img/sustainability/composting.jpg';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Left = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const Right = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min(350px, 100%);
`;

const DoubleImage = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  max-width: 550px;
  display: grid;
  place-items: center;
  text-align: justify;
  width: min(700px, 90%);
`;
const Text = styled.p`
  padding: 15px 0px 15px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 15px;
  text-align: start;
  list-style-position: inside;
`;

const ListItem = styled.li`
  flex-basis: 50%;
  flex-grow: 1;
  min-width: 200px;
`;

const Sustainable = (props) => {
  return (
    <section className='container'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>RESOURCE CONSERVATION & SUSTAINABLE DEVELOPMENT</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <TextBox>
            <Text>
              Ecologically sustainable development is defined as: “using,
              conserving and enhancing the community’s resources so that
              ecological processes, on which life depends, are maintained, and
              the total quality of life, now and in the future, can be
              increased”.
            </Text>
            <Text>
              Being conscious of using earth’s natural resources, we strive to
              build and maintain an environmentally friendly facility by:
            </Text>
            <List>
              <ListItem>Recycling</ListItem>
              <ListItem>Composting</ListItem>
              <ListItem>Permaculture</ListItem>
              <ListItem>Water purification</ListItem>
              <ListItem>Rainwater harvesting</ListItem>
              <ListItem>Wastewater treatment</ListItem>
              <ListItem>Solar energy</ListItem>
              <ListItem>Eco landscaping</ListItem>
              <ListItem>Sustainable materials</ListItem>
              <ListItem>Reduction in use of plastics</ListItem>
            </List>
          </TextBox>
        </Left>
        <Right>
          <ImageContext>
            <IKImage
              //className='carousel-image'
              path='/Amenities/sustainable-development/gogreen_mII8MZ6q1.jpg'
              transformation={[{ width: '400px', height: 'auto', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                height: '200px',
                maxWidth: '400px',
                padding: '5px',
              }}
            />
          </ImageContext>
          <DoubleImage>
            <ImageContext>
              <IKImage
                //className='carousel-image'
                path='/Amenities/sustainable-development/solar_U5xbovxihS.jpg'
                transformation={[
                  { width: 'auto', height: '200px', dpr: 'auto' },
                ]}
                loading='lazy'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: '200px',
                  maxWidth: '200px',
                  padding: '5px',
                }}
              />
            </ImageContext>
            <ImageContext>
              <IKImage
                //className='carousel-image'
                path='/Amenities/sustainable-development/heart-dirt-in-hands_Li4DSMK5r.jpg'
                transformation={[
                  { width: 'auto', height: '200px', dpr: 'auto' },
                ]}
                loading='lazy'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: '200px',
                  maxWidth: '200px',
                  padding: '5px',
                }}
              />
            </ImageContext>
          </DoubleImage>
        </Right>
      </Box>
      <Amenities items={{ desktop: 5, tablet: 2, mobile: 1 }} height={'100%'} />
    </section>
  );
};

Sustainable.propTypes = {};

export default Sustainable;
