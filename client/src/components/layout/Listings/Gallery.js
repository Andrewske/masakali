import React, { useState, Fragment } from 'react';
import useBreakpoint from '../../../utils/useBreakpoint';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import FullScreenGallery from './FullScreenGallery';

const Gallery = ({ images, setFullScreenGalleryOpen }) => {
  const point = useBreakpoint();

  return point === 'lg' ? (
    <div className='listing-gallery-grid'>
      <span className='btn' onClick={() => setFullScreenGalleryOpen(true)}>
        Show all photos
      </span>
      <ImageContext>
        <IKImage
          className='large-img'
          path={images[0].path}
          transformation={[{ height: '500px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
      <ImageContext>
        <IKImage
          className='small-img'
          path={images[1].path}
          transformation={[{ height: '250px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
      <ImageContext>
        <IKImage
          className='small-img'
          path={images[2].path}
          transformation={[{ height: '250px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
      <ImageContext>
        <IKImage
          className='small-img'
          path={images[3].path}
          transformation={[{ height: '250px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
      <ImageContext>
        <IKImage
          className='small-img'
          path={images[4].path}
          transformation={[{ height: '250px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
    </div>
  ) : (
    <div
      className='listing-gallery-single'
      onClick={() => setFullScreenGalleryOpen(true)}
    >
      <ImageContext>
        <IKImage
          className='large-img'
          path={images[0].path}
          transformation={[{ height: '500px', dpr: 'auto' }]}
          loading='lazy'
        />
      </ImageContext>
    </div>
  );
};

export default Gallery;
