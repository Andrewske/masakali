import React, { useState } from 'react';
import Reviews from './Reviews';
import Amenities from './Amenities';

const descriptions = {
  surya: `Our largest villa is a warm and elegant choice with ample space to rest and recharge. It has an ensuite breakfast table and features a hand-carved outdoor dining table that can seat larger groups on the private patio. Inside you’ll find a luxury king-sized mattress with high-quality bedding as well as a couch that can serve as an additional bed for an additional guest.`,
  chandra: `One of our more popular villas for romantic getaways and honeymooners offers an enchanting sentiment. In addition to the luxury outdoor shower, this villa features a spacious and comfortable bath. A favorite place to relax is the outdoor hammock that hangs over the rice fields, with a perfect view of the stars at night. This villa also offers a work area with a beautiful antique desk for those who need it.`,
  jala: `This traditional Joglo villa is the perfect fit for a cozy stay. With personal charm and attention to detail, this alluring villa has an irresistible appeal. Jala offers a workstation with a large desk, comfy outdoor lounging areas, and a full private ensuite bathroom. The luxury bedding and linens offer a comfortable and restful sleep while the beautiful, handcrafted furniture and amenities will leave you in awe of the craftsmanship and detail.`,
  akasha: `Join us at Masakali Retreat just north of Ubud surrounded by the most astonishing landscape and rich culture. A true paradise. Our antique luxury villas offer the most blissful get away. Relax by your private infinity pool overlooking the beautiful Bali rice fields, jungle and mountains or find adventure in nearby Ubud. Equipped with kitchens. Spa services and meals available in private suites.`,
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
            content === 'amenities'
              ? 'villa-template-info-option active'
              : 'villa-template-info-option'
          }
          onClick={() => handleContentClick('amenities')}
        >
          Amenities
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
      {content === 'amenities' && (
        <span className='villa-template-info-content'>
          <Amenities villa={villa} />
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
