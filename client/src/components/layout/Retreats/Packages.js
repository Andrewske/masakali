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
          Each room is a comfortable and luxurious choice for relaxation and
          rejuvenation during the retreat.
        </p>

        <p>
          We recommend booking a private room (Surya or Jala) if you are
          traveling with a partner or friend whom you do not mind sharing a bed
          with. These two villas are also great for singles who prefer privacy
          and extra luxuries during their stay. Surya and Jala both have their
          own private infinity pools and kitchenettes in addition to the shared
          spaces you may use to mingle with other retreat guests.
        </p>
        <p>
          If you are traveling solo and would like to make new friends or if you
          are traveling with a friend and don’t want to share a bed, we
          recommend choosing one of our shared rooms (Priya or Isvara) which has
          twin configurations. These rooms have their own gardens and easy
          access to communal spaces with a kitchen, living room, dining, and a
          beautiful luxury pool.
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
