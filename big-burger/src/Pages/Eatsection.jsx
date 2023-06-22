import React from 'react';
import './Eatsection.css';
import Navbar from '../Components/Navbar/Navbar';

const Eatsection = () => {
  return (
    <div>
      <Navbar />
      <div className="eat-picture-row">
          <img src="https://img.freepik.com/free-photo/hands-holding-perfect-burger-yellow-background_23-2148258495.jpg?w=900&t=st=1687379844~exp=1687380444~hmac=4884473cc3a5d98f37950a45c431bb3aaa738b89dfba3b3d673c21dc80f6670b" alt="burger1" />
         <img src="https://images.unsplash.com/photo-1588258127399-549e8f09f904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="burger2" />
          <img src="https://img.freepik.com/free-photo/hands-holding-burger-red-background_23-2148258478.jpg?w=900&t=st=1687379967~exp=1687380567~hmac=9d10dfd1e24b3da104b01793beb696729bde1fe7a8e32fa7ac5a299365b6b8e6" alt="burger3" />
          
        
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
  );
};

export default Eatsection;
