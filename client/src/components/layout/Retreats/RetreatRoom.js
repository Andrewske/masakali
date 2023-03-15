import React from 'react';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const images = [
  '/Main/Akasha/akasha-front_knBEIm9Huj.webp',
  '/Main/Akasha/akasha-front_knBEIm9Huj.webp',
  '/Main/Akasha/akasha-front_knBEIm9Huj.webp',
  '/Main/Akasha/akasha-front_knBEIm9Huj.webp',
  '/Main/Akasha/akasha-front_knBEIm9Huj.webp',
  '/Main/Akasha/akasha-front_knBEIm9Huj.webp',
];

const RetreatRoom = ({ room }) => {
  return (
    <div className="retreat-room">
      <div className="retreat-room-content">
        <h2>{room.title}</h2>

        <div className="retreat-room-amenities">
          <ul>
            <li>King Bed</li>
          </ul>
        </div>

        <div className="booking-info">
          <span>
            <p>Total: {room.priceIDR}</p>
            <p>Spots Available: {room.available}</p>
          </span>
          <button className="button purple">Book Now</button>
        </div>
      </div>

      <div className="retreat-room-images">
        {images.map((i) => (
          <ImageContext>
            <IKImage
              className="retreat-room-image"
              path={i}
              transformation={[{ height: 300, width: 300, dpr: 'auto' }]}
              lqip={{ active: true }}
              loading={'lazy'}
            />
          </ImageContext>
        ))}
      </div>
    </div>
  );
};

export default RetreatRoom;
