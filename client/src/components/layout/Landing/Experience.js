import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Experience = (props) => {
  const Container = styled.div`
    display: grid;
    grid-template: auto 1fr;
    background-color: #f5f5f5;
    padding-bottom: 50px;
  `;
  const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
  const Left = styled.div`
    flex: 1 1 350px;
    max-width: 500px;
    padding: 25px;
  `;

  const Center = styled.div`
    flex: 1 1 350px;
    display: grid;
    place-items: center;
  `;

  const Right = styled.div`
    flex: 1 1 350px;
    max-width: 500px;
    padding: 25px;
  `;

  const Text = styled.div`
    width: 75%;
    text-align: left;
    padding: 50px 0px 50px;
  `;

  const Item = styled.li`
    padding-bottom: 10px;
  `;
  return (
    <Container id='experience'>
      <div className='header'>
        <h1>Experience</h1>
      </div>
      <Box>
        <Left>
          <ImageContext>
            <IKImage
              path='/kintamani_NMV5iIb4xC.jpg'
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
        <Center>
          <Text>
            <ul>
              <Item>
                Exemplary service from the staff to ensure our guests feel cared
                for as part of our family.
              </Item>
              <Item>
                Yoga and wellness retreats; selected weeks and weekends.
              </Item>
              <Item>
                A variety of workshops where you can dive deep into different
                subjects such as: beginners meditation, advanced postures,
                self-development, healing, crafts and traditions of the local
                community.
              </Item>
              <Item>
                Spa services to include full body massages, facials, manicures,
                pedicures and more
              </Item>
              <Item>
                Enjoying the Balinese flavors from organically produced fruit
                and vegetables by local farmers
              </Item>
              <Item>
                Available tailored excursions, tours and services to meet your
                unique wishes
              </Item>
            </ul>
          </Text>
        </Center>
        <Right>
          <ImageContext>
            <IKImage
              path='/monkey_forest_n8PAChNLgHg.jpg'
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
        </Right>
      </Box>
    </Container>
  );
};

Experience.propTypes = {};

export default Experience;
