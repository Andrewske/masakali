import React from 'react';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    objectFit: 'cover',
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    objectFit: 'cover',
  },
};

const images = {
  surya: [
    { key: 1, path: '/Main/Surya/surya-front-main_yynphR5d1s.webp' },
    { key: 2, path: '/Main/Surya/surya-bedroom_dQwz6JpPm.webp' },
    { key: 3, path: '/Main/Surya/surya-pool-view_pjSJIpNVo.webp' },
    { key: 4, path: '/Main/Surya/surya-bathroom_Ky01eDo6af.webp' },
    { key: 5, path: '/Main/Surya/surya-front-second_u3xM608eAl.webp' },
    { key: 6, path: '/Main/Surya/surya-interior_MVrSfX92I.webp' },
  ],
  chandra: [
    { key: 1, path: '/Main/Chandra/chandra-front-main_ohrGHDvTvf.webp' },
    { key: 2, path: '/Main/Chandra/chandra-bedroom_JAH69CTiiF.webp' },
    { key: 3, path: '/Main/Chandra/chandra-bathroom_7I5k2YbQst.webp' },
    { key: 4, path: '/Main/Chandra/chandra-desk-accent-wall_NRYNSozay.webp' },
    { key: 5, path: '/Main/Chandra/chandra-hammock-views_jWGp4vKQ5R.webp' },
    { key: 6, path: '/Main/Chandra/chandra-sunset-views_mXTk4LDWy.webp' },
  ],
  jala: [
    { key: 1, path: '/Main/Jala/jala-front-main_yJaEapAckn.webp' },
    { key: 2, path: '/Main/Jala/jala-bedroom-interior_k4_8kia2c.webp' },
    { key: 3, path: '/Main/Jala/jala-front-second_njtd4AHo_.webp' },
    { key: 4, path: '/Main/Jala/jala-bathroom_MWnST_qRiv.webp' },
    { key: 5, path: '/Main/Jala/jala-pool-views_XNtx-FF4aV.webp' },
    { key: 6, path: '/Main/Jala/jala-porch-views_NNsVpcUUHy.webp' },
  ],
  akasha: [
    { key: 1, path: '/Main/Akasha/akasha-front_knBEIm9Huj.webp' },
    { key: 2, path: '/Main/Akasha/akasha-views_UXU47lMRAI.webp' },
    { key: 3, path: '/Main/Akasha/akasha-bed_ooi_robeB.webp' },
    { key: 4, path: '/Main/Akasha/akasha-pool_LtvX76vxwo.webp' },
    { key: 5, path: '/Main/Akasha/akasha-bathroom_gnqrBW7O-.webp' },
    { key: 6, path: '/Main/Akasha/akasha-kitchen_mPlpOGx9R.webp' },
  ],
};

const ImageCarousel = ({ name = 'surya' }) => {
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      dotListClass='carousel-dots'
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      //autoPlay={true}
      //autoPlaySpeed={5000}
      //keyBoardControl={true}
      //customTransition='all .5'
      transitionDuration={1000}
      containerClass='template-gallery'
    >
      {images[name].map((d, i) => (
        <ImageContext key={d.key}>
          <IKImage
            className='template-gallery-item'
            path={d.path}
            transformation={[{ height: '775px', width: 'auto', dpr: 'auto' }]}
            lqip={{ active: true }}
            loading={i > 0 ? 'lazy' : ''}
          />
        </ImageContext>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
