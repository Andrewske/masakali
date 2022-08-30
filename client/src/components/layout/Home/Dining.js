import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Dining = () => {
  return (
    <div id='dining' className='extras-container'>
      <span className='extras-img'>
        <ImageContext>
          <IKImage
            path='/Main/masakali-dining_wZNNBopbm.webp'
            transformation={[{ height: '400px', width: '400px', dpr: 'auto' }]}
            lqip={{ active: true }}
            loading='lazy'
          />
        </ImageContext>
      </span>

      <span className='extras-details'>
        <span className='text'>
          <h2>Dining</h2>
          <span>
            Masakali offers a full range of options for dining all with the
            taste and charm of fresh Balinese ingredients. Our curated selection
            of savory cuisine options is will appeal to anyone, styled after all
            types of international cuisines, including many local Balinese
            dishes. Our staff will bring you breakfast, lunch, or dinner so you
            can enjoy your meal in the privacy of your own suite.
          </span>

          <div className='extras-link'>
            <a>
              See our menu <i className='icon-chevron-right' />
            </a>
          </div>
        </span>
      </span>
    </div>
  );
};

export default Dining;
