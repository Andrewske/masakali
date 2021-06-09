import React from 'react';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

import MasakaliLogo from '../../../img/masakali-home-logo.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import useWindowSize from '../../../utils/useWindowSize';

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

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Item = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  z-index: 3;
  position: absolute;
  // font-family: 'Dancing Script', cursive;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 500px;
  padding: 15px;
  z-index: 99;
`;

const images = [
  { key: 1, path: '/surya-front-night_JpkSeqJUB.jpg' },
  { key: 2, path: '/main-photo_p9l1NRPmw.jpg' },
  { key: 3, path: '/suzanne-pool_lh-LwDdb-.jpg' },
  { key: 4, path: '/pool-view_3wQpQqYjp.jpeg' },
  { key: 5, path: '/surya-bed_lbJwR5-g9.jpg' },
];

const Home = () => {
  const { width, height } = useWindowSize();

  return (
    <Container id='home'>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoplay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={1000}
        containerClass='home-gallery'
      >
        {images.map((d, i) => (
          <Item key={d.key}>
            <div>
              <ImageContext>
                <IKImage
                  className='background-image zoom'
                  path={d.path}
                  transformation={[
                    { height: height, width: 'auto', dpr: 'auto' },
                  ]}
                  loading='lazy'
                />
              </ImageContext>
            </div>
            <LogoContainer>
              <Logo src={MasakaliLogo} />
              {/* <h1 className='x-large'>Masakali Retreat</h1> */}
            </LogoContainer>
          </Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Home;
