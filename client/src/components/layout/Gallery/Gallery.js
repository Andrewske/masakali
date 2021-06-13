import React, { useState } from 'react';
import styled from 'styled-components';
import FullScreenImage from './FullScreenImage';

import { underConstructionImages } from './galleryImages';
import { completedImages } from './galleryImages';
import { viewsImages } from './galleryImages';

import UnderConstruction from './UnderConstruction';
import Completed from './Completed';
import Views from './Views';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import FullScreenCarousel from './FullScreenCarousel';

import { SortCarousel } from './SortCarousel';

const imageSets = [
  { id: 'underConstruction', images: underConstructionImages },
  { id: 'completed', images: completedImages },
  { id: 'views', images: viewsImages },
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 90vw;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  height: 65px;
  width: 100vw;
  background-color: #3a1b49;
  z-index: 1;
`;

const Images = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const HeaderLink = styled.div`
  color: white;
  :hover {
    cursor: pointer;
    font-weight: bold;
  }
`;
const Gallery = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState(null);
  const [key, setKey] = useState(null);
  const [images, setImages] = useState(imageSets[0].images);
  const [carousel, setCarousel] = useState(null);
  const [type, setType] = useState('under-construction');

  const closeCarousel = () => {
    setIsOpen(false);
  };

  const changeImages = ({ type }) => {
    setType(type);
    //console.log(imageSets.filter((i) => i.id === type)[0].images);
    setImages(imageSets.filter((i) => i.id === type)[0].images);
  };

  const handleClick = (key) => {
    setCarousel(SortCarousel(images, key));
    setIsOpen(true);
  };

  const loadImages = () => {
    switch (type) {
      case 'under-construction':
        return <UnderConstruction handleClick={handleClick} />;
      case 'completed':
        return <Completed handleClick={handleClick} />;
      case 'views':
        return <Views handleClick={handleClick} />;
      default:
        return <div>No Images</div>;
    }
  };

  return (
    <Container>
      {/* <FullScreenImage isOpen={isOpen} path={path} handleClick={handleClick} /> */}
      <Header>
        <HeaderLink
          onClick={() => changeImages({ type: 'under-construction' })}
        >
          Under Construction
        </HeaderLink>
        <HeaderLink onClick={() => changeImages({ type: 'completed' })}>
          Completed
        </HeaderLink>
        <HeaderLink onClick={() => changeImages({ type: 'views' })}>
          Views
        </HeaderLink>
      </Header>
      {isOpen ? (
        <FullScreenCarousel images={carousel} close={closeCarousel} />
      ) : (
        <Images>{loadImages()}</Images>
      )}
    </Container>
  );
};

Gallery.propTypes = {};

export default Gallery;
