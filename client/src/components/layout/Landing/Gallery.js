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
    key: 'surya-gladak-lights',
    title: 'Surya Gladak One',
    path: '/surya-gladak-one-complete-with-lights_-U3E4CLrm.jpg',
  },
  {
    key: 'surya-bedroom',
    title: 'Surya Bedroom',
    path: '/surya-bedroom-complete_Ub1dCPnbu.jpeg',
  },
  {
    key: 'surya-bathroom-complete',
    title: 'Surya Bathroom',
    path: '/surya-bathroom-complete_sqpZL2NWz.jpeg',
  },
  {
    key: 'surya-gladak-complete-side',
    title: 'Surya Gladak Side',
    path: '/surya-gladak-complete-side_sm9uZTwpN.jpg',
  },
  {
    key: 'chandra-gladak-construction',
    title: 'Chandra Gladak',
    path: '/chandra-gladak-two-construction_gEvrp_9UB.jpeg',
  },
  {
    key: 'chandra-gladak-roof',
    title: 'Chandra Gladak Roof',
    path: '/chandra-gladak-two-building-roof_REMtylGq3V2.JPG',
  },
  {
    key: 'chandra-gladak-surya',
    title: 'Chandra Gladak Next To Surya',
    path: '/chandra-gladak-two-with-surya_pfos3hwDZ.jpeg',
  },
  {
    key: 'chandra-guesthouse-construction',
    title: 'Jala Guesthouse',
    path: '/jala-guesthouse-three-construction_KDk5I-Qlb.jpeg',
  },
];

const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0px 50px;
  background-color: #f5f5f5;
`;

const Item = styled.div`
  position: relative;
  height: 600px;
  max-width: 750px;
  margin: 0 auto;
`;

const Gallery = (props) => {
  return (
    <Container id='landing-gallery'>
      <div className='header'>
        <p>MASAKALI</p>
        <h1>Gallery</h1>
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
                    transformation={[{ width: '750px', dpr: 'auto' }]}
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
    </Container>
  );
};

Gallery.propTypes = {};

export default Gallery;
