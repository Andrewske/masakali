import React, { useMemo } from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import useHover from '../../../utils/useHover';
import { useNavigate } from 'react-router-dom';

const Villas = () => {
  const [suryaRef, isSuryaHovered] = useHover();
  const [chandraRef, isChandraHovered] = useHover();
  const [jalaRef, isJalaHovered] = useHover();
  const navigate = useNavigate();

  const villaDetails = useMemo(
    () => [
      {
        name: 'surya',
        ref: suryaRef,
        path: '/surya-front-night_JpkSeqJUB.jpg',
        isHovered: isSuryaHovered,
        details: `Warm and elegant private pool villa, provides you with ample space
        to rest and recharge. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.`,
      },
      {
        name: 'chandra',
        ref: chandraRef,
        path: '/surya-front-night_JpkSeqJUB.jpg',
        isHovered: isChandraHovered,
        details: `Warm and elegant private pool villa, provides you with ample space
        to rest and recharge. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.`,
      },
      {
        name: 'jala',
        ref: jalaRef,
        path: '/surya-front-night_JpkSeqJUB.jpg',
        isHovered: isJalaHovered,
        details: `Warm and elegant private pool villa, provides you with ample space
        to rest and recharge. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.`,
      },
    ],
    [
      suryaRef,
      isSuryaHovered,
      chandraRef,
      isChandraHovered,
      jalaRef,
      isJalaHovered,
    ]
  );

  return (
    <div className='villas-container'>
      <h2>Villas</h2>
      <span className='villas-text'>
        Each room is equipped with a private infinity pool overlooking the
        Balinese rice fields, a private kitchenette fully stocked with cooking
        ware and utensils, a luxury outdoor shower, with spa and meal services
        available upon request.
      </span>
      <span className='villas-images'>
        {villaDetails.map((villa) => (
          <span className='villas-img' ref={villa.ref} key={villa.name}>
            <ImageContext>
              <IKImage
                path={villa.path}
                transformation={[
                  { height: '400px', width: '400px', dpr: 'auto' },
                ]}
                lqip={{ active: true }}
                loading='lazy'
              />
            </ImageContext>
            <span
              className={
                villa.isHovered ? 'hover-details active' : 'hover-details'
              }
            >
              <h2>{villa.name}</h2>
              <p>{villa.details}</p>
              <button
                className='button purple'
                onClick={() => navigate(`/villas?villa=${villa.name}`)}
              >
                View Details
              </button>
            </span>
          </span>
        ))}
      </span>
    </div>
  );
};

export default Villas;
