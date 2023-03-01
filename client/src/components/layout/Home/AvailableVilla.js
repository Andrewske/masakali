import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import useCurrencyFormat from '../../../hooks/useCurrencyFormat';
import { useNavigate } from 'react-router-dom';
import useVillaPrice from '../../../hooks/useVillaPrice';

const villaDetails = {
  surya: {
    imgUrl: '/Main/Surya/surya-front-main_yynphR5d1s.webp',
    adults: 2,
    children: 1,
  },
  chandra: {
    imgUrl: '/Main/Chandra/chandra-front-main_ohrGHDvTvf.webp',
    adults: 2,
    children: 1,
  },
  jala: {
    imgUrl: '/Main/Jala/jala-front-main_yJaEapAckn.webp',
    adults: 2,
    children: 1,
  },
  akasha: {
    imgUrl: '/Main/Surya/surya-front-main_yynphR5d1s.webp',
    adults: 4,
    children: 2,
  },
};

const AvailableVilla = ({ name, checkIn, checkOut }) => {
  const navigate = useNavigate();
  const price = useVillaPrice(checkIn, checkOut, name);
  let formattedPrice = useCurrencyFormat(price);

  return (
    <span
      className="villa"
      key={name}
      onClick={() => navigate(`/villas?villa=${name}`)}
    >
      <ImageContext>
        <IKImage
          path={villaDetails[name].imgUrl}
          width="200px"
          lqip={{ active: true }}
          loading="lazy"
        />
      </ImageContext>
      <span className="villa-details">
        <h3>{name}</h3>
        <p>
          {villaDetails[name].adults} adults,{' '}
          {villaDetails[name].children === 1
            ? '1 child'
            : villaDetails[name].children + ' children'}
        </p>
        <p>Private Pool</p>
        <p>Ensuite kitchenette</p>
        <p style={{ paddingTop: '1rem' }}>{formattedPrice}/night</p>
      </span>
    </span>
  );
};

export default AvailableVilla;
