import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactForm = (props) => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #ccc;
  `;

  const ContactForm = styled.div`
    flex-grow: 1;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-bottom: 25px;
    min-width: 350px;
  `;

  const Map = styled.div`
    flex-grow: 1;
    flex-basis: 50%;
    min-height: 350px;
  `;

  return (
    <section id='contact' className='contact'>
      <ContactForm>
        <h1 style={{ padding: '10px' }}>Contact</h1>
        <input
          name='name'
          type='text'
          class='contact-input'
          placeholder='Name'
        />
        <input
          name='email'
          type='text'
          class='contact-input'
          placeholder='Email'
        />
        <textarea
          name='text'
          class='contact-input'
          placeholder='Comment'
          style={{ height: '200px' }}
        ></textarea>
        <input className='contact-submit' type='submit' value='SUBMIT' />
      </ContactForm>
      <Map>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31572.286512038074!2d115.25237599734498!3d-8.447158921029558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1eb428a134748a1!2sMasakali%20Retreat!5e0!3m2!1sen!2s!4v1622112978508!5m2!1sen!2s'
          style={{
            width: '100%',
            height: '100%',
            loading: 'lazy',
          }}
        ></iframe>
      </Map>
    </section>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
