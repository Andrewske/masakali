import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import { underConstructionImages } from './galleryImages';

const UnderConstruction = ({ handleClick }) => {
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
