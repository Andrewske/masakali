import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Dining = () => {
  return (
    <div className='extras-container'>
      <span className='extras-img'>
        <ImageContext>
          <IKImage
            path='/surya-front-night_JpkSeqJUB.jpg'
            transformation={[{ height: '400px', width: '400px', dpr: 'auto' }]}
            lqip={{ active: true }}
            loading='lazy'
          />
        </ImageContext>
      </span>

      <span className='extras-details down'>
        <span className='text'>
          <h2>Dining</h2>
          <span>
            Warm and elegant private pool villa, provides you with ample space
            to rest and recharge. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </span>

          <span className='extras-link'>
            See our menu <i className='icon-chevron-right' />
          </span>
        </span>
      </span>
    </div>
  );
};

export default Dining;
