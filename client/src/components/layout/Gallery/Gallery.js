import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FullScreenImage from './FullScreenImage';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const images = [
  { key: 0, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
  { key: 1, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
  { key: 2, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
  { key: 3, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
  { key: 4, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
  { key: 5, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
  { key: 6, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
  { key: 7, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
  { key: 8, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
  { key: 9, path: '/masakali_joglo_1_main_Cpampp_Mv.jpg' },
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
  font-size: 16px;
  color: white;
  :hover {
    cursor: pointer;
    font-weight: bold;
  }
`;
const Gallery = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [path, setPath] = useState(null);
  const [key, setKey] = useState(null);

  const handleClick = (direction = '', path = null, key = 0) => {
    if (direction === 'left') {
      if (key > 0) {
        setKey((key) => key - 1);
        alert(key);
      } else {
        setKey(0);
      }
    } else if (direction === 'right') {
      setKey((key) => key - 1);
    } else {
      setKey(key);
      setPath(path);
      setIsOpen(!isOpen);
    }
    return;
  };

  return (
    <Container>
      <FullScreenImage isOpen={isOpen} path={path} handleClick={handleClick} />
      <Header>
        <HeaderLink>Construction</HeaderLink>
        <HeaderLink>Surya Gladak</HeaderLink>
        <HeaderLink>Views</HeaderLink>
      </Header>
      <Images>
        {images.map((i) => {
          return (
            <span onClick={handleClick(null, i.path, i.key)} key={i.key}>
              <ImageContext>
                <IKImage
                  className='gallery-image'
                  path={i.path}
                  transformation={[{ width: 'auto', dpr: 'auto' }]}
                  loading='lazy'
                />
              </ImageContext>
            </span>
          );
        })}
      </Images>
    </Container>
  );
};

Gallery.propTypes = {};

export default Gallery;
