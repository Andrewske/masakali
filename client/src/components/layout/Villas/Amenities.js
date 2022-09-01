import React from 'react';

const Amenities = ({ villa }) => {
  return (
    <div>
      <ul>
        {allAmenities[villa].map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
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
    'Mosquito net',
    'Bluetooth speaker system',
    'Suitable for events',
    'Ceiling & portable fans',
    'Dedicated workspace',
    'Full kitchenette',
    'Breakfast',
  ],
  jala: [
    'BBQ Grill',
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
