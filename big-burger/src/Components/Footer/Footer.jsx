import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="follow-us-container">
        <h2 className="follow-heading">Follow us</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com/your-facebook-page-link" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com/your-instagram-page-link" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.tiktok.com/your-tiktok-page-link" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="social-icon" />
          </a>
        </div>
        <p className='burger-para'>@Big Burger Portugal</p>
      </div>
      <div className="foods-allergens">
        <h2 className='foods-heading'>Foods and Allergens</h2>
        <h4 className='info-heading'>You will find all the allergen and nutritional information about our products <u>here</u>.</h4>
      </div>
      <div className="policy-container">
        <p className="footer-link">Policy Privacy</p>
        <p className="footer-link">Cookie Privacy</p>
        <p className="footer-link">Complaints Book</p>
      </div>
    </div>
  );
}

export default Footer;
