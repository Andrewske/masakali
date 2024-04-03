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
            transformation={[{ height: '400px', width: '400px', dpr: 'auto', fo: 'auto' }]}
            lqip={{ active: true }}
            loading='lazy'
          />
        </ImageContext>
      </span>

      <span className='extras-details'>
        <span className='text'>
          <h2>Dining</h2>
          <span>
            Masakali offers a full range of options for dining, all with the
            taste and charm of fresh Balinese ingredients. Our curated selection
            of savory cuisine includes many local Balinese dishes as well as
            international dishes. Our staff will prepare you breakfast which is
            included in the price of your villa from select items on the menu as
            well as offer lunch and dinner so you can enjoy your meal in the
            privacy of your own villa.
          </span>

          {/* <div className='extras-link' style={{ marginLeft: '2rem' }}>
            <a
              href='https://drive.google.com/file/d/1ngucJeZfvKcu8MvP2eqayTuWqhicGOkL/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              See our menu <i className='icon-chevron-right' />
            </a>
          </div> */}
        </span>
      </span>
    </div>
  );
};

export default Dining;
