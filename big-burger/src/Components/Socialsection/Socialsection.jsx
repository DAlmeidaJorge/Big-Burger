import React from 'react';
import './Socialsection.css';
import { FaInstagram } from 'react-icons/fa';

const Socialsection = () => {
  return (
    <div className="social-section">
      <div className="instagram-section">
      <a href="https://www.instagram.com/">
        <FaInstagram className="instagram-icon" />
        </a>
        <h2 className="instagram-heading">Big & Instagram</h2>
      </div>
      <div className="picture-row">
        <img src="https://img.freepik.com/premium-photo/young-caucasian-woman-holding-burger-isolated-yellow-background-making-phone-gesture-call-me-back-sign_1368-248898.jpg" alt="girl-phone" />
        <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/impossible-burger-1296x728-feature-1296x728.jpg?h=1528" alt="table-burgers" />
        <img src="https://img.freepik.com/free-photo/group-smiley-friends-toasting-with-burgers_23-2148718867.jpg?w=2000" alt="toasting-burger" />
        <img src="https://media.istockphoto.com/id/1295387357/photo/its-sweet-like-you.jpg?s=612x612&w=0&k=20&c=L8u0nhuqbOnPngj8MKsJE9qeTyF8Tf6eQqU2hdZlmcg=" alt="Burger-friends" />
      </div>
      <a href="https://www.instagram.com/">
      <button className="follow-button"> <FaInstagram className="button-instagram-icon" />Follow us on Instagram!</button>
      </a>
    </div>
  );
};

export default Socialsection;
