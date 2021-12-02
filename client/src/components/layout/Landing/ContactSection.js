import React from 'react';
import ContactForm from '../ContactForm';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 25vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Map = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  min-height: 350px;
`;

const ContactSection = () => {
  return (
    <Container id='contact'>
      <ContactForm />
      <Map>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31572.286512038074!2d115.25237599734498!3d-8.447158921029558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1eb428a134748a1!2sMasakali%20Retreat!5e0!3m2!1sen!2s!4v1622112978508!5m2!1sen!2s'
          style={{
            width: '100%',
            height: '100%',
            loading: 'lazy',
          }}
          title='Google Maps Masakali'
        ></iframe>
        {/* <img
          style={{ maxWidth: '500px', maxHeight: '500px', imageFit: 'contain' }}
          src={map}
        /> */}
      </Map>
    </Container>
  );
};

export default ContactSection;
