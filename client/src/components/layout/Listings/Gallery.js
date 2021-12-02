import React from 'react';
import useBreakpoint from '../../../utils/useBreakpoint';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import { suryaImages } from '../Gallery/galleryImages';

const Gallery = ({ images }) => {
  const point = useBreakpoint();

  return point === 'lg' ? (
    <div className='listing-gallery-grid'>
      <ImageContext>
        <IKImage
          className='large-img'
          path={images[0]}
          transformation={[{ height: '500px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
      <ImageContext>
        <IKImage
          className='small-img'
          path={images[1]}
          transformation={[{ height: '250px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
      <ImageContext>
        <IKImage
          className='small-img'
          path={images[2]}
          transformation={[{ height: '250px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
      <ImageContext>
        <IKImage
          className='small-img'
          path={images[3]}
          transformation={[{ height: '250px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
      <ImageContext>
        <IKImage
          className='small-img'
          path={images[4]}
          transformation={[{ height: '250px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
    </div>
  ) : (
    <span>
      <ImageContext>
        <IKImage
          className='large-img'
          path={images[0]}
          transformation={[{ height: '500px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
      {point}
    </span>
  );
};

export default Gallery;
