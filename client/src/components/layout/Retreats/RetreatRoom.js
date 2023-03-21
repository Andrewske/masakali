import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

import useConversionRate from '../../../hooks/useConversionRate';
import useCurrencyFormat from '../../../hooks/useCurrencyFormat';

const RetreatRoom = ({ room, createBooking }) => {
  const { value: conversionRate } = useConversionRate('IDR');
  const navigate = useNavigate();

  const currency = useSelector((state) => state.country.currency);

  const priceForOne = useCurrencyFormat(room.priceForOne);
  const priceForTwo = useCurrencyFormat(room.priceForTwo);

  const handleSubmit = ({ numberOfGuests }) => {
    createBooking({
      villaName: room.name,
      numberOfGuests,
      priceUSD: numberOfGuests === 2 ? room.priceForTwo : room.priceForOne,
    });
    navigate('/cart');
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

        {room.priceForOne && (
          <div className="retreat-room-price">
            <h4>Price for One</h4>
            <p>{priceForOne + ' ' + currency}</p>
            <button
              className="button purple"
              onClick={() => handleSubmit({ numberOfGuests: 1 })}
            >
              Book For One
            </button>
          </div>
        )}
        {room.priceForTwo && (
          <div className="retreat-room-price">
            <h4>Price for Two</h4>
            <p>{priceForTwo + ' ' + currency}</p>

            <button
              className="button purple"
              onClick={() => handleSubmit({ numberOfGuests: 2 })}
            >
              Book for two
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RetreatRoom;
