import React from 'react';
import './Eatsection.css';
import Navbar from '../Components/Navbar/Navbar';

const Eatsection = () => {
  return (
    <div>
      <Navbar />
      <div className='burgers-quote-container'>
        <h1 className='burger-quote'>Burgers</h1>
      </div>
      <div className='burgers-heading-container'>
        <h1 className='first-burgers-heading'>Our signature burgers!</h1>
        <h1 className='second-sides-heading'>Try out the most delicious burgers in the world!</h1>
      </div>
      <div className='burger-section-container'>
        <div className='first-burger-container'>
          <div className="burger-picture-container">
            <img src="https://cdn1.vitalchoice.com/wcsstore/VitalChoice/images/catalog/FSB5_1932_Delux_Salmon_Burger_5oz_BEAUTYx.jpg" alt="salmon-burger" />
            <h1 className='salmon-title'>Deluxe Salmon Burger</h1>
          </div>

          <div className="burger-picture-container">
            <img src="https://sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2.jpg" alt="bean-burger" />
            <h1 className='bean-title'>Black Bean Burger</h1>
          </div>

          <div className="burger-picture-container">
            <img src="https://www.eatingwell.com/thmb/Clm50Llj-uQGfbLUGnevTY0mzWU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6683924-cab8a11ae8c24c50b48aae8ed95049e6.jpg" alt="veggie" />
            <h1 className='veggie-title'>Veggie Burger</h1>
          </div>
        </div>

        <div className='second-burger-container'>
          <div className="burger-picture-container">
            <img src="https://cdn.loveandlemons.com/wp-content/uploads/2019/06/portabello-mushroom-burger-recipe.jpg" alt="mushroom-burger" />
            <h1 className='mushroom-title'>Portobello Mushroom Burger</h1>
          </div>

          <div className="burger-picture-container">
            <img src="https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267-500x500.jpg" alt="cheeseburger" />
            <h1 className='cheese-title'>Premium Cheeseburger</h1>
          </div>

          <div className="burger-picture-container">
            <img src="https://www.killingthyme.net/wp-content/uploads/2021/11/best-turkey-burger-recipe-5.jpg" alt="turkey" />
            <h1 className='turkey-title'>Famous Turkey Burger</h1>
          </div>
        </div>

      <div className='sides-quote-container'>
        <h1 className='sides-quote'>Sides</h1>
      </div>
      <div className='sides-heading-container'>
        <h1 className='first-sides-heading'>The Signature Sides of Big Burger!</h1>
        <h1 className='second-sides-heading'>From the simplest to the most elaborate sides, all are <br/> prepared with fresh, authentic, and flavorful ingredients.</h1>
      </div>
      <div className='eat-section-container'>
        <div className='first-section-container'>
          <div className="picture-container">
            <img src="https://www.primaverakitchen.com/wp-content/uploads/2018/04/Spicy-Baked-Sweet-Potato-Fries-Primavera-Kitchen-1.jpg" alt="sweet-fries" />
            <h1 className='fries-title'>Sweet Fries</h1>
          </div>

          <div className="picture-container">
            <img src="https://www.thecomfortofcooking.com/wp-content/uploads/2017/10/Crispy_Foolproof_Onion_Rings-1.jpg" alt="onion-rings" />
            <h1 className='onions-title'>Onion Rings</h1>
          </div>

          <div className="picture-container">
            <img src="https://barefeetinthekitchen.com/wp-content/uploads/2020/04/Coleslaw-edit-3-1-of-1-1536x1097.jpg" alt="coleslaw" />
            <h1 className='coleslaw-title'>Coleslaw</h1>
          </div>
        </div>

        <div className='second-section-container'>
          <div className="picture-container">
            <img src="https://www.recipe-diaries.com/wp-content/uploads/2015/04/garlic-parmesan-fries-002.jpg" alt="garlic-fries" />
            <h1 className='garlic-title'>Garlic Parmesan Fries</h1>
          </div>

          <div className="picture-container">
            <img src="https://www.supervalu.co.uk/wp-content/uploads/2018/08/loaded-nachos.jpg" alt="loaded-nachos" />
            <h1 className='nachos-title'>Loaded Nachos</h1>
          </div>

          <div className="picture-container">
            <img src="https://sugarspunrun.com/wp-content/uploads/2021/07/Homemade-Mozzarella-Sticks-Recipe-1-of-1.jpg" alt="mozzarella-sticks" />
            <h1 className='sticks-title'>Mozzarella Sticks</h1>
          </div>
        </div>
      </div>
      <div className='big-menu'>
        <h1 className='menu-title'>Your Big Menu includes:</h1>
        <h1 className='second-menu-title'>Burger + Fries or Coleslaw + Soda 40CL or Water</h1>
      </div>
    </div>
    </div>
  );
};

export default Eatsection;
