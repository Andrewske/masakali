import React, { useState, useRef, Fragment } from 'react';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
import moment from 'moment';

import Gallery from './Gallery';
import { suryaImages } from '../Gallery/galleryImages';
import useBreakpoint from '../../../utils/useBreakpoint';
import useOnClickOutside from '../../../utils/useOnClickOutside';

import Template from './Template';

// const images = [
//   suryaImages[10].path,
//   suryaImages[0].path,
//   suryaImages[1].path,
//   suryaImages[4].path,
//   suryaImages[5].path,
// ];

const imageSelection = [10, 0, 1, 4, 5];

const description = `Join us on the Island of the Gods surrounded by serene landscape and
rich culture. Our antique teakwood vacation villas offer a serene
get away. Relax by a private infinity pool overlooking the beautiful
Bali rice fields or find adventure in nearby Ubud. Equipped with a
kitchenette, antique furniture, and private outdoor showers. Spa
services and meals available in private suites.`;

const title = `Surya - Antique Joglo Villa with kitchen and infinity pool`;

const Surya = () => {
  const listing = {
    title,
    description,
    images: suryaImages,
    price: '84',
    imageSelection,
  };
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(START_DATE);
  const [datePickerActive, setDatePickerActive] = useState(true);
  const [numDays, setNumDays] = useState('Select check-in date');
  const [savedDates, setSavedDates] = useState(false);

  const point = useBreakpoint();

  // const calendarRef = useRef();
  // useOnClickOutside(calendarRef, () => setCalendarIsOpen(false));

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

  const onFocusChange = (focusedInput) => {
    setFocusedInput({
      focusedInput, //: !focusedInput ? 'startDate' : focusedInput,
    });
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

  const clearDates = () => {
    setStartDate(null);
    setEndDate(null);
    setSavedDates(false);
  };

  const saveDates = () => {
    setDatePickerActive(false);
    setSavedDates(true);
  };

  const disableDates = [new Date('2021-11-05'), new Date('2021-11-06')];

  return <Template listing={listing} />;
};

export default Surya;
