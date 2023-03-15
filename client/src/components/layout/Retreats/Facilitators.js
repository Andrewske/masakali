import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';
import facebook from '../../../img/facebook.png';

const Facilitators = () => {
  return (
    <div className="facilitators-container">
      <h2>Meet Your Facilitators</h2>

      <div className="facilitator">
        <div className="details">
          <ImageContext>
            <IKImage
              className="facilitator-image"
              path={
                '/Retreats/Shanti/EMBODIMENT_YeP1KRu7Qo.webp?updatedAt=1678838432719'
              }
              transformation={[{ height: '150', width: '150', dpr: 'auto' }]}
              lqip={{ active: true }}
              loading={'lazy'}
            />
          </ImageContext>
          <p>MAYA - Yoga</p>
          <a
            href="https://www.facebook.com/"
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
        <div className="bio">
          <p>
            <strong>Maya</strong> is a qualified Reiki Master, Yoga
            Practitioner, Circle Facilitator and Cacao Guardian.
          </p>
          <p>
            “On my path to understand ‘who I am’ I have learnt that I am a
            mult-dimensional being, I am a dreamer, a learner and a teacher!
          </p>
          <p>
            I started my self-development journey to deeply understand my heart,
            body, mind and soul. This road has taken me through a multitude of
            experiences. I’ve studied the human body, the brain and how
            important our emotions and feelings are to our overall well being.
            In this process I have unlayered my heart, mind and body and
            discovered my true-self!
          </p>
          <p>
            Through everything that I’ve been learning I created Maya Guardian
            Healing to serve, guide and help people to find the connection
            between mind, body and soul by unlayering the repetitive patterns
            and connecting with their true selves.”
          </p>
          <p>
            Mixing her Yoga qualifications and experience that she has gained
            through her self development journey, she carefully laces her yoga
            classes with deep self-awareness, connecting the breath, mind, body,
            and soul.
          </p>
          <p>
            During the class, you will experience a deep connection with your
            body, understand more about yourself, and release and unwind in a
            fun and joyful way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilitators;
