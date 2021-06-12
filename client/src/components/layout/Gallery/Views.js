import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Views = ({ handleClick }) => {
  const viewsImages = [
    { key: 0, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
    { key: 1, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
    { key: 2, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
    { key: 3, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
  ];
  return viewsImages.map((i) => (
    <span onClick={() => handleClick(i.key)} key={i.key}>
      <p>{i.path}</p>
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

export default Views;
