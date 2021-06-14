import React from 'react';
import ImageContext from '../../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import { chandraImages } from '../galleryImages';

const Chandra = ({ handleClick }) => {
  return chandraImages.map((i) => (
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

export default Chandra;
