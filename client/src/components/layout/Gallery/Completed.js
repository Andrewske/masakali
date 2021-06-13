import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Completed = ({ handleClick }) => {
  const completedImages = [
    { key: 0, path: '/Gallery/Completed/1_Z2-YuXbmaj.jpg' },
    { key: 1, path: '/Gallery/Completed/2_0G-J5vSHPS.jpg' },
    { key: 2, path: '/Gallery/Completed/3_8nhFaOC6Ae.jpg' },
    { key: 3, path: '/Gallery/Completed/4_A9_3I2zsR.jpg' },
    { key: 4, path: '/Gallery/Completed/5_ZbmHY1s6zs.jpg' },
    { key: 5, path: '/Gallery/Completed/6_RlzcL3sMah.jpg' },
    { key: 6, path: '/Gallery/Completed/7_yGLlH8ZaM.jpg' },
    { key: 7, path: '/Gallery/Completed/8_WKYrZma8G.jpg' },
    { key: 8, path: '/Gallery/Completed/9_T-5Ua1Rg6t.jpg' },
    { key: 9, path: '/Gallery/Completed/10_iBl0-OG3It.jpg' },
    { key: 10, path: '/Gallery/Completed/11_LPZKculhj9.jpg' },
    { key: 11, path: '/Gallery/Completed/12_Ek45sqyEQ.jpg' },
    { key: 12, path: '/Gallery/Completed/13_HjhXxmtQY.jpg' },
    { key: 13, path: '/Gallery/Completed/14_4tPLVRoxAr.jpg' },
    { key: 14, path: '/Gallery/Completed/15_GPpSQ2gMX.jpg' },
    { key: 15, path: '/Gallery/Completed/16_tXfefMdtE.jpg' },
    { key: 16, path: '/Gallery/Completed/17_SQWp4aL7p.jpg' },
    { key: 17, path: '/Gallery/Completed/18_9qpADgXtf.jpg' },
    { key: 18, path: '/Gallery/Completed/19_F2MWS30IX.jpg' },
    { key: 19, path: '/Gallery/Completed/20_rI9lL1zoN.jpg' },
    { key: 20, path: '/Gallery/Completed/21_opUBdhx3y.jpg' },
  ];
  return completedImages.map((i) => (
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

export default Completed;
