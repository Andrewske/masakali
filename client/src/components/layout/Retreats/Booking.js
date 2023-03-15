import React from 'react';

import Header from '../Header';

import retreats from './retreats.json';
import RetreatRoom from './RetreatRoom';

const Booking = () => {
  const { name } = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const retreat = retreats[name ?? 'shanti'];

  return (
    <div className="container full">
      <Header hide={false} />

      <section className="retreats-booking-container">
        {retreat &&
          Object.entries(retreat.rooms).map(([name, room]) => (
            <RetreatRoom
              key={name}
              room={room}
            />
          ))}
      </section>
    </div>
  );
};

export default Booking;
