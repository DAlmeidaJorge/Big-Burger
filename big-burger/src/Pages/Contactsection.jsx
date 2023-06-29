import React from 'react';
import './Contactsection.css';

const Contactsection = () => {
  return (
    <div className='contact-section'>
      <h1 className='contact-heading'>Contact us</h1>
      <div className='work-opinion-section'>
        <div className='work-section'>
          <img src='https://media.istockphoto.com/id/1136639555/photo/new-skills-two-chef-assistants-cooking-a-new-dish-in-a-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=ybDECenRWxYPeoKdeKcbcRwSKYZ01UlStS9oQ-p6_lY=' alt='Work' className='section-image' />
          <div className='section-overlay'>
            <h1 className='work-heading'>Work with us</h1>
            <h1 className='cv-heading'>
              <a href='/Contactform'>Send us your CV</a>
            </h1>
          </div>
        </div>
        <div className='opinion-section'>
          <img src='https://media.istockphoto.com/id/1181396290/photo/people-laughing-at-dinner-table.jpg?s=612x612&w=0&k=20&c=6Vyn5ppOp9fLqOeVKL9KCWfNYS69_SchgiOyviVAVuM=' alt='Opinion' className='section-image' />
          <div className='section-overlay'>
            <h1 className='opinion-heading'>Send us your opinion</h1>
            <h1 className='email-heading'>
              <a href='/Contactform'>Reach us at group@bigburger.com</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactsection;
