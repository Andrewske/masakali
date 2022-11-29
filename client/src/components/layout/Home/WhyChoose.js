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
            Located just outside the small village of Kelusa, Masakali offers
            extraordinary views of cascading Balinese rice fields, majestic
            mountains, and a spectacular view of the dense and tropical jungle.
            If you’re lucky, you may even see monkeys swinging in the trees and
            are sure to see the colorful butterflies and birds that inhabit this
            magical place not to mention the fireflies that will encircle you at
            night. These are just a few examples of the magic at Masakali.
          </p>
        </span>
        <span className='why-feature'>
          <Pool className='why-feature-icon' />
          <h3>Private Infinity Pools</h3>
          <p>
            Each villa has its own private infinity pool overlooking the rice
            fields. The luxurious pools are surrounded by beautiful gardens to
            ensure your privacy while enjoying a relaxing dip where you can also
            enjoy an amazing floating breakfast.
          </p>
        </span>
        <span className='why-feature'>
          <Spa className='why-feature-icon' />
          <h3>Spa Services</h3>
          <p>
            We offer a number of spa services to our guests. Rejuvenate your
            body and mind with a Balinese massage, have a refreshing facial,
            manicure or pedicure - all in the privacy of your own villa.
          </p>
        </span>
      </span>
    </div>
  );
};

export default WhyChoose;
