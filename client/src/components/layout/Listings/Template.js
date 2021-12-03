import React, { useState } from 'react';

import Gallery from './Gallery';
import FullScreenGallery from './FullScreenGallery';
import BookingCardLg from './BookingCardLg';
import BookingCardSm from './BookingCardSm';
import useBreakpoint from '../../../utils/useBreakpoint';

const Template = ({ listing }) => {
  let { title, description, price, images, imageSelection } = listing;
  const [fullScreenGalleryOpen, setFullScreenGalleryOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const point = useBreakpoint();

  const imagePaths = images.filter((i) =>
    imageSelection.map((a) => a.key === i)
  );

  return (
    <div
      className={`container listing-page ${
        fullScreenGalleryOpen ? 'hidden' : ''
      }`}
    >
      <FullScreenGallery
        images={images}
        fullScreenGalleryOpen={fullScreenGalleryOpen}
        setFullScreenGalleryOpen={setFullScreenGalleryOpen}
      />
      <span className='listing-header'>
        <div className='images'>
          <Gallery
            images={imagePaths}
            setFullScreenGalleryOpen={setFullScreenGalleryOpen}
          />
        </div>
      </span>
      <span className='listing-body'>
        <span className='listing-details'>
          <h1>{title}</h1>
          <p>Tegallalang, Bali, Indonesia</p>
          <div className='line'></div>
          <p>{description}</p>
        </span>
        {point === 'md' || point === 'lg' ? (
          <BookingCardLg
            price={price}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        ) : (
          <BookingCardSm
            price={price}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        )}
      </span>
    </div>
  );
};

export default Template;
