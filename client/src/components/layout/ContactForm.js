import React from 'react';
import emailjs from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = (props) => {
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
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={validation}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='contact-form'>
          <div className='purple'>
            <h1>Contact Us</h1>
            <div className='divider' />
          </div>

          <Field
            className='contact-input'
            type='input'
            name='name'
            placeholder='Name'
          />
          <ErrorMessage className='contact-error' name='name' component='div' />
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
  );
};

ContactForm.propTypes = {};

export default ContactForm;
