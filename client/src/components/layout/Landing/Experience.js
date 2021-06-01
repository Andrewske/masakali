import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import balian from '../../../img/experience/balian.jpg';
import canggu from '../../../img/experience/canggu.jpg';
import eye_pillow from '../../../img/experience/eye_pillow.jpg';
import kintamani from '../../../img/experience/kintamani.jpg';
import magic_bowls from '../../../img/experience/magic_bowls.jpg';
import monkey_forest from '../../../img/experience/monkey_forest.jpg';

const Experience = (props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: stretch;
    justify-content: center;
    flex-grow: 1;
    min-height: 500px;
    min-width: 350px;
    flex-basis: 90%;
    flex-wrap: wrap;
    margin: 5px;
    color: #3a1b49;
    border: 5px solid #3a1b49;
  `;
  const Image = styled.div`
    flex-grow: 1;
    flex-basis: 33%;
    min-height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `;

  const Center = styled.div`
    flex-grow: 1;
    flex-basis: 33%;
    min-width: 350px;
  `;
  return (
    <Container>
      <Image
        style={{
          backgroundImage: `url(${kintamani})`,
        }}
      />
      <Center>
        <div className='feature-header'>
          <h2>Experience</h2>
        </div>
        <div className='feature-text'>
          <ul>
            <li>
              Exemplary service from the staff to ensure our guests feel cared
              for as part of our family.
            </li>
            <li>Yoga and wellness retreats; selected weeks and weekends.</li>
            <li>
              A variety of workshops where you can dive deep into different
              subjects such as: beginners meditation, advanced postures,
              self-development, healing, crafts and traditions of the local
              community.
            </li>
            <li>
              Spa services to include full body massages, facials, manicures,
              pedicures and more
            </li>
            <li>
              Enjoying the Balinese flavors from organically produced fruit and
              vegetables by local farmers
            </li>
            <li>
              Available tailored excursions, tours and services to meet your
              unique wishes
            </li>
          </ul>
        </div>
      </Center>
      <Image
        style={{
          backgroundImage: `url(${monkey_forest})`,
        }}
      />
    </Container>
  );
};

Experience.propTypes = {};

export default Experience;
