import React, { useState, useMemo, useEffect } from 'react'
import Select from 'react-select';
import countryList from 'react-select-country-list';
import formField from './FormField'

const CountrySelector = ({ initialValue }) => {
    let [value, setValue] = useState('')
    let [placeholder, setPlaceholder] = useState('Australia')
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = value => {
        console.log(value)
        setValue(value)
    }

    useEffect(() => {
        console.log({ initialValue })
        if (initialValue) {
            setValue({ value: initialValue, label: countryList().getLabel(initialValue) })
        }
    }, [initialValue])

    return <div className='form-field-container'>
        <label htmlFor={'country'}>{'Country'}</label>
        <Select
            className='country'
            name={'country'}
            placeholder={'United States'}
            required={true}
            onChange={changeHandler}
            value={value}
            options={options}
            initialValue={initialValue}
        />
    </div>

    // return (
    //     <Select name="country" label="Country" options={options} value={value} onChange={changeHandler} />
    // )
}

export default CountrySelector