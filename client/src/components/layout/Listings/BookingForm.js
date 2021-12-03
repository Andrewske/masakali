import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import { validation, submitForm } from '../../../utils/emailForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment';

const BookingForm = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);
  const [numDays, setNumDays] = useState('Select check-in date');

  const handleDateChange = (dateObj) => {
    let { startDate, endDate } = dateObj;
    setStartDate(startDate);
    setEndDate(endDate);

    if (startDate && !endDate) {
      setNumDays('Select check-out date');
    }

    if (startDate && endDate) {
      let days = (endDate - startDate) / (60 * 60 * 24 * 1000);
      setNumDays(`${days} nights`);
    }
  };

  const handleFormChange = (e) => {
    e.preventDefault();

    if (e.target.id === 'name') {
      setName(e.target.value);
    }

    if (e.target.id === 'email') {
      setEmail(e.target.value);
    }
  };

  return (
    <div className='form-box'>
      <DateRangePicker
        startDate={startDate}
        startDateId='startDate'
        endDate={endDate}
        endDateId='endDate'
        onDatesChange={(dates) => handleDateChange(dates)}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        orientation={'vertical'}
      />
      <Formik
        initialValues={{
          name,
          email,
          message: `I would like to reserve Surya from ${moment(
            startDate
          ).format('YYYY-MM-DD')} to ${moment(endDate).format('YYYY-MM-DD')} `,
        }}
        validate={validation}
        onSubmit={submitForm}
      >
        {({ isSubmitting }) => (
          <Form className='inputs'>
            <Field
              //className='contact-input'
              type='input'
              name='name'
              placeholder='Name'
            />
            <ErrorMessage className='error' name='name' component='div' />
            <Field
              //className='contact-input'
              type='email'
              name='email'
              placeholder='Email'
            />
            <ErrorMessage className='error' name='email' component='div' />
            {startDate && endDate ? (
              <button type='submit' disabled={isSubmitting} className='btn'>
                Request Stay
              </button>
            ) : (
              <span />
            )}
          </Form>
        )}
      </Formik>
      {/* <span className='inputs'>
        <input
          type='text'
          placeholder='Name'
          id='name'
          onChange={(e) => handleFormChange(e)}
        />
        <input
          type='text'
          placeholder='Email'
          id='email'
          onChange={(e) => handleFormChange(e)}
        />
      </span> */}
    </div>
  );
};

export default BookingForm;
