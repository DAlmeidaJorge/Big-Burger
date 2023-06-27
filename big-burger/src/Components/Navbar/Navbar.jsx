import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="logo">
    <a href="/">
          <img src="https://static.vecteezy.com/system/resources/previews/017/503/957/original/hot-burgers-logo-illustration-modern-burgers-emblem-art-free-vector.jpg" alt="Burger-Logo" />
          
        </a>
    </div>
    <ul className="nav-links">
    <li>
      <Link to="/Eatsection">What to eat today?</Link>
      </li>
        <li>
          <Link to="/Whosection">Who we are?</Link>
        </li>
        <li>
          <Link to="/Wheresection">Where we are?</Link>
          </li>
        <li>Contacts</li>
      </ul>
      
    </div>
    
 
  
  )
}

export default Navbar