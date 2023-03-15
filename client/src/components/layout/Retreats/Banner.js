import React from 'react';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

import useWindowSize from '../../../utils/useWindowSize';

const Banner = ({ startDate, endDate }) => {
  const { width, height } = useWindowSize();

  return (
    <div className="banner-container">
      <ImageContext>
        <IKImage
          className="background-image"
          path="/Main/Akasha/akasha-front_knBEIm9Huj.webp"
          transformation={[{ height: height, width: width, dpr: 'auto' }]}
          lqip={{ active: true }}
          loading={'lazy'}
        />
      </ImageContext>
      <span className="title">
        <p>Masakali Presents</p>
        <h1>Shanti Retreat</h1>
        <p>
          {startDate} - {endDate}
        </p>
      </span>
      <button className="button">Get Started</button>
    </div>
  );
};

export default Banner;
