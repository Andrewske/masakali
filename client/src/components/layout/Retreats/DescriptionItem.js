import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const DescriptionItem = ({
  heading,
  content,
  imgUrl,
  imgLeft,
  documentLink,
}) => {
  return (
    <div className={imgLeft ? 'description-item' : 'description-item reverse'}>
      <ImageContext>
        <IKImage
          className="description-image"
          path={imgUrl}
          transformation={[{ width: '1000', height: 'auto' }]}
          lqip={{ active: true }}
          loading={'lazy'}
        />
      </ImageContext>
      <div className="description-content">
        <h3>{heading}</h3>
        {content}
        {documentLink && documentLink}
      </div>
    </div>
  );
};

export default DescriptionItem;
