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
      <p>
        Each room is equipped with a private infinity pool overlooking the
        Balinese ri
      </p>
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
