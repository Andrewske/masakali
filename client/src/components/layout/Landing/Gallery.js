import React from 'react';
import styled from 'styled-components';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    objectFit: 'contain',
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

const amenities = [
  {
    key: 'garden-path',
    title: 'Garden Path',
    path: '/Home_Gallery/home-gallery-garden-path_KCq3C0ym9.jpg',
  },
  {
    key: 'surya-bed',
    title: 'Surya Bed',
    path: '/Home_Gallery/home-gallery-surya-bed_61qeDhIpP.jpg',
  },
  {
    key: 'surya-bathroom-complete',
    title: 'Surya Bathroom',
    path: '/Home_Gallery/home-gallery-surya-front_MSOIxOpuzC.jpg',
  },
  {
    key: 'surya-porch',
    title: 'Surya Porch',
    path: '/Home_Gallery/home-gallery-surya-porch_UQMgyTGhub.jpg',
  },
  {
    key: 'surya-side',
    title: 'Surya Side',
    path: '/Home_Gallery/home-gallery-surya-side_S-U2y7f90Z.jpg',
  },
];

const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0px 50px;
`;

const Item = styled.div`
  position: relative;
  height: 600px;
  max-width: 750px;
  margin: 0 auto;
`;

const Gallery = ({ width }) => {
  const imgWidth = width > 750 ? 750 : width;
  return (
    <Container id='landing-gallery' className='background-gray'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>Gallery</h1>
        <div className='divider' />
      </div>
      {width && (
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true} //{this.props.deviceType !== 'mobile' ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          // customTransition='all .5'
          transitionDuration={1000}
          containerClass='gallery-container'
          //removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          // dotListClass='carousel-dot-list'
          //itemClass='carousel-item-padding-40-px'
        >
          {amenities.map((i) => {
            return (
              <Item key={i.key}>
                <div className='carosel-overlay'>
                  <ImageContext>
                    <IKImage
                      className='home-gallery-image'
                      path={i.path}
                      transformation={[
                        { height: '600px', width: imgWidth, dpr: 'auto' },
                      ]}
                      loading='lazy'
                    />
                  </ImageContext>
                </div>
                {/* <div className='carousel-text'>
                <h3>{i.title}</h3>
              </div> */}
              </Item>
            );
          })}
        </Carousel>
      )}
    </Container>
  );
};

Gallery.propTypes = {};

export default Gallery;
