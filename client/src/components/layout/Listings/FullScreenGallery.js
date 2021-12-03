import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import useBreakpoint from '../../../utils/useBreakpoint';

const FullScreenGallery = ({
  images,
  setFullScreenGalleryOpen,
  fullScreenGalleryOpen,
}) => {
  const point = useBreakpoint();
  return (
    <div
      className={`full-screen-gallery ${fullScreenGalleryOpen ? 'active' : ''}`}
    >
      <span className='fs-gallery-header'>
        <i
          className='icon-close'
          onClick={() => setFullScreenGalleryOpen(false)}
        ></i>
      </span>
      <div
        className={`fs-gallery ${point === 'xs' || point === 'sm' ? 'sm' : ''}`}
      >
        {images.map((i) => (
          <ImageContext>
            <IKImage
              className='img'
              path={i.path}
              transformation={[{ height: '500px', dpr: 'auto' }]}
              loading='lazy'
              key={i.key}
            />
          </ImageContext>
        ))}
      </div>
    </div>
  );
};

export default FullScreenGallery;
