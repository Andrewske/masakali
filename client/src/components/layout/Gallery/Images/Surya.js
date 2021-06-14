import React from 'react';
import ImageContext from '../../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import { suryaImages } from '../galleryImages';

const Surya = ({ handleClick }) => {
  return suryaImages.map((i) => (
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

export default Surya;
