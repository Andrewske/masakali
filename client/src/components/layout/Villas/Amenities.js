import React from 'react';

const Amenities = ({ villa }) => {
  return (
    <ul>
      {allAmenities[villa].map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Amenities;

var allAmenities = {
  surya: [
    'Wifi 100 mb/s',
    'Private infinity pool',
    'Garden view',
    'Outdoor shower',
    'Mosquito net',
    'Bluetooth speaker system',
    'Suitable for events',
    'Ceiling & portable fans',
    'Dedicated workspace',
    'Full kitchenette',
    'Breakfast included',
  ],
  chandra: [
    'Hammock',
    'Wifi 100 mb/s',
    'Private infinity pool',
    'Garden view',
    'Outdoor shower',
    'Spacious bathtub',
    'Mosquito net',
    'Bluetooth speaker',
    'Suitable for events',
    'Ceiling & portable fans',
    'Dedicated workspace',
    'Full kitchenette',
    'Breakfast included',
  ],
  jala: [
    'Wifi 100 mb/s',
    'Private infinity pool',
    'Garden view',
    'Outdoor shower',
    'Mosquito net',
    'Bluetooth speaker system',
    'Suitable for events',
    'Portable fans',
    'Dedicated workspace',
    'Full kitchenette',
    'Breakfast included',
  ],
};
