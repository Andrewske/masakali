import React from 'react';
import Header from '../Header';
import Availability from './Availability';
import MainImage from './MainImage';
import About from './About';
import WhyChoose from './WhyChoose';
import Villas from './Villas';
import Dining from './Dining';
import Amenities from './Amenities';
import Location from './Location';

const Home = () => {
  return (
    <div className='landing'>
      <Header hide={true} />
      <MainImage />
      <Availability />
      <About />
      <WhyChoose />
      <Villas />
      <Dining />
      <Amenities />
      <Location />
    </div>
  );
};

export default Home;
