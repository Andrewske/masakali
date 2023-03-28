import React from 'react';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

import useWindowSize from '../../../utils/useWindowSize';

const Banner = ({ startDate, endDate, scroll }) => {
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
      <span className="banner-title">
        <p>Masakali Presents</p>
        <h1>Shanti Breathwork and Yoga Retreat</h1>
        {/* <p>
          {startDate} - {endDate}
        </p> */}
        <p>Coming Soon</p>
      </span>
      {/* <button
        onClick={() => scroll()}
        className="button purple"
      >
        Get Started
      </button> */}
    </div>
  );
};

export default Banner;
