import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import gong from '../../../img/sound_healing/gong.jpg';
import shervin from '../../../img/sound_healing/shervin.png';

const SoundHealing = ({ color }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    flex-grow: 1;
    min-height: 500px;
    min-width: 350px;
    flex-basis: 90%;
    flex-wrap: wrap;
    margin: 5px;
    color: ${color};
    border: 5px solid ${color};
    align-items: stretch;
  `;

  const Left = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-basis: 33%;
    min-width: 350px;
    min-height: 350px;
  `;

  const Right = styled.div`
    flex-grow: 1;
    flex-basis: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-width: 350px;
  `;
  const Center = styled.div`
    flex-grow: 2;
    flex-basis: 33%;
    min-width: 350px;
    align-self: center;
  `;
  return (
    <Container>
      <Left
        style={{
          backgroundImage: `url(${gong})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.3)',
        }}
      ></Left>
      <Center>
        <div className='feature-header'>
          <h1>Sound Healing</h1>
        </div>
        <div className='feature-text'>
          <p>
            With our sound healing center , a 12x12 square meter dome designed
            to enhance the healing vibration of every ripple and frequency from
            the instruments used, we are excited to off er vibrational sound
            therapy in bigger groups as well as private sessions.
          </p>
          <p>
            Partnering up with Shervin Boloorian, a world-renowned sound healing
            therapist and artist, we will describe it using his words
          </p>
        </div>
      </Center>
      <Right>
        <div className='feature-text'>
          <div
            className='split-right-img'
            style={{
              backgroundImage: `url(${shervin})`,
              backgroundSize: 'contain',
              maxHeight: '200px',
              marginBottom: '10px',
            }}
          />
          <p>
            “Vibrational sound therapy uses music and vibrational energy to
            support physiological, psychological and emotional well-being.
            Throughout the world, a number of different ancient cultures have
            turned to sound vibration as away to improve and balance health.
            Modern science is also acknowledging soundʼs potential as an
            alternative healing force which can complement Western medical
            practices.
          </p>
        </div>
      </Right>
    </Container>
  );
};

SoundHealing.propTypes = {};

export default SoundHealing;
