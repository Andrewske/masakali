import React from 'react';
import DescriptionItem from './DescriptionItem';
import { descriptions } from './descriptionContent';

const Description = ({ scroll }) => {
  return (
    <div className="description-container">
      <div className="about">
        <h2>About the retreat</h2>
        <p>
          Welcome to a 5 day relax and de-compress Retreat in one of the most
          magical resorts in Bali - Masakali. A Transformational container with
          Breathwork, Yoga, Meditation, Workshops, and ceremonies immersed in
          Bali with cultural activities.
        </p>
      </div>

      {descriptions &&
        descriptions.map((d, i) => (
          <DescriptionItem
            content={d.content}
            heading={d.heading}
            imgUrl={d.imgUrl}
            imgLeft={(i + 1) % 2 !== 0}
          />
        ))}

      <button
        className="button purple"
        onClick={scroll}
      >
        Get Started
      </button>
    </div>
  );
};

export default Description;
