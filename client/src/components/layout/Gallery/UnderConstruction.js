import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const UnderConstruction = ({ handleClick }) => {
  const underConstructionImages = [
    {
      key: 0,
      path: '/Gallery/under-construction/chandra-front-construction_Eqjqjf5xo4.jpg',
    },
    {
      key: 1,
      path: '/Gallery/under-construction/chandra-pool-construction_RHrvtT-AF.jpg',
    },
    {
      key: 2,
      path: '/Gallery/under-construction/chandra-roof-construction_nXVnXHVrN.jpg',
    },
    {
      key: 3,
      path: '/Gallery/under-construction/chandra-surya-construction-concrete_pU__m154K.jpg',
    },
    {
      key: 4,
      path: '/Gallery/under-construction/chandra-wall-construction_JXGTdtHOXva.jpg',
    },
    {
      key: 5,
      path: '/Gallery/under-construction/jala-foundation-construction_aRJJxBWiH.jpg',
    },
    {
      key: 6,
      path: '/Gallery/under-construction/jala-pool-construction_P4LMlo068.jpg',
    },
  ];
  return underConstructionImages.map((i) => (
    <span onClick={() => handleClick(i.key)} key={i.key}>
      <ImageContext>
        <IKImage
          className='gallery-image'
          path={i.path}
          transformation={[{ height: '250px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
    </span>
  ));
};

export default UnderConstruction;
