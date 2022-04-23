import React, { useState, useEffect, useRef } from 'react';
import useOnClickOutside from '../../../utils/useOnClickOutside';

const GuestsDropdown = ({ guests, setGuests }) => {
  const [active, setActive] = useState(false);
  const [options, setOptions] = useState({
    adults: {
      name: 'Adults',
      description: 'Age 13+',
      count: 1,
    },
    children: {
      name: 'Children',
      description: 'Ages 2-12',
      count: 0,
    },
    infants: {
      name: 'Infants',
      description: 'Under 2',
      count: 0,
    },
    pets: {
      name: 'Pets',
      description: '',
      count: 0,
    },
  });

  const dropdownRef = useRef();

  useOnClickOutside(dropdownRef, () => setActive(false));

  useEffect(() => {
    let total = Object.keys(options)
      .map((key) => options[key].count)
      .reduce((a, b) => a + b, 0);
    setGuests(total);
  }, [options, setGuests]);

  const handleClick = (dir, name) => {
    let prev = options[name].count;
    setOptions({
      ...options,
      [name]: { ...options[name], count: dir === 'up' ? prev + 1 : prev - 1 },
    });
  };

  return (
    <span className='guests' ref={dropdownRef}>
      <span className='text'>
        <p className='title'>GUESTS</p>
        <p className='selection'>
          {guests > 1 ? guests + ' guests' : guests + ' guest'}
        </p>
      </span>
      <span className='icon'>
        <i
          className={active ? 'icon-chevron-up' : 'icon-chevron-down'}
          onClick={() => setActive(!active)}
        />
      </span>
      <span className={active ? 'dropdown active' : 'dropdown'}>
        {Object.keys(options).map((key, i) => (
          <span className='dropdown-item' key={options[key].name}>
            <span className='dd-item-text'>
              <p className='dd-item-title'>{options[key].name}</p>
              <p className='dd-item-subtext'>{options[key].description}</p>
            </span>
            <span className='dd-item-count'>
              <i
                className='icon-minus-outline'
                onClick={() => handleClick('down', key)}
              />
              <span className='count'>{options[key].count}</span>
              <i
                className='icon-add-outline'
                onClick={() => handleClick('up', key)}
              />
            </span>
          </span>
        ))}
      </span>
    </span>
  );
};

export default GuestsDropdown;
