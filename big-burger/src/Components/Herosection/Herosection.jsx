import React from 'react'
import './Herosection.css';


const Herosection = () => {
  return (
      <div className="hero-section">
    <img
    className='hero-section-cover'
    src='https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?cs=srgb&dl=pexels-daniel-reche-3616956.jpg&fm=jpg'
    alt='burger-img'
    width={'100%'}
    height={'100%'}
    opacity={'90%'}
  />
  <div className="hero-content">
      <h2 className="hero-section-heading">How are we going to have it today?</h2>
      <div className="hero-section-container">
        <p className="hero-section-text">Big! Of course!</p>
      </div>
      </div>
  </div>
  )
}

export default Herosection