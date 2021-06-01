import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const duration = 500;

const backgroundStyle = {
  transition: `width ${duration}ms`,
  transition: `height ${duration}ms`,
  transition: `opacity ${duration}ms`,
};

const backgroundTransitionStyles = {
  entering: { width: 0, height: 0, opacity: 0, zIndex: -1 },
  entered: { width: '100vw', height: '100vh', opacity: 1, zIndex: 99 },
  exiting: { width: '100vw', height: '100vh', opacity: 1, zIndex: 99 },
  exited: { width: 0, height: 0, opacity: 0, zIndex: -1 },
};

const imageStyle = {
  transition: `opacity ${duration}ms`,
};

const imageTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

const Container = styled.div`
  background: rgb(0, 0, 0, 0.7);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  position: fixed;

  margin: 0 auto;
  padding-top: 20px;
  overflow: hidden;
`;

const Image = styled.div`
  max-height: 600px;
  margin: 0 auto;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 3;
`;

const FullScreenImage = ({ isOpen, handleClick, path }) => {
  const photoRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (leftArrowRef.current && leftArrowRef.current.contains(event.target)) {
        handleClick('left');
      } else if (
        rightArrowRef.current &&
        rightArrowRef.current.contains(event.target)
      ) {
        handleClick('right');
      } else if (photoRef.current && !photoRef.current.contains(event.target)) {
        handleClick();
      }
    }

    if (isOpen) {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [photoRef, isOpen]);

  return (
    <Transition in={isOpen} timeout={duration}>
      {(state) => (
        <Container
          style={{ ...backgroundStyle, ...backgroundTransitionStyles[state] }}
        >
          <Transition in={isOpen} timeout={duration}>
            {(state) => (
              <Image
                ref={photoRef}
                style={{ ...imageStyle, ...imageTransitionStyles[state] }}
              >
                <div className='gallery-style'>
                  <span ref={leftArrowRef}>
                    <i className='fas fa-angle-left gallery-arrow'></i>
                  </span>
                  <ImageContext>
                    <IKImage
                      className='gallery-image-full'
                      path={path}
                      transformation={[{ width: 'auto', dpr: 'auto' }]}
                      loading='lazy'
                    />
                  </ImageContext>
                  <span ref={rightArrowRef}>
                    <i className='fas fa-angle-right gallery-arrow'></i>
                  </span>
                </div>
              </Image>
            )}
          </Transition>
        </Container>
      )}
    </Transition>
  );
};

FullScreenImage.propTypes = {};

export default FullScreenImage;
