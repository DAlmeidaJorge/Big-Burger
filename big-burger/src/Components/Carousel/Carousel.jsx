import React, { useState } from 'react';
import './Carousel.css';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';

const Carousel = () => {
  const latest1 = 'https://www.dotsignage.com/images/solutions-burger-page/burger-combo-meal-promotion-on-tv-screen.jpg';
  const latest2 = 'https://www.dotsignage.com/images/solutions-burger-page/chicken-burger-offer-template.jpg';
  const promotions1 = 'https://www.dotsignage.com/images/solutions-burger-page/burger-digital-signage-template.jpg';
  const promotions2 = 'https://www.dotsignage.com/images/solutions-burger-page/burger-joint-menu-design-idea.jpg';
  const menu1 = 'https://www.dotsignage.com/images/solutions-burger-page/free-burger-digital-menu-template.jpg';

  const [latestIndex, setLatestIndex] = useState(latest1);
  const [promotionsIndex, setPromotionsIndex] = useState(promotions1);
  const [menuIndex, setMenuIndex] = useState(menu1);

  const handleBackward = () => {
    setPromotionsIndex(promotions1);
    setLatestIndex(latest1);
    setMenuIndex(menu1);
  };

  const handleForward = () => {
    setPromotionsIndex(promotions2);
    setLatestIndex(latest2);
    setMenuIndex(null);
  };

  return (
    <div className="carousel-pictures-container">
      <div className="button-container">
        <button className="next-latest-button" onClick={handleBackward}>
          <AiFillCaretLeft className="next-icon" />
        </button>
        <button className="next-latest-button" onClick={handleForward}>
          <AiFillCaretRight className="next-icon" />
        </button>
      </div>

      <div className="latest-details">
        <div className="latest-heading">
          <h1>Latest</h1>
        </div>
        <img
          src={latestIndex}
          alt="latest"
          width="450"
          height="380"
          className="latest-picture"
        />
      </div>
      
      <div className="promotions-details">
        <div className="promotions-heading">
          <h1>Promotions</h1>
        </div>
        <img
          src={promotionsIndex}
          alt="Promotions"
          width="450"
          height="380"
          className="promotions-picture"
        />
      </div>

      {menuIndex && (
        // Render the menu-details div only if menuIndex is not null
        <div className="menu-details">
          <div className="menu-heading">
            <h1>Menu</h1>
          </div>
          <img
            src={menuIndex}
            alt="Menu"
            width="450"
            height="380"
            className="menu-picture"
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;



