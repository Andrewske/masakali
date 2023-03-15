import React from 'react';
import { connect } from 'react-redux';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const RetreatRoom = ({ room, createBooking }) => {
  const handleSubmit = () => {
    createBooking(room.name);
  };

  return (
    <div className="retreat-room">
      <div className="retreat-room-images">
        <ImageContext>
          <IKImage
            className="retreat-room-image"
            path={room.imgUrl}
            transformation={[{ height: 300, width: 300, dpr: 'auto' }]}
            lqip={{ active: true }}
            loading={'lazy'}
          />
        </ImageContext>
      </div>
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
          <button
            className="button purple"
            onClick={handleSubmit}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RetreatRoom;
