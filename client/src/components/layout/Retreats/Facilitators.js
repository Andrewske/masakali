import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import facebook from '../../../img/facebook.png';
import { facilitatorData } from './facilitatorData';

const Facilitators = () => {
  return (
    <div className="facilitators-container">
      <h2>Meet Your Facilitators</h2>

      {Object.entries(facilitatorData).map(([id, data]) => (
        <div
          className="facilitator"
          key={id}
        >
          <div className="details">
            <ImageContext>
              <IKImage
                className="facilitator-image"
                path={data.imgUrl}
                transformation={[{ height: '150', width: '150', dpr: 'auto' }]}
                lqip={{ active: true }}
                loading={'lazy'}
              />
            </ImageContext>
            <p>{data.name}</p>
            <p>{data.focus}</p>
            <a
              href={data.facebookUrl}
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={facebook}
                className="icon"
                alt=""
              />
            </a>
          </div>
          {data.bio}
        </div>
      ))}
    </div>
  );
};

export default Facilitators;
