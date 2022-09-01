import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import useCurrencyFormat from '../../../hooks/useCurrencyFormat';
import { useNavigate } from 'react-router-dom';

const imageUrl = {
  surya: '/Main/Surya/surya-front-main_yynphR5d1s.webp',
  chandra: '/Main/Chandra/chandra-front-main_ohrGHDvTvf.webp',
  jala: '/Main/Jala/jala-front-main_yJaEapAckn.webp',
};

const AvailableVilla = ({ name, price }) => {
  let formattedPrice = useCurrencyFormat(price);
  const navigate = useNavigate();

  return (
    <span
      className='villa'
      key={name}
      onClick={() => navigate(`/villas?villa=${name}`)}
    >
      <ImageContext>
        <IKImage
          path={imageUrl[name]}
          width='200px'
          lqip={{ active: true }}
          loading='lazy'
        />
      </ImageContext>
      <span className='villa-details'>
        <h3>{name}</h3>
        <p>2 adults, 1 child</p>
        <p>Private Pool</p>
        <p>Ensuite kitchenette</p>
        <p style={{ paddingTop: '1rem' }}>{formattedPrice}/night</p>
      </span>
    </span>
  );
};

export default AvailableVilla;
