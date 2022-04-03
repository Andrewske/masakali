import React, { useState, useRef, useEffect } from 'react';
import countryData from '../../utils/countries.json';
import useOnClickOutside from '../../utils/useOnClickOutside';
import _ from 'lodash';
import { connect } from 'react-redux';
import { SET_RATES, SET_COUNTRY } from '../../actions/types';
import axios from 'axios';
import { serverUrl } from '../../config';

const CountryPicker = ({ country, setRates, setCountry }) => {
  let { name, currency, rates, flag } = country;
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState(countryData);
  const ref = useRef(null);

  const handleClick = (c) => {
    setCountry({
      name: c.name,
      currency: c.currency.code,
      conversion: rates[c.currency],
      flag: c.flag,
    });
    setIsOpen(false);
  };

  useOnClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    const getRates = async () => {
      let res = await axios.get(serverUrl + '/currency');
      console.log({ res });
      setRates(res.data);
    };
    if (!rates) {
      getRates();
    }
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    setCountries(
      countryData.filter((country) =>
        country.name.toLowerCase().match(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className='country-dropdown' ref={ref}>
      <div className={isOpen ? 'selected search' : 'selected'}>
        {isOpen && (
          <input
            type='text'
            value={value}
            onChange={(e) => handleChange(e)}
            autoFocus
          />
        )}
        <span onClick={() => setIsOpen(!isOpen)}>
          <img src={`data:image/png;base64,${flag}`} />
          <span className={isOpen ? 'icon-chevron-up' : 'icon-chevron-down'} />
        </span>
      </div>
      {isOpen && (
        <div className='list-container'>
          {_.sortBy(countries, ['name']).map((c) => {
            return c?.currency?.code ? (
              <div
                className='list-item'
                key={c.name}
                onClick={() => handleClick(c)}
              >
                <span>{c.name}</span>
                <img src={`data:image/png;base64,${c.flag}`} />
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  country: state.country,
});

const mapDispatchToProps = (dispatch) => ({
  setRates: (payload) => dispatch({ type: SET_RATES, payload }),
  setCountry: (payload) => dispatch({ type: SET_COUNTRY, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryPicker);
