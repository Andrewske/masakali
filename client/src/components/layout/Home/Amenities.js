import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Amenities = () => {
  return (
    <div id='amenities' className='extras-container reverse'>
      <span className='extras-details'>
        <span className='text'>
          <h2>Amenities</h2>
          <span>
            Masakali Retreat offers many amenities that you simply won’t find
            with other accommodations. Our goal is to go above and beyond, not
            because we have to, but because it truly makes us happy to offer the
            best experience to our guests.
            <ul>
              <li>Private infinity pool</li>
              <li>Kitchenette</li>
              <li>Ensuite bathrooms</li>
              <li>Outdoor showers</li>
              <li>Tour packages</li>
              <li>Airport transfer</li>
              <li>Motorbike rental</li>
              <li>Laundry Services</li>
              <li>Safety deposit box</li>
              <li>Onsite security</li>
              <li>Toiletries</li>
              <li>Bathrobes</li>
              <li>Free WIFI</li>
              <li>Television(select villas)</li>
              <li>Free parking</li>
              <li>Spa services</li>
              <li>Room service</li>
            </ul>
          </span>

          <div className='extras-link'>
            <a
              href='https://drive.google.com/file/d/1EgcBzUUUESf0HoGBdN9JrRGs_ZIQexHL/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              For a full list of services please See our guestbook{' '}
              <i className='icon-chevron-right' />
            </a>
          </div>
        </span>
      </span>
      <span className='extras-img'>
        <ImageContext>
          <IKImage
            path='/Main/masakali-amenities_l3CanW3Rq.webp'
            transformation={[{ height: '600px', width: 'auto', dpr: 'auto' }]}
            lqip={{ active: true }}
            loading='lazy'
          />
        </ImageContext>
      </span>
    </div>
  );
};

export default Amenities;
