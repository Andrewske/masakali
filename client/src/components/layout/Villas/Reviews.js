import React, { useState } from 'react';
import { connect } from 'react-redux';
import star from '../../../img/icons8-star-48.png';
import moment from 'moment';

const Reviews = ({ reviews }) => {
  const [index, setIndex] = useState(4);

  console.log(reviews);

  const next = () => {
    index === reviews.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const prev = () => {
    index === 0 ? setIndex(reviews.length - 1) : setIndex(index - 1);
  };

  return (
    reviews && (
      <div className='review'>
        <i className='icon icon-chevron-left' onClick={() => prev()} />
        <img
          className='review-image'
          src={reviews[index].profile_photo_url}
          alt={reviews[index].author_name}
        />
        <span className='review-info'>
          <span className='review-name'>{reviews[index].author_name}</span>
          <span className='review-date'>
            {moment.unix(reviews[index].time).format('MMM d, YYYY')}
          </span>
          <span className='review-rating'>
            {[...Array(reviews[index].rating)].map((star, i) => (
              <span className='star' key={`star-${i}`}>
                &#9733;
              </span>
            ))}
          </span>
          <span className='review-text'>{reviews[index].text}</span>
        </span>
        <i className='icon icon-chevron-right' onClick={() => next()} />
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  reviews: state.villas.reviews,
});

export default connect(mapStateToProps, null)(Reviews);
