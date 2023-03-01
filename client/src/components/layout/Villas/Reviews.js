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
      name: 'Isabella',
      date: 'December 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/4f5338fa-49ca-4fb1-b81f-32aa268a9f5c.jpg?im_w=240',
      text: 'Our stay at Masakali could not have been better. The pictures don’t justify how beautiful the villa was, or the incredible view it had of the rice fields. The entrance was just as beautiful… the whole environment couldn’t have been more calming and scenic. The villa itself was very clean and had an amazing outdoor shower. The staff were incredibly responsive and could not have treated us better. They went above and beyond, bringing us breakfast every morning and even arranging taxis wherever we wanted to go. This is the best accomodation I have ever stayed in!!!',
    },
    {
      key: 1,
      name: 'Jason',
      date: 'November 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/fbdc893b-2563-4baa-9226-865ac368c2ed.jpg?im_w=240',
      text: 'We had an amazing stay at Masakali. Would recommend to anyone. Looks exactly like the pictures. Located perfectly outside of but not too far from the main city center. Natural beauty of the area of the retreat and handcraftsmanship of the villas is stunning. But, the best part of everything was the friendliness of and care that the entire staff provides its guests. They truly went above and beyond.',
    },
    {
      key: 2,
      name: 'Betül',
      date: 'August 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/191de0d8-d204-42c0-9a79-da7f99957bbf.jpg?im_w=240',
      text: 'Definitely the right place if you want to spend a dreamy time and experience paradise on earth. All of the employees are very concerned, very hospitable. thanks for everything',
    },
    {
      key: 3,
      name: 'Rebecca',
      date: 'June 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/446cbc73-20f5-47bc-a267-f8da1a876de8.jpg?im_w=240',
      text: 'SIMPLY SPECTACULAR! This was the most incredible place I have ever had the pleasure of spending a few nights at! I hardly know where to begin, every aspect of this incredible place has been so thoughtfully considered to make your stay feel like a dream. The staff are incredible, so friendly, warm and helpful, the massage in-villa was absolutely amazing, the food served in your villa is scrumptious and the view is unbelievable. If you need to treat yourself, rejuvenate, contemplate the world of natural beauty, you simply must stay here for a personal sanctuary stay. I am immensely grateful to experience my too-short stay here!',
    },
    {
      key: 4,
      name: 'Milot',
      date: 'June 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/7726f526-630c-4737-8c07-091df884e083.jpg?im_w=240',
      text: 'We couldn’t have been happier to have chosen this place. Our only regret was that we were only able to book one night. The staff was super receptive and the in house massage we received was done by a very skilled massage staff and the kitchen staff was exceptionally accommodating. We look forward to booking here again.',
    },
  ],
  chandra: [
    {
      key: 0,
      name: 'Briana',
      date: 'December 2022',
      imgUrl:
        'https://a0.muscache.com/im/users/4516977/profile_pic/1430938726/original.jpg?im_w=240',
      text: `If you are on your eat, pray, love trip or want to retreat into nature, 
      Masakali is the place to be. It’s surrounded by rice fields and is a completely private Villa with a pool and view. The perfect place to relax and ground yourself. The staff at Masakali really makes this place. They take such good care of you and are very helpful. You can order breakfast, lunch or dinner to your room, massages, a flower bath, laundry service and they will help plan out your day and transportation if needed. Just note that if you plan to use grab or gojek, it is a 20 minute drive/scooter ride out of the main part of ubud. Thank you to the entire team at Masakali! Can’t wait to come back.`,
    },
    {
      key: 1,
      name: 'Skyler',
      date: 'November 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/a2930fb0-ddbe-4351-82d9-278d98ebdcb7.jpg?im_w=240',
      text: `Absolutely gorgeous property! We enjoyed our stay and highly recommend. Really thoughtfully designed villa with obvious attention to detail. I honestly don't know what else you could want for a villa in the jungle hills/rice paddies of Bali. The staff were amazing and helped us with everything we needed. I only wish we stayed longer.`,
    },
    {
      key: 2,
      name: 'Raphaëlle',
      date: 'July 2022',
      imgUrl:
        'https://a0.muscache.com/im/users/31137854/profile_pic/1428931220/original.jpg?im_w=240',
      text: `This place is amazing, just a paradise in the middle of a beautiful nature. The staff is incredible : full of kindness and attention.
      A special thanks to Ira, always here for us.
      And of course Kantu, the best driver/tour operator.
      Thanks you to everybody, we hope to come back one day.
      Suksma 🙏`,
    },
    {
      key: 3,
      name: 'Karolína',
      date: 'July 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/fc11ea05-8cff-43cb-af61-9f39f123806f.jpg?im_w=240',
      text: 'This place was just amazing. From start to finish. Me and my husband travel a lot. We’ve visited many places around the world but this experience was far the best of all. So peacful place with unbelievable sights. Direct view to incredible ricefields and absolutely perfect staff members made our stay unforgettable. We hope to come back someday and relived one more time! Karolina & Petr',
    },
    {
      key: 4,
      name: 'Beatriz',
      date: 'July 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/78ada0c8-f842-466c-a082-747c3dac49a8.jpg?im_w=240',
      text: `Me and my partner stayed at Chandra Villa for two nights. This is a wonderful place to stay. The beautiful Villa is really well decorated, with details that make it very special. The room is very comfortable and the toilet has a traditional balinese shower and a bathtub, where you can enjoy a warm flower bath. Outside, there's a great swimming pool and a net to chill and enjoy the stunning view to the rice fields. During our stay, we had all our meals there and the food was always delicious (specially the pasta pesto - our favourite).

      Overall, our stay was a dream thanks to Suzanne, Ira and all the lovely staff!`,
    },
  ],
  jala: [
    {
      key: 0,
      name: 'Frances',
      date: 'November 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/745dc931-b8ed-41a2-8132-d204d06bcc6d.jpg?im_w=240',
      text: `My stay at Malasaki was wonderful! I was feeling quite unwell from heatstroke, but I was so well looked after, I still enjoyed my stay very much :) Ira and Suzanne made sure I had everything I needed and went above and beyond, all the staff were so friendly and accommodating. I'd be back in a heartbeat, beautiful villa and view which surpassed my expectations! Incredible view of Mt Batur and rice paddies. So peaceful, super clean, extensive information on check in and available before as well, and very comfortable bed. I couldn't fault anything. I will hopefully be back in future, thank you XX`,
    },
    {
      key: 1,
      name: 'Michael',
      date: 'September 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/c5e39c12-cd17-49b2-a1cb-7e879fd8a392.jpg?im_w=240',
      text: `This is the best place we stayed during our stay in Bali. We love everything about the place especially the interior design, location, pool, food and the environment. We love the fact that the place has kitchen where you can cook your food. The staffs are so accommodating and warm. The host is very passionate and responsive. If you want to have a very peaceful and marvelous then book this accommodation for more than two nights because one day isn’t enough. We had sepanx after leaving the place because it really felt like home even we just stay for a night so we highly suggest to book at least three days or more. We will definitely go back and book this place for a week!`,
    },
    {
      key: 2,
      name: 'Heidi',
      date: 'May 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/d6cce43c-13ce-4a3b-8644-179a74b6570c.jpg?im_w=240',
      text: `If you are looking for a peaceful place close to nature stay at; this is the place to be! The resort is quiet and gives you the perfect opportunity to relax and enjoy the beautiful scenery.

      The room was very clean and everything was exactly as in the pictures. If you prefer to cool yourself it’s possible in a small kitchen in the front which includes everything you need. The bathroom was very nice and clean as well. Since the villa is in the middle of rice paddies there are some insects (as can be expected) but the villa has everything you need from mosquito spray to the in-scents to keep the insects away.
      
      The communictaion with the hist was effortless and everything from check-in to check-out went very smoothly. The staff the resort is amazing: very helpful and friendly. They make sure you have eberything you need. I came with my dog and they even helped me to buy some food for her as well.
      
      Will definitely be coming back soon again and wpuld reccommend staying here for anyone who is looking for a super relaxing and peaceful stay.`,
    },

    {
      key: 3,
      name: 'Kirsty',
      date: 'July 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/ccfda87c-0570-4c64-924c-a250abeb9e65.jpg?im_w=240',
      text: 'We loved our stay, was very quite & relaxing, beautiful area. Friendly helpful staff, lush gardens, cosy bed & we loved the traditional joglo building. Working rice fields right next door. Close enough to ride on the bike to Ubud for a day trip.',
    },
    {
      key: 4,
      name: 'Vincent',
      date: 'June 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/bfc26c3e-684c-49b7-b51c-5647e29a7be9.jpg?im_w=240',
      text: `Excellent little villa, ideal for single travellers or a couple. Beautiful traditional design with careful thought into all the lovely little details. The use of timber everywhere gives an amazing effect and separates this place from the usual boring concrete villas.
      Wonderful private pool overlooking the rice fields and jungle. Staff are kind, friendly and provide an excellent service if you want to order food and drinks.
      We had such a nice time here we upgraded to the larger villa 'Surya' next door!`,
    },
  ],
};
