import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const About = () => {
  return (
    <div id='about' className='about-container'>
      <span className='about-text'>
        <span className='main'>
          <h1>Masakali Retreat</h1>
          {/* Masakali is the perfect romance of an extraordinary destination with
          the nourishment of the mind, body, and spirit, exemplary service, and
          premium, yet ecologically conscious, accommodations. */}
          Join us on the island of the Gods surrounded by serene landscapes and
          rich culture.
        </span>
        <span className='secondary'>
          <p>
            {/* Join us on the Island of the Gods surrounded by a serene landscape
            and rich culture. Whether you are looking for a refreshing holiday,
            a thrilling adventure or to immerse yourself spiritually, every
            aspect of Bali and Masakali invites you to take a step on your
            journey towards peace and liberation. */}
            In the traditional Balinese village of Kelusa you will find Masakali
            Retreat - the perfect romance between an extraordinary destination,
            nourishment of your whole being and premium accommodations with
            exemplary service.
          </p>
          <br />
          <p>
            {/* By offering a sanctuary for holidays, retreats, a variety of
            workshops, and the space to conduct yoga teacher trainings, we are
            aiming to empower you and enchant you. Our goal is to create a space
            where we invite you to reconnect with yourself, others, and nature. */}
            Whether you are looking for a refreshing holiday, to spend quality
            time with your partner, or family, to celebrate your anniversary,
            honeymoon or wedding/vow renewal or to immerse yourself in the
            spiritually and magic that is Bali, every aspect of Bali and
            Masakali invites you to take a step on your journey towards inner
            peace and liberation.
          </p>
          <br />
          <p>
            Our goal is to create a space where we invite you to reconnect with
            yourself, others and nature. Let the sanctuary that is Masakali
            empower and enchant you.
          </p>
        </span>
      </span>
      <ImageContext>
        <IKImage
          className='about-img'
          path='/Main/masakali-about-main_3ej0c_QHK.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662494112105'
          transformation={[{ height: '700px', width: 'auto', dpr: 'auto' }]}
          lqip={{ active: true }}
          loading='lazy'
        />
      </ImageContext>
    </div>
  );
};

export default About;
