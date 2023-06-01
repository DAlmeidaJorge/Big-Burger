import React, { useState } from 'react';
import './Carousel.css';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";


const Carousel = () => {
  const latest1 = 'https://elements-cover-images-0.imgix.net/5c4c0676-ec21-4adc-a286-19d9d270360b?auto=compress%2Cformat&fit=max&w=2740&s=0e560974555f1c66d09badb194926004';
  const latest2 = 'https://images01.nicepagecdn.com/page/89/23/one-page-template-preview-89239.jpg';
  const promotions1 = 'https://stockpsd.net/wp-content/uploads/2020/06/Burger-Promotion-Free-Flyer-Template-PSD.jpg';
  const promotions2 = 'https://static.vecteezy.com/system/resources/previews/004/571/855/non_2x/burger-logo-template-design-element-for-logo-poster-card-banner-emblem-t-shirt-illustration-free-vector.jpg';
  const menu1 = 'https://png.pngtree.com/template/20210609/ourlarge/pngtree-yellow-retro-hotel-restaurant-burger-menu-template-image_532500.jpg';

  const [latestIndex, setLatestIndex] = useState(latest1);
  const [promotionsIndex, setPromotionsIndex] = useState(promotions1);
  const [menuIndex, setMenuIndex] = useState(menu1);

  const latestPictures = [latest1, latest2];
  const promotionsPictures = [promotions1, promotions2];
  const menuPictures = [menu1];

  const handleBackward = () => {
    setPromotionsIndex(promotions1)
    setLatestIndex(latest1)
    setMenuIndex(menu1);
  };

  const handleForward = () => {
    setPromotionsIndex(promotions2)
    setLatestIndex(latest2)
     setMenuIndex(null);
  };

  return (
    <div className='carousel-pictures-container'>
     <div className='button-container'>
     <button className='next-latest-button' onClick={handleBackward}>
            <AiFillCaretLeft className='next-icon' />
          </button>
          <button className='next-latest-button' onClick={handleForward}>
            <AiFillCaretRight className='next-icon' />
          </button>
     </div>

        <div className='latest-details'>
        <h1>Latest</h1>
          <img
              src={latestIndex}
              alt="latest"
              width="400"
              height="380"
              className="latest-details"
            />  

       
    </div>
    <div className='promotions-details'>
    <h1>Promotions!</h1>
     <img
                src={promotionsIndex}
                alt="Promotions"
                width="400"
                height="380"
                className="promotions-details"
              /> 
              </div>

        {menuIndex && ( // Render the menu-details div only if menuIndex is not null
        <div className="menu-details">
          <h1>Menu</h1>
          <img src={menuIndex} 
         alt="Menu" width="400"
         height="380"
         className="menu-details"
             />
        </div>
      )}
    </div>
  );
};

export default Carousel;








