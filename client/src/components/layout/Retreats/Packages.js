import React from 'react';
import retreats from './retreats.json';
import RetreatRoom from './RetreatRoom';

import useRetreat from '../../../hooks/useRetreat';

const Packages = () => {
  const retreat = retreats['shanti'];

  const { createBooking, bookings } = useRetreat({ name: 'shanti' });

  return (
    <div className="packages-container">
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
          <li>5 days + 4 nights</li>
          <li>All Activities (Tours + Healing)</li>
          <li>3 meals per day (option for detox meals)</li>
        </ul>
      </div>

      <div className="rooms">
        {retreat &&
          Object.entries(retreat.rooms).map(([name, room]) => (
            <RetreatRoom
              key={name}
              room={room}
              createBooking={createBooking}
            />
          ))}
      </div>
    </div>
  );
};

export default Packages;
