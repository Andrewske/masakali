import React from 'react';
import { useSelector } from 'react-redux';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

import useConversionRate from '../../../hooks/useConversionRate';
import useCurrencyFormat from '../../../hooks/useCurrencyFormat';

const RetreatRoom = ({ room, createBooking }) => {
  const { value: conversionRate } = useConversionRate('IDR');

  const currency = useSelector((state) => state.country.currency);

  const pricePerRoom = useCurrencyFormat(room.pricePerRoomIDR / conversionRate);
  const pricePerPerson = useCurrencyFormat(
    room.pricePerPersonIDR / conversionRate
  );

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
        <h2>{room.name}</h2>
        {room.amenities && (
          <ul className="retreat-room-amenities">
            {room.amenities.map((x, i) => (
              <li key={room.name + '-amenity-' + i}>{x}</li>
            ))}
          </ul>
        )}

        <div className="retreat-room-price">
          <h4>Price Per Room</h4>
          {pricePerRoom && <p>{pricePerRoom + ' ' + currency}</p>}
        </div>
        <div className="retreat-room-price">
          <h4>Price Per Person</h4>
          {pricePerPerson && <p>{pricePerPerson + ' ' + currency}</p>}
        </div>

        <div className="booking-buttons">
          {room.available > 1 && (
            <button
              className="button purple"
              onClick={handleSubmit}
            >
              Book for One
            </button>
          )}
          <button
            className="button purple"
            onClick={handleSubmit}
          >
            Book Entire Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default RetreatRoom;
