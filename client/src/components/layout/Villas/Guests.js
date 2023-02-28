import { useState, useEffect } from 'react';

const Guests = ({ setGuests }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    setGuests(adults + children);
  }, [adults, children, setGuests]);

  const addGuest = (type) => {
    if (type === 'adult') {
      setAdults(adults >= 4 ? 4 : adults + 1);
    }
    if (type === 'child') {
      setChildren(children >= 4 ? 4 : children + 1);
    }
  };

  const removeGuest = (type) => {
    if (type === 'adult') {
      setAdults(adults > 1 ? adults - 1 : 1);
    }

    if (type === 'child') {
      setChildren(children > 0 ? children - 1 : 0);
    }
  };

  return (
    <span className="checkin-date">
      <div className="title">
        {[...'number of guests'].map((letter, index) => (
          <span key={letter + '-' + index}>{letter}</span>
        ))}
      </div>
      <span className="date">
        {adults} adult(s){' '}
        <span className="icons">
          <i
            className="icon-chevron-up"
            onClick={() => addGuest('adult')}
          />
          <i
            className="icon-chevron-down"
            onClick={() => removeGuest('adult')}
          />
        </span>{' '}
        {children} children
        <span className="icons">
          <i
            className="icon-chevron-up"
            onClick={() => addGuest('child')}
          />
          <i
            className="icon-chevron-down"
            onClick={() => removeGuest('child')}
          />
        </span>
      </span>
    </span>
  );
};

export default Guests;
