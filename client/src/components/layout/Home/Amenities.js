import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Amenities = () => {
  return (
    <div id='amenities' className='extras-container'>
      <span className='extras-details down'>
        <span className='text'>
          <h2>Amenities</h2>
          <ul>
            <li>Fully equipped kitchenette</li>
            <li>Laundry service</li>
            <li>Private infinity pool</li>
            <li>Ensuite bathrooms</li>
            <li>Outdoor showers</li>
            <li>Safety deposit box</li>
            <li>Onsite security</li>
            <li>Toiletries</li>
            <li>Bathrobes</li>
            <li>Free WIFI</li>
            <li>Television</li>
            <li>Free parking</li>
            <li>Spa services</li>
            <li>Room service</li>
          </ul>

          <span className='extras-link'>
            See our guestbook <i className='icon-chevron-right' />
          </span>
        </span>
      </span>
      <span className='extras-img'>
        <ImageContext>
          <IKImage
            path='/Main/masakali-amenities_l3CanW3Rq.webp'
            transformation={[{ height: '400px', width: '400px', dpr: 'auto' }]}
            lqip={{ active: true }}
            loading='lazy'
          />
        </ImageContext>
      </span>
    </div>
  );
};

export default Amenities;
