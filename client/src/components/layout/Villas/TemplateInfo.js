import React, { useState } from 'react';
import Reviews from './Reviews';

const TemplateInfo = ({ villa }) => {
  const [content, setContent] = useState('description');
  const handleContentClick = (name) => {
    setContent(name);
  };
  return (
    <div className='villa-template-info'>
      <span className='villa-template-info-options'>
        <span
          className={
            content === 'description'
              ? 'villa-template-info-option active'
              : 'villa-template-info-option'
          }
          onClick={() => handleContentClick('description')}
        >
          Description
        </span>
        <span
          className={
            content === 'ammenities'
              ? 'villa-template-info-option active'
              : 'villa-template-info-option'
          }
          onClick={() => handleContentClick('ammenities')}
        >
          Ammenities
        </span>
        <span
          className={
            content === 'reviews'
              ? 'villa-template-info-option active'
              : 'villa-template-info-option'
          }
          onClick={() => handleContentClick('reviews')}
        >
          Reviews
        </span>
      </span>
      {content === 'description' && (
        <span className='villa-template-info-content'>
          Surya Villa is equipped with a king-size luxury mattress and a sofa.
          Look forward to a serene outdoor view as you plunge into your private
          infinity pool and listen to the gentle breeze of Bali.
        </span>
      )}
      {content === 'ammenities' && (
        <span className='villa-template-info-content'>
          These are our ammenities
        </span>
      )}
      {content === 'reviews' && (
        <span className='villa-template-info-content'>
          <Reviews villa={villa} />
        </span>
      )}
    </div>
  );
};

export default TemplateInfo;
