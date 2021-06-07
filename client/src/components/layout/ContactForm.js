import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = (props) => {
  const Container = styled.div`
    min-height: 25vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  const ContactForm = styled.form`
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

  const Errors = styled.div`
    color: red;
  `;

  const validation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.name) {
      errors.name = 'Name is Required';
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      const { name, email, message } = values;
      const templateParams = {
        name,
        email,
        message,
      };
      emailjs
        .send(
          'service_2lf9b77',
          'template_dvw0rhp',
          templateParams,
          'user_TvSKZZDdDmn7DlbKcqRCB'
        )
        .then(
          (response) => {
            alert('Thank you for contacting us. You will hear from us soon.');
            console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
            console.log('FAILED...', err);
          }
        );
      //alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 400);
  };

  return (
    <Container id='contact'>
      {/* <ContactForm onSubmit={onSubmit}>
        <h1 style={{ padding: '10px' }}>Contact</h1>
        {errors && (
          <Errors>
            {errors.map((error) => (
              <p>{error}</p>
            ))}
          </Errors>
        )}
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
          name='message'
          className='border-color'
          placeholder='Comment'
        ></TextInput>
        <Submit className='purple border-color' type='submit' value='SUBMIT' />
      </ContactForm> */}
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validate={validation}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='contact-form'>
            <h1>Contact Us</h1>
            <Field
              className='contact-input'
              type='input'
              name='name'
              placeholder='Name'
            />
            <ErrorMessage
              className='contact-error'
              name='name'
              component='div'
            />
            <Field
              className='contact-input'
              type='email'
              name='email'
              placeholder='Email'
            />
            <ErrorMessage
              className='contact-error'
              name='email'
              component='div'
            />
            <Field
              className='contact-textarea'
              as='textarea'
              name='message'
              placeholder='Message'
            />
            <button
              className='contact-submit'
              type='submit'
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
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
