import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="follow-us">
        <h2 className="follow-heading">Follow us</h2>
        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTiktok className="social-icon" />
        </div>
        <p className='burger-para'>@Big Burger Portugal</p>
      </div>
      <div className="foods-allergens">
        <h2 className='foods-heading'>Foods and Allergens</h2>
        <h4 className='info-heading'>You will find all the allergen and nutritional information about our products <u>here</u>.</h4>
      </div>
    </div>
  );
}

export default Footer;
