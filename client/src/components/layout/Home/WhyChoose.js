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
            mountains, and a spectacular view of the dense and wild jungle
            landscape. If you’re lucky may even see monkeys swinging in the
            distant trees!
          </p>
        </span>
        <span className='why-feature'>
          <Pool className='why-feature-icon' />
          <h3>Private Infinity Pools</h3>
          <p>
            Each villa has its own private infinity pool overlooking the rice
            fields, surrounded by beautiful gardens and vegetation for privacy.
            The pools are built with luxury and relaxation in mind so that our
            guests can enjoy a quiet dip in nature.
          </p>
        </span>
        <span className='why-feature'>
          <Spa className='why-feature-icon' />
          <h3>Spa Services</h3>
          <p>
            We offer a number of spa services to our guests including massages,
            facials, manicures, and pedicures. The best part… you don’t have to
            leave your villa as our staff will cater to your needs in the
            privacy of your villa.
          </p>
        </span>
      </span>
    </div>
  );
};

export default WhyChoose;
