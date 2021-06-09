import React from 'react';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Container = styled.div`
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
  flex: 1 1 30%;
  min-width: 350px;
  max-width: 500px;
  padding: 25px;
`;

const Center = styled.div`
  flex: 1 1 40%;
  display: grid;
  min-width: 350px;
  place-items: center;
`;

const Right = styled.div`
  flex: 1 1 30%;
  max-width: 500px;
  min-width: 350px;
  padding: 25px;
`;

const Text = styled.div`
  width: 80%;
  //padding: 50px 0px 50px;
`;

const List = styled.ul`
  text-align: left;
`;

const Item = styled.li`
  padding-bottom: 10px;
`;

const Experience = (props) => {
  return (
    <Container id='experience' className='background-gray'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>EXPERIENCE</h1>
        <div className='divider' />
      </div>
      <Box>
        <Left>
          <ImageContext>
            <IKImage
              path='/kintamani_NMV5iIb4xC.jpg'
              transformation={[{ width: '500px', dpr: 'auto' }]}
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
        <Center>
          <Text>
            <List>
              <Item>Breathtaking views</Item>
              <Item>Private plunge pools </Item>
              <Item>
                Exemplary service from the staff to ensure our guests feel cared
                for as part of our family
              </Item>
              <Item>Yoga classes in our uniquely designed yoga pavilion</Item>
              <Item>Wellness retreats; select weeks and weekends</Item>
              <Item>
                A variety of workshops where you can dive deep into different
                subjects such as: meditation, breathwork, intensives,
                self-development and healing
              </Item>
              <Item>
                Spa services to include full body massages, facials, manicures,
                pedicures and more
              </Item>
              <Item>
                Café and Juice Bar using our own organically produced fruits and
                vegetables
              </Item>
              <Item>
                Sound healing in our uniquely designed sound healing dome
              </Item>
              <Item>
                Available tailored excursions, tours and services to meet your
                unique wishes
              </Item>
            </List>
          </Text>
        </Center>
        <Right>
          <ImageContext>
            <IKImage
              path='/monkey_forest_n8PAChNLgHg.jpg'
              transformation={[{ width: '500px', dpr: 'auto' }]}
              loading='lazy'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                height: '100%',
                width: '100%',
              }}
            />
          </ImageContext>
        </Right>
      </Box>
    </Container>
  );
};

Experience.propTypes = {};

export default Experience;
