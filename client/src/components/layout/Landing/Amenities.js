import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

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
    path: '/amenities-yoga-teacher-training_A3h6udN9A.jpg',
  },
  {
    key: 'organic-beauty-products',
    title: 'Organic Beauty Products',
    path: '/amenities-organic-beauty-products_LF76dAzQL.jpg',
  },
  {
    key: 'foundation',
    title: 'Foundation',
    path: '/amenities-foundation_6cO3EH8iDA4.jpg',
  },
  {
    key: 'cafe-juice-bar',
    title: 'Cafe Juice Bar',
    path: '/amenities-cafe-juice-bar_x_JQWigHC.jpg',
  },
  {
    key: 'sustainable-development',
    title: 'Sustainable Development',
    path: '/amenities-sustainable-development_oCZGauZwv.jpg',
  },
];

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background-color: #f5f5f5;
  padding: 50px 0px 50px;
`;

const Title = styled.div`
  margin: 0 auto;
`;

const Header = styled.div`
  margin: 0 auto;
`;

const Divider = styled.div`
  margin: 0 auto;
  border-bottom: solid black 3px;
  width: 100px;
  margin-bottom: 15px;
`;

const Amenities = (props) => {
  return (
    <Container id='amenities'>
      <Title>
        <p>MASAKALI</p>
      </Title>
      <Header className='sectionHeader'>
        <h1>AMENITIES</h1>
      </Header>
      <Divider />
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
                    transformation={[{ width: 'auto', dpr: 'auto' }]}
                    // loading='lazy'
                  />
                </ImageContext>
              </div>
              <div className='carousel-text'>
                <h3>{i.title}</h3>
                <p>
                  Read More <i className='fa fa-arrow-right' />
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

Amenities.propTypes = {};

export default Amenities;
