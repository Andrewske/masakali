import React, { useState } from 'react';

// import { getReviews } from '../../../actions/google';

const Reviews = ({ villa }) => {
  const [index, setIndex] = useState(0);

  const reviews = allReviews[villa];

  const next = () => {
    index === reviews.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const prev = () => {
    index === 0 ? setIndex(reviews.length - 1) : setIndex(index - 1);
  };

  // useEffect(() => {
  //   if (!reviews) getReviews();

  //   return () => getReviews();
  // }, [reviews, getReviews]);

  return (
    <div className='review'>
      <i className='icon icon-chevron-left' onClick={() => prev()} />

      <div className='review-info'>
        <div className='review-info-heading'>
          <img
            className='review-image'
            src={reviews[index].imgUrl}
            alt={reviews[index].name}
          />
          <span className='review-info-heading-text'>
            <span className='review-name'>{reviews[index].name}</span>
            <span className='review-date'>{reviews[index].date}</span>
          </span>
        </div>

        {/* <span className='review-rating'>
          {[...Array(reviews[index].rating)].map((star, i) => (
            <span className='star' key={`star-${i}`}>
              &#9733;
            </span>
          ))}
        </span> */}
        <span className='review-text'>{reviews[index].text}</span>
      </div>
      <i className='icon icon-chevron-right' onClick={() => next()} />
    </div>
  );
};

export default Reviews;

var allReviews = {
  surya: [
    {
      key: 0,
      name: 'Betül',
      date: 'August 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/191de0d8-d204-42c0-9a79-da7f99957bbf.jpg?im_w=240',
      text: 'Definitely the right place if you want to spend a dreamy time and experience paradise on earth. All of the employees are very concerned, very hospitable. thanks for everything',
    },
    {
      key: 1,
      name: 'Rebecca',
      date: 'June 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/446cbc73-20f5-47bc-a267-f8da1a876de8.jpg?im_w=240',
      text: 'SIMPLY SPECTACULAR! This was the most incredible place I have ever had the pleasure of spending a few nights at! I hardly know where to begin, every aspect of this incredible place has been so thoughtfully considered to make your stay feel like a dream. The staff are incredible, so friendly, warm and helpful, the massage in-villa was absolutely amazing, the food served in your villa is scrumptious and the view is unbelievable. If you need to treat yourself, rejuvenate, contemplate the world of natural beauty, you simply must stay here for a personal sanctuary stay. I am immensely grateful to experience my too-short stay here!',
    },
    {
      key: 2,
      name: 'Milot',
      date: 'June 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/7726f526-630c-4737-8c07-091df884e083.jpg?im_w=240',
      text: 'We couldn’t have been happier to have chosen this place. Our only regret was that we were only able to book one night. The staff was super receptive and the in house massage we received was done by a very skilled massage staff and the kitchen staff was exceptionally accommodating. We look forward to booking here again.',
    },
    {
      key: 3,
      name: 'Felix',
      date: 'June 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/c955181d-ee0e-4c3a-a17c-2ba54175ed21.jpg?im_w=240',
      text: 'It was a great stay, we had rented a scooter through the Masakali retreat and it was available within 20 minutes! Masakali Retreat is located just 20 minutes by scooter from ubud and other adventures like buggie tours, makes it a great hub to start any tour. You really live in the jungle and feel it with every breath you take, it is truely amazing and so much fun! It is super clean but dont forget, its in the jungle and the shower is basically outside, so is the living room, as there are open windows that have no glass and therefore cant be shut... and thats why we loved it!',
    },
    {
      key: 4,
      name: 'Olivia',
      date: 'June 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/5b8e15b8-9a44-47ac-a544-91f93b85c184.jpg?im_w=240',
      text: 'We absolutely loved this villa! The open area and wonderful view really encapsulated Bali and the nature experience, making this a very relaxing and enjoyable part of our Bali trip. The outdoor space, the bedroom, and the bathroom were all well-kept and high quality, and the friendly staff were accommodating of any requests. The villa is more remote, which was exactly what we were looking for with this stay. As a result, restaurants and convenience stores were not walkable, but the villa offered a driver as well as motorbikes or bicycles. We mostly ate the food prepared by the hotel, and it was great and a good price! If I ever make it back to Ubud, I will definitely stay here again, and I recommend this place to anyone looking for a relaxing, nature-oriented stay in Bali.',
    },
  ],
  chandra: [
    // {
    //   key: 0,
    //   name: 'Becky',
    //   date: 'August 2022',
    //   imgUrl:
    //     'https://a0.muscache.com/im/pictures/user/af5d8f78-1cb9-42cb-b8fe-77b0300f5322.jpg?im_w=240',
    //   text: 'Amazing place and amazing staff. All very helpful and friendly. Ira was a huge help and would support with all your needs. Had an amazing massage! Definitely worth a stay, however you will need to consider transport if you wish to go anywhere as you are a little out. However Ira is incredible at helping you sort everything out and is the perfect host ♥️The location is peaceful and over looking the rice fields. Absolutely divine 😀',
    // },
    {
      key: 1,
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
      key: 2,
      name: 'Karolína',
      date: 'July 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/fc11ea05-8cff-43cb-af61-9f39f123806f.jpg?im_w=240',
      text: 'This place was just amazing. From start to finish. Me and my husband travel a lot. We’ve visited many places around the world but this experience was far the best of all. So peacful place with unbelievable sights. Direct view to incredible ricefields and absolutely perfect staff members made our stay unforgettable. We hope to come back someday and relived one more time! Karolina & Petr',
    },
    {
      key: 3,
      name: 'Beatriz',
      date: 'July 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/78ada0c8-f842-466c-a082-747c3dac49a8.jpg?im_w=240',
      text: `Me and my partner stayed at Chandra Villa for two nights. This is a wonderful place to stay. The beautiful Villa is really well decorated, with details that make it very special. The room is very comfortable and the toilet has a traditional balinese shower and a bathtub, where you can enjoy a warm flower bath. Outside, there's a great swimming pool and a net to chill and enjoy the stunning view to the rice fields. During our stay, we had all our meals there and the food was always delicious (specially the pasta pesto - our favourite).

      Overall, our stay was a dream thanks to Suzanne, Ira and all the lovely staff!`,
    },
    {
      key: 4,
      name: 'Jasmijn',
      date: 'May 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/d2507211-487c-476e-aa0f-f698c65770b7.jpg?im_w=240',
      text: `10 out of 10 for our stay at Masakali! We've stayed in all 3 villas and each time we've been amazed by the beauty of it. Everything is just perfect! The attention spent on all the details of the interior + exterior of the villas makes them even more beautiful! You'll definitely feel one with nature, which makes it even more serene and special. The staff is the best staff you can find in Bali. They are such nice people who'd go the extra mile to make your stay out of this world. You just have to go & stay at this little piece of paradise on earth!!!!`,
    },
  ],
  jala: [
    {
      key: 0,
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
      key: 1,
      name: 'Vincent',
      date: 'June 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/bfc26c3e-684c-49b7-b51c-5647e29a7be9.jpg?im_w=240',
      text: `Excellent little villa, ideal for single travellers or a couple. Beautiful traditional design with careful thought into all the lovely little details. The use of timber everywhere gives an amazing effect and separates this place from the usual boring concrete villas.
      Wonderful private pool overlooking the rice fields and jungle. Staff are kind, friendly and provide an excellent service if you want to order food and drinks.
      We had such a nice time here we upgraded to the larger villa 'Surya' next door!`,
    },
    {
      key: 2,
      name: 'Kirsty',
      date: 'July 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/ccfda87c-0570-4c64-924c-a250abeb9e65.jpg?im_w=240',
      text: 'We loved our stay, was very quite & relaxing, beautiful area. Friendly helpful staff, lush gardens, cosy bed & we loved the traditional joglo building. Working rice fields right next door. Close enough to ride on the bike to Ubud for a day trip.',
    },
    {
      key: 3,
      name: 'Jasmijn',
      date: 'May 2022',
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/d2507211-487c-476e-aa0f-f698c65770b7.jpg?im_w=240',
      text: `The staff are such friendly, warm and loving people. They don't do anything because they have to, but they do it because they want to with their heart and soul. They want to make your stay memorable and let you have the time of your life. The property is in such gorgeous state, so clean, so lush and green. All thanks to the wonderful staff. When we set foot on this property it just made us so emotional, because of it's beauty. We can literally see locals working on the rice terraces while having a swim. They are also so friendly and are happy to see tourists and meet you. The food was delicious, healthy, everything you need and want can be arranged. They also offer massages in your own villa and other special treatments. We've had a flowerbath and floating breakfast! So lovely!!!! This place just deserves to be known by everyone and you're truely missing out if you didn't stay here!!! The location is a little bit out of Ubud, but you can go anywhere with the scooter. The rides itself are so pleasant and beautiful, so you just have to rent a scooter! Which can also be arranged at the property for very good prices! I just can't say anything bad about this place. It's heaven on earth! I want to go back already!!!! ♥♥♥`,
    },
  ],
};
