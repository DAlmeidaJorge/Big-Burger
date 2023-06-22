import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Herosection from '../Components/Herosection/Herosection';
import Carousel from '../Components/Carousel/Carousel';
import LocationSection from '../Components/LocationSection/LocationSection';
import Socialsection from '../Components/Socialsection/Socialsection';
import Footer from '../Components/Footer/Footer';

function Homepage() {
  return (
    <div className="Homepage">
      
      <Herosection />
      <Carousel />
      <LocationSection />
      <Socialsection />
   
    </div>
  );
}

export default Homepage;
