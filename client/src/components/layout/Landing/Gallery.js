import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    path: '/Home_Gallery/home-gallery-surya-bed_3A6qt08Qgi.jpg',
  },
  {
    key: 'surya-bathroom-complete',
    title: 'Surya Bathroom',
    path: '/Home_Gallery/home-gallery-surya-front_MSOIxOpuzC.jpg',
  },
  {
    key: 'surya-porch',
    title: 'Surya Porch',
    path: '/Home/sylvia_chandra_lounge_dtb2iTh1wy.jpg', //'/Home_Gallery/home-gallery-surya-porch_UQMgyTGhub.jpg',
  },
  {
    key: 'surya-side',
    title: 'Surya Side',
    path: '/Home_Gallery/home-gallery-surya-side_S-U2y7f90Z.jpg',
  },
  {
    key: 'suzanne-yoge',
    title: 'Suzanne Yoga',
    path: '/Home_Gallery/home-gallery-yoga_zeQu8yjzv.jpg',
  },
  {
    key: 'surya-bathroom',
    title: 'Surya Bathroom',
    path: '/Home_Gallery/home-gallery-bathroom_EMae8Viz4.jpg',
  },
  {
    key: 'chandra-hammock',
    title: 'Chandra Hammock',
    path: '/Home/navita_chandra_hammock_fa0eox1V8N.jpg',
  },
  {
    key: 'chandra-pool-view',
    title: 'Chandra Pool',
    path: '/Home/chandra_pool_green_j_GGxyNZBCD.jpg',
  },
  // {
  //   key: 'surya-pool-view',
  //   title: 'Surya Pool View',
  //   path: '/Home_Gallery/home-gallery-pool-view_7SXB4hff2j.jpg',
  // },
];

const Item = styled.div`
  position: relative;
  height: 600px;
  max-width: 750px;
  margin: 0 auto;
`;

const Gallery = ({ width }) => {
  const imgWidth = width > 750 ? 750 : width;
  return (
    <section id='landing-gallery' className='container'>
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
          autoPlaySpeed={5000}
          keyBoardControl={true}
          // customTransition='all .5'
          transitionDuration={2000}
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
              </Item>
            );
          })}
        </Carousel>
      )}
      <Link
        to='/gallery'
        style={{
          color: 'black',
          margin: '0 auto',
          padding: '5px',
          textDecoration: 'underline',
        }}
      >
        View Full Gallery
      </Link>
    </section>
  );
};

Gallery.propTypes = {};

export default Gallery;
