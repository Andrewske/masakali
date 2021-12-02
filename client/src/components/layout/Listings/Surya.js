import React, { useState, useRef, Fragment } from 'react';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/constants';
import moment from 'moment';

import Gallery from './Gallery';
import { suryaImages } from '../Gallery/galleryImages';
import useBreakpoint from '../../../utils/useBreakpoint';
import useOnClickOutside from '../../../utils/useOnClickOutside';
//import Calendar from 'react-select-date';

const images = [
  suryaImages[10].path,
  suryaImages[0].path,
  suryaImages[1].path,
  suryaImages[4].path,
  suryaImages[5].path,
];

const Surya = () => {
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);
  const [checkIn, setCheckIn] = useState('Add Date');
  const [checkOut, setCheckOut] = useState('Add Date');
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const today = moment();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [autoFocusEndDate, setAutoFocusEndDate] = useState(true);
  const [focusedInput, setFocusedInput] = useState(START_DATE);
  const [datePickerActive, setDatePickerActive] = useState(true);
  const [numMonths, setNumMonths] = useState(4);
  const [numDays, setNumDays] = useState('Select check-in date');
  const [savedDates, setSavedDates] = useState(false);

  const point = useBreakpoint();

  const calendarRef = useRef();
  useOnClickOutside(calendarRef, () => setCalendarIsOpen(false));

  const openCalendar = () => {
    setCalendarIsOpen(true);
  };

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

  return (
    <div className='container listing-page'>
      <span className='listing-header'>
        <div className='images'>
          <Gallery images={images} />
        </div>
      </span>
      <span className='listing-body'>
        <span className='listing-details'>
          <h1>Surya - Antique Joglo Villa with kitchen and infinity pool</h1>
          <p>Tegallalang, Bali, Indonesia</p>
          <div className='line'></div>
          <p>
            Join us on the Island of the Gods surrounded by serene landscape and
            rich culture. Our antique teakwood vacation villas offer a serene
            get away. Relax by a private infinity pool overlooking the beautiful
            Bali rice fields or find adventure in nearby Ubud. Equipped with a
            kitchenette, antique furniture, and private outdoor showers. Spa
            services and meals available in private suites.
          </p>
          <p>
            Join us on the Island of the Gods surrounded by serene landscape and
            rich culture. Our antique teakwood vacation villas offer a serene
            get away. Relax by a private infinity pool overlooking the beautiful
            Bali rice fields or find adventure in nearby Ubud. Equipped with a
            kitchenette, antique furniture, and private outdoor showers. Spa
            services and meals available in private suites.
          </p>
          <p>
            Join us on the Island of the Gods surrounded by serene landscape and
            rich culture. Our antique teakwood vacation villas offer a serene
            get away. Relax by a private infinity pool overlooking the beautiful
            Bali rice fields or find adventure in nearby Ubud. Equipped with a
            kitchenette, antique furniture, and private outdoor showers. Spa
            services and meals available in private suites.
          </p>
          <p>
            Join us on the Island of the Gods surrounded by serene landscape and
            rich culture. Our antique teakwood vacation villas offer a serene
            get away. Relax by a private infinity pool overlooking the beautiful
            Bali rice fields or find adventure in nearby Ubud. Equipped with a
            kitchenette, antique furniture, and private outdoor showers. Spa
            services and meals available in private suites.
          </p>
          <p>
            Join us on the Island of the Gods surrounded by serene landscape and
            rich culture. Our antique teakwood vacation villas offer a serene
            get away. Relax by a private infinity pool overlooking the beautiful
            Bali rice fields or find adventure in nearby Ubud. Equipped with a
            kitchenette, antique furniture, and private outdoor showers. Spa
            services and meals available in private suites.
          </p>
        </span>
        {point === 'md' || point === 'lg' ? (
          <div className='booking-card'>
            <div className='price'>
              <p>
                <span style={{ fontSize: '1.5rem' }}>$84</span> / night
              </p>
              <span className='break'></span>
              <p className='subtext'>Save 15% by booking directly with us</p>
            </div>
            <div className='form-box'>
              {/* <span className='check-in' onClick={openCalendar}>
              <p className='title'>CHECK-IN</p>
              <p>{checkIn === 'Invalid date' ? 'Add Date' : checkIn}</p>
            </span>
            <span className='check-in' onClick={openCalendar}>
              <p className='title'>CHECK-OUT</p>
              <p>{checkOut === 'Invalid date' ? 'Add Date' : checkOut}</p>
            </span> */}
              <DateRangePicker
                startDate={startDate}
                startDateId='startDate'
                endDate={endDate}
                endDateId='endDate'
                onDatesChange={(dates) => handleDateChange(dates)}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
              />
              <span className='inputs'>
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
              </span>
            </div>
            <span className='btn'>Request Stay</span>
          </div>
        ) : (
          <div className='booking-card-sm'>
            <span className='bottom-bar'>
              <p>
                <span style={{ fontSize: '1.5rem' }}>$84</span> / night
              </p>
              {datePickerActive ? (
                <span className='btn' onClick={saveDates}>
                  Save
                </span>
              ) : (
                <span className='btn' onClick={() => setDatePickerActive(true)}>
                  Choose Dates
                </span>
              )}
            </span>

            <span
              className={`date-picker-container ${
                datePickerActive || savedDates ? 'active' : ''
              }`}
            >
              <span className='date-picker-header'>
                <i
                  className='icon-times'
                  onClick={() => setDatePickerActive(false)}
                />
                <span className='clear-dates' onClick={clearDates}>
                  Clear Dates
                </span>
              </span>
              <span className='date-picker-info'>
                <h2>{numDays}</h2>
              </span>
              {savedDates ? (
                <span className='booking-card-sm'>
                  <span className='form-box'>
                    <DateRangePicker
                      startDate={startDate}
                      startDateId='startDate'
                      endDate={endDate}
                      endDateId='endDate'
                      onDatesChange={(dates) => handleDateChange(dates)}
                      focusedInput={focusedInput}
                      onFocusChange={(focusedInput) =>
                        setFocusedInput(focusedInput)
                      }
                    />
                    <span className='inputs'>
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
                    </span>
                  </span>
                </span>
              ) : (
                <DayPickerRangeController
                  startDate={startDate}
                  startDateId='startDate'
                  endDate={endDate}
                  endDateId='endDate'
                  onDatesChange={(dates) => handleDateChange(dates)}
                  focusedInput={focusedInput || START_DATE}
                  onFocusChange={(focusedInput) =>
                    setFocusedInput(focusedInput)
                  }
                  //focused={true}
                  initialVisibleMonth={() => moment()}
                  numberOfMonths={2}
                  orientation={'verticalScrollable'}
                  navPrev={<Fragment />}
                  navNext={<span className='load-more'>Load More Months</span>}
                />
              )}
            </span>
          </div>
        )}
      </span>
    </div>
  );
};

export default Surya;
