import React from 'react';
import useCurrencyFormat from '../../../hooks/useCurrencyFormat';

const AddOn = ({ id, addOns, updateBooking }) => {
  const addOnIndex = addOns.findIndex((obj) => obj.id === id);
  const { priceUSD, title } = addOns[addOnIndex];

  const price = useCurrencyFormat(priceUSD);

  const handleChange = (e) => {
    let addOnIndex = addOns.findIndex((obj) => obj.id === id);

    addOns[addOnIndex].selected = e.target.checked;

    updateBooking({ addOns });
  };

  return (
    <span className="add-on">
      <label htmlFor={id}>
        {title} - {price}
        <input
          id={id}
          type="checkbox"
          onChange={handleChange}
        />
      </label>
    </span>
  );
};

export default AddOn;
