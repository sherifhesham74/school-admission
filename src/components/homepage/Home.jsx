import React from 'react';
import Slider from './slider'
import ServiceSection from './serviceSection '
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
      <Link to='./admission' className='btn btn-warning'> ApplyNow  </Link>
      </div>
      {/* <Slider />
      <ServiceSection /> */}
    </div>
  );
};

export default Home;