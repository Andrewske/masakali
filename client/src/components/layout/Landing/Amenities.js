import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const amenities = [
  {
    key: 'retreats-and-workshops',
    title: 'Retreats and Workshops',
    path: '/amenities-retreats-and-workshops_RUXvKPcUY0.jpg',
  },
  {
    key: 'sound-healing',
    title: 'Sound Healing',
    path: '/amenities-sound-healing_dYzsUtxnTO.jpg',
  },
  {
    key: 'yoga-teacher-training',
    title: 'Yoga Teacher Training',
    path: '/dylan-yoga-tiny_-yFDvQrYfT1.jpg',
  },
  {
    key: 'organic-beauty-products',
    title: 'Organic Beauty Products',
    path: '/amenities-organic-beauty-products_LF76dAzQL.jpg',
  },
  {
    key: 'foundation',
    title: 'Foundation',
    path: '/Amenities/foundation/kids-in-water_nYQ2fvKXz.jpg',
  },
  {
    key: 'cafe-juice-bar',
    title: 'Cafe And Juice Bar',
    path: '/Amenities/cafe-juice-bar/zlatko-duric-juicebar_75hF_5zIp.jpg',
  },
  {
    key: 'sustainable-development',
    title: 'Sustainable Development',
    path: '/Amenities/sustainable-development/heart-dirt-in-hands_Li4DSMK5r.jpg',
  },
  {
    key: 'organic-farm',
    title: 'Organic Farm',
    path: '/vegtable_SEHv7lswzOf.jpg',
  },
  {
    key: 'spa',
    title: 'Spa',
    path: '/Amenities/spa/spa-rocks_pRnvaEgfs.jpg',
  },
];

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background-color: #f5f5f5;
  padding: 50px 0px 50px;
`;

const Text = styled.div`
  display: inline;
  color: white;
  position: absolute;
  bottom: 55px;
  left: 25px;
  z-index: 3;
  padding: 5px;
  background-color: rgb(58, 27, 73, 0.5);
  border-radius: 5px;
`;

const Amenities = ({ bg, items, height }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: items ? items.desktop : 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: items ? items.tablet : 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: items ? items.mobile : 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Container id='amenities' style={{ minHeight: height }} className={bg}>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>AMENITIES</h1>
        <div className='divider' />
      </div>
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
        containerClass='carousel-container'
        //removeArrowOnDeviceType={['tablet', 'mobile']}
        // deviceType={this.props.deviceType}
        // dotListClass='carousel-dot-list'
        //itemClass='carousel-item-padding-40-px'
      >
        {amenities.map((i) => {
          return (
            <div className='carousel-item' key={i.key}>
              <div className='carosel-overlay'>
                <ImageContext>
                  <IKImage
                    className='carousel-image'
                    path={i.path}
                    transformation={[
                      { width: 'auto', height: '450px', dpr: 'auto' },
                    ]}
                    // loading='lazy'
                  />
                </ImageContext>
              </div>
              <Text>
                <h4>{i.title}</h4>
                <Link to={`/${i.key}`}>
                  Read More <i className='fa fa-arrow-right' />
                </Link>
              </Text>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Amenities;
