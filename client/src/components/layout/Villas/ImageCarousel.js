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

const images = [
  { key: 1, path: '/surya-front-night_JpkSeqJUB.jpg' },
  { key: 2, path: '/Home/navita_deck_lounge_1__KU5WS7eEkr.jpg' }, //{ key: 2, path: '/main-photo_p9l1NRPmw.jpg' },
  { key: 3, path: '/Home/chandra_pool_LJbiUFrCC.jpg' }, // { key: 3, path: '/home-suzanne-pool-view_t5w4u2g3s.jpg' },
  { key: 4, path: '/Home/sylvia_surya_view_-RPbEYyqjBU.jpg' }, //{ key: 4, path: '/pool-view_3wQpQqYjp.jpeg' },
  { key: 5, path: '/Home/home-surya-bed_rqQoKi6or.jpg' },
];

const ImageCarousel = () => {
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      //keyBoardControl={true}
      //customTransition='all .5'
      transitionDuration={1000}
      containerClass='template-gallery'
    >
      {images.map((d, i) => (
        <ImageContext key={d.key}>
          <IKImage
            className='template-gallery-item'
            path={d.path}
            transformation={[{ height: 700, width: 'auto', dpr: 'auto' }]}
            lqip={{ active: true }}
            loading={i > 0 ? 'lazy' : ''}
          />
        </ImageContext>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
