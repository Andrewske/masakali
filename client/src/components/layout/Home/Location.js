import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Location = () => {
  return (
    <div className='extras-container'>
      <span className='extras-img'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15786.190373739935!2d115.2544616!3d-8.4460073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1eb428a134748a1!2sMasakali%20Retreat!5e0!3m2!1sen!2sus!4v1661891834000!5m2!1sen!2sus'
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowfullscreen=''
          loading='lazy'
          title='Google Maps Masakali Retreat'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </span>

      <span className='extras-details'>
        <span className='text'>
          <h2>Location & Contacts</h2>
          <span className='distance'>
            <p>
              <span className='large'>9km</span>
              <span className='small'>/5.6 miles</span>
            </p>
            <h3>Distance to Ubud</h3>
          </span>
          <span className='distance'>
            <p>
              <span className='large'>43km</span>
              <span className='small'>/27 miles</span>
            </p>
            <h3>Distance to Airport</h3>
          </span>
        </span>
        <span className='contact'>
          <span className='item'>
            <p className='item-title'>Hotel Address</p>
            <p className='item-details'>
              Masakali Retreat
              <br />
              Br. Ayah Kelusa Payangan
              <br />
              Gianyar Bali 80572
            </p>
          </span>
          <span className='item'>
            <p className='item-title'>Hotel Contact</p>
            <p className='item-details'>
              info@masakaliretreat.com
              <br />
              facebook.com/masakaliretreat
              <br />
              instagram.com/masakaliretreat
              <br />
              +62 821-4635-5565
            </p>
          </span>
        </span>
      </span>
    </div>
  );
};

export default Location;
