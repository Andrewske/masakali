import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Container = styled.div`
  height: 100vh;
  padding: 50px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  z-index: 99;
  overflow-y: hidden;
  display: grid;
  place-items: center;
`;

const FullScreenCarousel = ({ images, close }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
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
    },
  };

  return (
    <Container>
      <div
        style={{
          top: 0,
          right: 0,
        }}
        onClick={close}
        className='icon-close fs-icon'
      />
      {images.length > 0 ? (
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          //autoPlay={true} //{this.props.deviceType !== 'mobile' ? true : false}
          //autoPlaySpeed={3000}
          keyBoardControl={true}
          // customTransition='all .5'
          transitionDuration={1000}
          containerClass='fs-carousel'
          //removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          // dotListClass='carousel-dot-list'
          //itemClass='carousel-item-padding-40-px'
        >
          {images.map((i) => {
            return (
              <div key={i.key}>
                <ImageContext>
                  <IKImage
                    className='fs-carousel-image'
                    path={i.path}
                    transformation={[
                      { width: 'auto', height: '600px', dpr: 'auto' },
                    ]}
                    loading='lazy'
                  />
                </ImageContext>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <h1>Nothing Here</h1>
      )}
    </Container>
  );
};

export default FullScreenCarousel;
