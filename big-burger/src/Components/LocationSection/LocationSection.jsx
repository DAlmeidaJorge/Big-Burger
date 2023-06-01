import React from 'react'
import './LocationSection.css';
import { CiLocationOn } from 'react-icons/ci';




const LocationSection = () => {
  return (
    <div className="location-section">
    <img
    className='location-section-cover'
    src='https://wallpaperaccess.com/full/3353887.jpg'
    alt='location-img'
    width={'100%'}
    height={'100%'}
    opacity={'90%'}
  />
  <div className="location-content">
  <a href="https://www.google.com/maps/search/burgers/@38.7426062,-9.1742922,12.26z?entry=ttu">
          <CiLocationOn className="location-icon" />
        </a>
      <h2 className="location-section-heading">Where we are</h2>
      <div className="location-section-container">
        <p className="location-section-text">Find the nearest Big Burger to your location</p>
      </div>
      </div>
  </div>
  )
}

export default LocationSection