import React, { useState, useEffect, useRef } from 'react';

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement('script');
  script.type = 'text/javascript';

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ['address'] } //componentRestrictions: { country: 'us' }
  );

  autoComplete.setFields(['address_components', 'formatted_address']);

  autoComplete.addListener('place_changed', () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query, true);
  console.log(addressObject);
}

function fillInAddress() {
  const place = autoComplete.getPlace();
  let address = {
    line1: '',
    city: '',
    state: '',
    postal_code: '',
  };

  //   for (const component of place.address_components) {
  //     const componentType = component.types[0];

  //     switch (componentType) {
  //       case 'street_number': {
  //         address1 = `${component.long_name} ${address1}`;
  //         break;
  //       }

  //       case 'route': {
  //         address1 += component.short_name;
  //         break;
  //       }

  //       case 'postal_code': {
  //         postcode = `${component.long_name}${postcode}`;
  //         break;
  //       }

  //       case 'postal_code_suffix': {
  //         postcode = `${postcode}-${component.long_name}`;
  //         break;
  //       }
  //       case 'locality':
  //         document.querySelector('#locality').value = component.long_name;
  //         break;
  //       case 'administrative_area_level_1': {
  //         document.querySelector('#state').value = component.short_name;
  //         break;
  //       }
  //       case 'country':
  //         document.querySelector('#country').value = component.long_name;
  //         break;
  //     }
  //   }
}

const GoogleAddressAutocomplete = () => {
  const [query, setQuery] = useState('');
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <div>
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder='Enter your address'
        value={query}
      />
    </div>
  );
};

export default GoogleAddressAutocomplete;
