import React, { useState } from 'react';

// import { getReviews } from '../../../actions/google';

const Reviews = ({ villa }) => {
  const [index, setIndex] = useState(0);

  const reviews = allReviews[villa] ?? null;

  const next = () => {
    index === reviews.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const prev = () => {
    index === 0 ? setIndex(reviews.length - 1) : setIndex(index - 1);
  };

  return (
    reviews && (
      <div className="review">
        <i
          className="icon icon-chevron-left"
          onClick={() => prev()}
        />

        <div className="review-info">
          <div className="review-info-heading">
            <img
              className="review-image"
              src={reviews[index].imgUrl}
              alt={reviews[index].name}
            />
            <span className="review-info-heading-text">
              <span className="review-name">{reviews[index].name}</span>
              <span className="review-date">{reviews[index].date}</span>
            </span>
          </div>

          {/* <span className='review-rating'>
          {[...Array(reviews[index].rating)].map((star, i) => (
            <span className='star' key={`star-${i}`}>
              &#9733;
            </span>
          ))}
        </span> */}
          <span className="review-text">{reviews[index].text}</span>
        </div>
        <i
          className="icon icon-chevron-right"
          onClick={() => next()}
        />
      </div>
    )
  );
};

export default Reviews;

var allReviews = {
  surya: [
    {
      key: 0,
      name: 'Alisha',
      date: 'March 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/ea2db0f9-784b-408c-a156-1319577072ce.jpg?im_w=240',
      text: `From the moment we arrived to when we left the experience was faultless. It reflected every previous review and the views were even more spectacular than the photos.

      The real standout was the customer service from Ira and all of the staff. They were on hand at any moment to ensure that we had everything we needed. My partner had arranged some special birthday surprises for me, which he had been arranging prior to us even arriving in Bali. It really felt like they had genuine passion to make every moment unforgettable and we felt like we were the only guests even though we were not.
      
      I would highly recommend this accommodation to anyone who is looking for a one of a kind experience when staying in Ubud.`,
    },
    {
      key: 1,
      name: 'Ruby',
      date: 'February 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/d79b7549-9085-432c-829a-da119053ea88.jpg?im_w=240',
      text: `We had a wonderful stay at Masakali’s. Everyone was super helpful and friendly, the villa is beautiful and the surroundings very peaceful. It was amazing waking up with that view from our bed!`,
    },
    {
      key: 2,
      name: 'Tessa',
      date: 'February 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/e7084c48-8a59-4441-9e4d-1533e26021f2.jpg?im_w=240',
      text: `This was the very last accommodation I stayed in, on a 6 month around-the-world trip, and it was everything I needed and more! I absolutely loved my stay here. Not only is the villa comfortable, gorgeous, and exactly as the listing showed, but it was secluded enough to feel like you're in the wilderness, which was exactly what I was looking for. Swimming at night, I got to see lightning bugs on the rice terraces, it was incredible. I felt so safe here. The best part of my stay was the staff - everyone was so amazing! Ira and I communicated via text, and she was super quick to respond - the meals were all perfect, the wine was divine, I wish I could have stayed longer. I will, without a doubt, be back for another stay.`,
    },
    {
      key: 3,
      name: 'Malcolm',
      date: 'January 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/a5903f08-a878-401c-ab2b-ee2e17e71945.jpg?im_w=240',
      text: `It was our first time in Bali and arriving is such a wonderful place definetly made us want to come back. Masakali is probably the most beautiful place I had the opportunity to stay in. The place itself is gorgeous, the view (especially during the sunset) is magic, and the atmosphere is so peaceful. The staff is so nice and available, they did everything they could to make us have the time of our lives. I would 1000% recommend this place.`,
    },
    {
      key: 4,
      name: 'Jennifer',
      date: 'January 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/b9111221-d3fc-4581-8bbf-a77b6cae03ea.jpg?im_w=240',
      text: `We stayed in Bali for 10 days, and Masakali was one of our favorites. We have great memories here. Freya was a wonderful host. We were greeted with amazing hospitality, and we were met with beautiful views that will forever be in our memories ❤️.`,
    },
  ],
  chandra: [
    {
      key: 0,
      name: 'Louise',
      date: 'May 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/1c668021-3039-4eab-a84f-eb2b913e62d6.jpg?im_w=240',
      text: `We had a wonderful stay at Masakali. A great escape from the busy Ubud but with beautiful nature (ricefields, jungle, water) closeby. Ira took great care of us and is there to answer all your questions. The staff goes above and beyond to give you a great time. One should definitely go here. Thank you Masakli🙏`,
    },
    {
      key: 1,
      name: 'Caitlin',
      date: 'May 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/e0a61792-70ce-4e2b-bbde-b2b07d04b300.jpg?im_w=240',
      text: `This place was extremely beautiful with a very warm and welcoming staff. Always willing to help you out and there is also an adorable cat! Exactly like the photos!`,
    },
    {
      key: 2,
      name: 'Tariq',
      date: 'March 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/483741e1-7468-43dd-afa1-4a1da36bf742.jpg?im_w=240',
      text: `Worth the price. Location is far from airport but so beautiful. In the middle of Ubud near lots of activities. We asked they pick us up from hotel and was probably the best option. Arrived to hotel with Kantu waiting for us with our name on sign. He was very nice and friendly. Kantu took us the next day to temples and other sites we wanted to see for very reasonable price. The place overall was very nice and romantic getaway for couples. Thank you to all the staff for being so warm and welcoming. Staff hospitality was top notch!`,
    },
    {
      key: 3,
      name: 'Shania',
      date: 'March 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/4b87f0b8-743b-47b4-9f6d-57da0e492730.jpg?im_w=240',
      text: 'Had a beautiful experience at Masakali, Ira & her team are extremely welcoming and make you feel right at home! The property is immaculate & very clean, the super comfy bed & shower were a highlight for me! The property is exactly what it looks like in the pictures (even better in real life!) Ira was extremely responsive & helpful & we can’t thank her enough :) would definitely recommend Masakali to everyone and we hope to stay again in the future!',
    },
    {
      key: 4,
      name: 'https://a0.muscache.com/im/pictures/user/88c185a9-0d4b-4cc9-bd3e-0a8d42d3bb23.jpg?im_w=240',
      date: 'March 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/78ada0c8-f842-466c-a082-747c3dac49a8.jpg?im_w=240',
      text: `Masakali Retreat is a beautiful and intimate place to stay if you’re a couple, a bonus if you’re on your honeymoon/anniversary! Suzanne the owner was very responsive and gave a lot of local suggestions and Ira, the villa manager was just as helpful with all our request and was quick to deliver! We felt really taken care of at Masakali Retreat and will definitely come back and suggest to others of this beautiful, remote villa!`,
    },
  ],
  jala: [
    {
      key: 0,
      name: 'Edgar',
      date: 'May 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/a6cc3fa5-9026-4308-846f-ba811dd9fbb0.jpg?im_w=240',
      text: `We stayed 3 nights at Masakali retreat and had such a great stay. All the staff was very friendly and responsive, and the nature surrounding the villa is amazing.
      I would definitely recommend if you are looking for a peaceful place, close to nature.
      Special thanks to the staff who sent us a driver, after we forgot some clothes, to bring it us back.`,
    },
    {
      key: 1,
      name: 'Ruby',
      date: 'April 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/f63bd894-406f-4ba8-9be5-77d8b5fe76d7.jpg?im_w=240',
      text: `Maskali felt like a paradise on earth for us. I started reaching out to Ira for arrangements a month before my stay and she was always so responsive and accommodating. The villa was beautiful and so peaceful, and was beyond our expectations. Thank you to Ira and her team of staff for being so welcoming to us. Would definitely recommend staying here!`,
    },
    {
      key: 2,
      name: 'Heidi',
      date: 'January 2023',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/e479eba6-f9d9-459d-ad40-d35bb8d1ddd1.jpg?im_w=240',
      text: `We were absolutely amazed by this beautiful little space. Right in peaceful nature, comfy bed, quiet nights, away from the hustle and bustle of Ubud but close enough for daily trips. We enjoyed a relaxing massage in our bungalow, went canyoning,rafting and atv riding - which all can be organised through Ira.(the property manager) . The staff was super friendly and went above and beyond for us. The food at Masakali is delicious and there’s also the amazing Warung Umah around the corner.
      To sum up our stay: we loved it and can definitely recommend to stay here!`,
    },

    {
      key: 3,
      name: 'Alexander',
      date: 'November 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/a7f8029f-1bb9-464f-adf3-e657ebf42f47.jpg?im_w=240',
      text: `I love this place so much that I stayed for another night. I stayed at Chandra on my first day and Jala for 2 days + extra day. This place left me speechless from day 1 until checkout. The place is stunning and even better than the pictures shown here. The joglo houses were masterfully crafted as well as every details inside and out of the house. I would also consider each of the staff here as an asset to making our stay the best it could possibly be. 
      This is luxury, serenity, away from chaos of kuta. The best staff, the food was great as well. I’ve had the best sleep of my life here. It’s been a pleasure Suzanne and Ira, the best of luck and see you soon`,
    },
    {
      key: 4,
      name: 'Frances',
      date: 'November 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/745dc931-b8ed-41a2-8132-d204d06bcc6d.jpg?im_w=240',
      text: `My stay at Malasaki was wonderful! I was feeling quite unwell from heatstroke, but I was so well looked after, I still enjoyed my stay very much :) Ira and Suzanne made sure I had everything I needed and went above and beyond, all the staff were so friendly and accommodating. I'd be back in a heartbeat, beautiful villa and view which surpassed my expectations! Incredible view of Mt Batur and rice paddies. So peaceful, super clean, extensive information on check in and available before as well, and very comfortable bed. I couldn't fault anything. I will hopefully be back in future, thank you XX`,
    },
  ],
};
