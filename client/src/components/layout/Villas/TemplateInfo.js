import React, { useState } from 'react';
import Reviews from './Reviews';

const descriptions = {
  surya: `Our largest villa is a warm and elegant choice with ample space to rest and recharge. It has an ensuite breakfast table and features a hand-carved outdoor dining table that can seat larger groups on the private patio. Inside you’ll find a luxury king-sized mattress with high-quality bedding as well as a couch that can serve as an additional bed for an additional guest.`,
  chandra: `One of our more popular villas for romantic getaways and honeymooners offers an enchanting sentiment. In addition to the luxury outdoor shower, this villa features a spacious and comfortable bath. Be sure to ask about our special flower petal bath for a romantic night with your partner. One of the favorite places to relax is the outdoor hammock that hangs over the rice fields, with a perfect view of the stars at night. This villa also has a work area with a comfortably sized desk, as well as a cozy ottoman where you can read a book or relax.`,
  jala: `This traditional joglo villa is the perfect fit for a cozy stay. With a personal charm and attention to detail, this alluring villa has its own irresistible appeal. Jala offers a workstation with a large desk, comfy outdoor lounging areas, and a full private ensuite bathroom. The luxury bedding and linens offer a comfortable and restful sleep while the beautiful, handcrafted furniture and amenities will leave you in awe of the craftsmanship and detail.`,
};

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
          {descriptions[villa]}
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
