import React from 'react';
import './Contactform.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contactform = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "", message: "", cv: null });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "cv") {
      const file = e.target.files[0];
      setData({ ...data, [name]: file });
    } else {
      setData({ ...data, [name]: value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    

    window.alert("Thank you for reaching out, our team will be in contact with you very soon!");
  }

  return (
    <form method='post' onSubmit={handleSubmit}>
      <h1>Contact <span>Us</span></h1>
      <Link to="/Contactsection">
        <button className="contact-home">Go <span>Back</span> </button>
      </Link>

      <input type="text" name="name" onChange={handleChange} value={data.name} placeholder="Enter name" />
      <input type="email" name="email" onChange={handleChange} value={data.email} placeholder="example@gmail.com" />
      <input type="text" name="phone" onChange={handleChange} value={data.phone} placeholder="+91" />
      <textarea name="message" onChange={handleChange} value={data.message} placeholder="Type here..." />

      <input type="file" name="cv" onChange={handleChange} />
      <label htmlFor="cv" className="cv-label">Upload Your CV</label>

      <button className='form-submit-button' type="submit">Submit</button>
    </form>
  )
}

export default Contactform;
