import React, { useState } from 'react';
import styled from 'styled-components';

import {
  chandraImages,
  jalaImages,
  suryaImages,
  viewsImages,
  chandraConstructionImages,
  jalaConstructionImages,
} from './galleryImages';

import Chandra from './Images/Chandra';
import Jala from './Images/Jala';
import Surya from './Images/Surya';
import Views from './Images/Views';

import FullScreenCarousel from './FullScreenCarousel';
import Header from './Header';
import { SortCarousel } from './SortCarousel';

const imageSets = [
  { id: 'chandra', images: chandraImages },
  { id: 'jala', images: jalaImages },
  { id: 'surya', images: suryaImages },
  { id: 'views', images: viewsImages },
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 90vw;
`;

const Images = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Gallery = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState(imageSets[0].images);
  const [carousel, setCarousel] = useState(null);
  const [type, setType] = useState('views');

  const closeCarousel = () => {
    setIsOpen(false);
  };

  const changeImages = ({ type }) => {
    console.log('setType', type);
    setType(type);
  };

  const handleClick = (key) => {
    setCarousel(SortCarousel(images, key));
    setIsOpen(true);
  };

  const loadImages = () => {
    console.log(type);
    switch (type) {
      case 'chandra':
        return <Chandra handleClick={handleClick} />;
      case 'jala':
        return <Jala handleClick={handleClick} />;
      case 'surya':
        return <Surya handleClick={handleClick} />;
      case 'views':
        return <Views handleClick={handleClick} />;
      default:
        return <div>No Images</div>;
    }
  };

  return (
    <Container>
      <Header changeImages={changeImages} />
      {isOpen ? (
        <FullScreenCarousel images={carousel} close={closeCarousel} />
      ) : (
        <>
          <Images>
            <div className='header'>
              <p>MASAKALI</p>
              <h1>{type.toUpperCase()}</h1>
              <div className='divider' />
            </div>
            {loadImages()}
          </Images>
        </>
      )}
    </Container>
  );
};

Gallery.propTypes = {};

export default Gallery;
