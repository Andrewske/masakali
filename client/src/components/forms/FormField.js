import React, { useState } from 'react';
import { useEffect } from 'react';

const FormField = ({
  label,
  type,
  name,
  placeholder,
  required,
  initialValue,
}) => {
  const [errors, setErrors] = useState(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue]);

  const validate = (e) => {
    e.preventDefault();
    if (e.target.type === 'email') {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)) {
        setErrors('Invalid Email');
      } else {
        setErrors(null);
      }
    }
    setValue(e.target.value);
  };

  return (
    <div className='form-field-container'>
      {/* <label htmlFor={name}>{label}</label> */}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={(e) => validate(e)}
        value={value}
      />
      <p className='error'>{errors}</p>
    </div>
  );
};

export default FormField;
