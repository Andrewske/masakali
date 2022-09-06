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
    '40" HDTV with Netflix',
    'Wifi',
    'Private pool',
    'Garden view',
    'Outdoor shower',
    'Mosquito net',
    'Bluetooth speaker system',
    'Suitable for events',
    'Ceiling & portable fans',
    'Dedicated workspace',
    'Full kitchenette',
    'Breakfast',
  ],
  chandra: [
    'Hammock',
    'Wifi',
    'Private pool',
    'Garden view',
    'Outdoor shower',
    'Spacious bathtub',
    'Mosquito net',
    'Bluetooth speaker',
    'Suitable for events',
    'Ceiling & portable fans',
    'Dedicated workspace',
    'Full kitchenette',
    'Breakfast',
  ],
  jala: [
    'Wifi',
    'Private pool',
    'Garden view',
    'Outdoor shower',
    'Mosquito net',
    'Bluetooth speaker system',
    'Suitable for events',
    'Portable fans',
    'Dedicated workspace',
    'Full kitchenette',
    'Breakfast',
  ],
};
