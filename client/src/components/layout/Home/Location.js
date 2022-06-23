import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Location = () => {
  return (
    <div className='extras-container'>
      <span className='extras-img'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31572.286512038074!2d115.25237599734498!3d-8.447158921029558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1eb428a134748a1!2sMasakali%20Retreat!5e0!3m2!1sen!2s!4v1622112978508!5m2!1sen!2s'
          style={{
            width: '100%',
            height: '100%',
            loading: 'lazy',
          }}
          title='Google Maps Masakali'
        ></iframe>
      </span>

      <span className='extras-details down'>
        <span className='text'>
          <h2>Location & Contacts</h2>
          <span className='distance'>
            <p>
              <span className='large'>12km</span>
              <span className='small'>/7.5 miles</span>
            </p>
            <h3>Distance to Ubud</h3>
          </span>
          <span className='distance'>
            <p>
              <span className='large'>43km</span>
              <span className='small'>/27 miles</span>
            </p>
            <h3>Distance to Ubud</h3>
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
            </p>
          </span>
        </span>
      </span>
    </div>
  );
};

export default Location;
