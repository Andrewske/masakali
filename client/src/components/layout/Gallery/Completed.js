import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Completed = ({ handleClick }) => {
  const completedImages = [
    { key: 0, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
    { key: 1, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
    { key: 2, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
    { key: 3, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
    { key: 4, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
    { key: 5, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
    { key: 6, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
    { key: 7, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
  ];
  return completedImages.map((i) => (
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

export default Completed;
