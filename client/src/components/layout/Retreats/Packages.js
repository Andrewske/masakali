import React from 'react';
import retreats from './retreats.json';
import RetreatRoom from './RetreatRoom';
import useRetreatAvailability from '../../../hooks/useRetreatAvailability';

const Packages = ({ packageRef, createBooking, retreatData }) => {
  const retreat = retreats['shanti'];

  const { data } = useRetreatAvailability('shanti');

  const reservations = data?.data ?? null;

  return (
    <div
      className="packages-container"
      id="packages"
      ref={packageRef}
    >
      <h2>PACKAGES</h2>
      <div className="packages-description">
        <p>
          Each room is equipped with a private infinity pool overlooking the
          Balinese rice fields, a private kitchenette fully stocked with cooking
          ware and utensils, a luxury outdoor shower, with spa and meal services
          available upon request.
        </p>
        <h4>Included with all rooms</h4>
        <ul>
          <li>5 days + 4 nights accommodation</li>
          <li>All Activities (Tours + Healings + Cultural Activites)</li>
          <li>3 meals per day</li>
          <li>2 spa services</li>
        </ul>
      </div>

      <div className="rooms">
        {retreat &&
          reservations &&
          Object.entries(retreat.rooms).map(([name, room]) => {
            let isReserved =
              reservations?.filter((res) => res.villaName === name).length >=
              retreat.rooms[name].available;

            return (
              !isReserved && (
                <RetreatRoom
                  key={name}
                  room={room}
                  createBooking={createBooking}
                />
              )
            );
          })}
      </div>
    </div>
  );
};

export default Packages;
