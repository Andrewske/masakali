import React, { useState, useMemo } from 'react';
import FormField from './FormField';
import CountrySelector from './CountrySelector';

const BillingDetails = ({ user = null, isDefault, setIsDefault, retreat }) => {
  const {
    retreatData: { numberOfGuests },
  } = retreat;
  return (
    <>
      <span className="billing-form-name">
        <FormField
          name="firstName"
          //label='First Name'
          type="text"
          placeholder="First Name"
          initialValue={user?.firstName}
          required
        />
        <FormField
          name="lastName"
          //label='Last Name'
          type="text"
          placeholder="Last Name"
          initialValue={user?.lastName}
          required
        />
      </span>

      <FormField
        name="email"
        //label='Email'
        type="email"
        placeholder="Email"
        initialValue={user?.email}
        required
      />
      <FormField
        name="address"
        //label='Address'
        type="text"
        placeholder="Address"
        initialValue={user?.address?.line1}
        required
      />
      <FormField
        name="city"
        //label='City'
        type="text"
        placeholder="City"
        initialValue={user?.address?.city}
        required
      />
      <FormField
        name="state"
        //label='State'
        type="text"
        placeholder="State"
        initialValue={user?.address?.state}
        required
      />
      {/* <FormField
        name='country'
        //label='Country'
        type='text'
        placeholder='US'
        initialValue={user?.address?.country}
        required
      /> */}
      <CountrySelector initialValue={user?.address?.country} />
      <FormField
        name="zip"
        //label='ZIP'
        type="text"
        placeholder="ZIP"
        initialValue={user?.address?.postal_code}
        required
      />
      {user?.admin && (
        <FormField
          name="discount"
          //label='discount'
          type="text"
          placeholder="code?"
          //initialValue={user?.address?.postal_code}
          //required
        />
      )}
      {numberOfGuests === 2 && (
        <div className="guests">
          <p className="subtext">
            Please provide name and email for the second guest
          </p>
          <FormField
            name="guestName"
            //label='First Name'
            type="text"
            placeholder="Guest Name"
            required
          />
          <FormField
            name="guestEmail"
            type="email"
            placeholder="Guest Email"
            required
          />
        </div>
      )}
      <div className="form-field-container">
        <label
          htmlFor={'isDefault'}
          className="checkbox"
        >
          Set as default billing address
        </label>
        <input
          name={'isDefault'}
          type={'checkbox'}
          onChange={() => setIsDefault(!isDefault)}
          value={isDefault}
          style={{ fontSize: '.75rem' }}
        />
      </div>
    </>
  );
};

export default BillingDetails;
