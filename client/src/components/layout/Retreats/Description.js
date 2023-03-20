import React from 'react';
import DescriptionItem from './DescriptionItem';
import { descriptions } from './descriptionContent';

const Description = ({ scroll }) => {
  return (
    <div className="description-container">
      <div className="about">
        <h2>About the retreat</h2>
        <p>
          Welcome to a 5 day, 4 night retreat in one of the most magical resorts
          in Bali - Masakali. Relax and decompress with transformational
          activities such as breathwork classes, yoga, meditation, workshops,
          and ceremonies, while immersing yourself in Balinese cultural
          activities, and connecting with beautiful, like-minded people.
        </p>
      </div>

      {descriptions &&
        descriptions.map((d, i) => (
          <DescriptionItem
            content={d.content}
            heading={d.heading}
            documentLink={d?.documentLink}
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
