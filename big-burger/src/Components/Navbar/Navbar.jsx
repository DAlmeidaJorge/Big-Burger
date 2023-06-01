import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="logo">
    <img src="https://static.vecteezy.com/system/resources/previews/017/503/957/original/hot-burgers-logo-illustration-modern-burgers-emblem-art-free-vector.jpg" alt="Burger-Logo" />
    </div>
    <ul className="nav-links">
        <li>What to eat today?</li>
        <li>Who we are?</li>
        <li>Where are we?</li>
        <li>Contacts</li>
      </ul>
      
    </div>
    
 
  
  )
}

export default Navbar