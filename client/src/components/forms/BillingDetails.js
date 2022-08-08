import React, { useState, useMemo } from 'react';
import FormField from './FormField';
import CountrySelector from './CountrySelector';

const BillingDetails = ({ user = null, isDefault, setIsDefault }) => {
  return (
    <>
      <FormField
        name='firstName'
        //label='First Name'
        type='text'
        placeholder='Jane'
        initialValue={user?.firstName}
        required
      />
      <FormField
        name='lastName'
        //label='Last Name'
        type='text'
        placeholder='Doe'
        initialValue={user?.lastName}
        required
      />
      <FormField
        name='email'
        //label='Email'
        type='email'
        placeholder='jane.doe@example.com'
        initialValue={user?.email}
        required
      />
      <FormField
        name='address'
        //label='Address'
        type='text'
        placeholder='185 Berry St. Suite 550'
        initialValue={user?.address?.line1}
        required
      />
      <FormField
        name='city'
        //label='City'
        type='text'
        placeholder='San Francisco'
        initialValue={user?.address?.city}
        required
      />
      <FormField
        name='state'
        //label='State'
        type='text'
        placeholder='CA'
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
        name='zip'
        //label='ZIP'
        type='text'
        placeholder='94103'
        initialValue={user?.address?.postal_code}
        required
      />
      {user?.admin && (
        <FormField
          name='discount'
          //label='discount'
          type='text'
          placeholder='code?'
          //initialValue={user?.address?.postal_code}
          //required
        />
      )}
      <div className='form-field-container'>
        <label htmlFor={'isDefault'} className='checkbox'>
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
