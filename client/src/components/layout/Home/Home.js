import React from 'react';
import Header from '../Header';
import Availability from './Availability';
import MainImage from './MainImage';

const Home = () => {
  return (
    <div className='landing'>
      <Header />
      <MainImage />
      <Availability />
    </div>
  );
};

export default Home;
