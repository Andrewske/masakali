import React from 'react';
import ImageContext from '../../../utils/ImageContext';
import { IKImage } from 'imagekitio-react';

const Yoga = () => {
    return (
        <div id='yoga' className='extras-container'>
            <span className='extras-img'>
                <ImageContext>
                    <IKImage
                        path='/Yoga5L_dWPdoxvcj.jpg?updatedAt=1712104416567'
                        transformation={[{ height: '400px', width: '400px', dpr: 'auto', fo: 'auto' }]}
                        lqip={{ active: true }}
                        loading='lazy'
                    />
                </ImageContext>
            </span>

            <span className='extras-details'>
                <span className='text'>
                    <h2>Yoga</h2>
                    <span>
                        At our serene yoga shala, we invite you to embrace tranquility and balance through our thoughtfully scheduled yoga sessions. Immerse yourself in the spiritual essence of Bali with our Morning Flow class at 8:15 am, a perfect way to awaken and energize your body and spirit with the first light of day. As dusk settles, join us for our Evening Flow class at 6:00 pm, designed to help you unwind and reflect, promoting a sense of peace as the day draws to a close. Both classes are led by experienced instructors who integrate the beauty of Balinese nature and philosophy into their teaching, offering a harmonious blend of local tradition and yoga practice. These sessions are a complimentary part of your stay, allowing you to enhance your wellness journey in the privacy and comfort of our yoga shala, set against the backdrop of Bali's breathtaking landscapes.
                    </span>
                </span>
            </span>
        </div>
    );
};

export default Yoga;
