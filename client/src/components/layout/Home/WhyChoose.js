import React from 'react';
import { ReactComponent as Binoculars } from '../../../img/awesome-binoculars.svg';
import { ReactComponent as Pool } from '../../../img/material-pool.svg';
import { ReactComponent as Spa } from '../../../img/awesome-spa.svg';

const WhyChoose = () => {
  return (
    <div className='why-container'>
      <h2>Why Choose Masakali Retreat</h2>
      <span className='why-features'>
        <span className='why-feature'>
          <Binoculars className='why-feature-icon' />
          <h3>Beautiful Views</h3>
          <p>
            Overlook the famous Balinese rice fields with a glorious mountanious
            view lipsum orem lipsum orem lipsum orem
          </p>
        </span>
        <span className='why-feature'>
          <Pool className='why-feature-icon' />
          <h3>Private Infinity Pool</h3>
          <p>
            Overlook the famous Balinese rice fields with a glorious mountanious
            view lipsum orem lipsum orem lipsum orem
          </p>
        </span>
        <span className='why-feature'>
          <Spa className='why-feature-icon' />
          <h3>Spa Services</h3>
          <p>
            Overlook the famous Balinese rice fields with a glorious mountanious
            view lipsum orem lipsum orem lipsum orem
          </p>
        </span>
      </span>
    </div>
  );
};

export default WhyChoose;
