import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const News = () => {
  return (
    <div className='news-container'>
      <div className='news-main-image'>
        <ImageContext>
          <IKImage
            className='template-gallery-item'
            path='/Main/Surya/surya-front-main_yynphR5d1s.webp'
            transformation={[{ height: '775px', width: 'auto', dpr: 'auto' }]}
            lqip={{ active: true }}
            loading='lazy'
          />
        </ImageContext>
      </div>
      <div className='news-content'></div>
    </div>
  );
};

export default News;
