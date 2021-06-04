import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactForm = (props) => {
  const Container = styled.div`
    min-height: 25vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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

  const Input = styled.input`
    width: 80%;
    margin: 10px auto;
    font-weight: 500;
    font-size: 1em;
    border-radius: 5px;
    background-color: transparent;
    line-height: 22px;
    transition: all 0.3s;
    padding: 10px;
    box-sizing: border-box;
    outline: 0;
    font-family: inherit;

    :focus {
      border: 2px solid #cc4949;
    }
  `;
  const TextInput = styled.textarea`
    width: 80%;
    height: 200px;
    margin: 10px auto;
    font-weight: 500;
    font-size: 1em;
    border-radius: 5px;
    background-color: transparent;
    line-height: 22px;
    transition: all 0.3s;
    padding: 10px;
    box-sizing: border-box;
    outline: 0;
    font-family: inherit;
    resize: vertical;

    :focus {
      border: 2px solid #cc4949;
    }
  `;

  const Submit = styled.input`
    width: 150px;
    margin: 0 auto;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    color: white;
    font-size: 1.25em;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.3s;
    margin-top: -4px;
    font-weight: 700;
    font-family: inherit;

    :hover {
      background: #cc4949;
    }
  `;

  return (
    <Container id='contact' className='background-gray'>
      <ContactForm>
        <h1 style={{ padding: '10px' }}>Contact</h1>
        <Input
          name='name'
          type='text'
          className='border-color'
          placeholder='Name'
        />
        <Input
          name='email'
          type='text'
          className='border-color'
          placeholder='Email'
        />
        <TextInput
          name='text'
          className='border-color'
          placeholder='Comment'
        ></TextInput>
        <Submit className='purple border-color' type='submit' value='SUBMIT' />
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
    </Container>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
