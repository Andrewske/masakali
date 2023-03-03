import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

import { useState } from 'react';
import { connect } from 'react-redux';
import { ADD_PACKAGE, REMOVE_PACKAGE } from '../../../actions/types';
import useCurrencyFormat from '../../../hooks/useCurrencyFormat';
import useConversionRate from '../../../hooks/useConversionRate';

const Package = ({
  name,
  title,
  price,
  includes,
  addPackage,
  removePackage,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const conversionRate = useConversionRate('IDR');
  const amount = useCurrencyFormat(price / conversionRate.value);

  const handleChange = () => {
    if (!isChecked) {
      addPackage(name);
    } else {
      removePackage(name);
    }

    setIsChecked(!isChecked);
  };
  return (
    <span
      className={isChecked ? 'template-package selected' : 'template-package'}
      onClick={handleChange}
    >
      <span className="template-package-selector">
        <input
          type="checkbox"
          checked={isChecked}
        />
      </span>
      <ImageContext>
        <IKImage
          className="template-package-img"
          path="/Main/Akasha/akasha-front_knBEIm9Huj.webp"
          transformation={[{ height: '775px', width: 'auto', dpr: 'auto' }]}
          lqip={{ active: true }}
          loading="lazy"
        />
      </ImageContext>
      <span className="template-package-details">
        <h3>{title}</h3>
        <p>{amount}</p>
      </span>
    </span>
  );
};

const mapStateToProps = (state) => ({
  packages: state.packages,
});

const mapDispatchToProps = (dispatch) => ({
  addPackage: (payload) => dispatch({ type: ADD_PACKAGE, payload: payload }),
  removePackage: (payload) =>
    dispatch({ type: REMOVE_PACKAGE, payload: payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Package);
