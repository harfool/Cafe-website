import React, { useState } from 'react';
import './Navbar.css';
import assets from '../../assets/Assets';
import { SlBasket } from "react-icons/sl";
import { TbShoppingBagSearch } from "react-icons/tb";
const Navbar = () => {
  const [Menu, setMenu] = useState('home');

  return (
    <div className="Navbar">
      <img src={assets.logo1} alt="Logo" className='logo' />
      <ul className="nav-menu">
        <li
          onClick={() => setMenu('home')}
          className={Menu === 'home' ? 'active' : ''}
          key="home"
        >
          Home
        </li>
        <li
          onClick={() => setMenu('menu')}
          className={Menu === 'menu' ? 'active' : ''}
          key="menu"
        >
          Menu
        </li>
        <li
          onClick={() => setMenu('contactUs')}
          className={Menu === 'contactUs' ? 'active' : ''}
          key="contactUs"
        >
          Contact Us
        </li>
        <li
          onClick={() => setMenu('AboutUs')}
          className={Menu === 'AboutUs' ? 'active' : ''}
          key="AboutUs"
        >
          About Us
        </li>
      </ul>
      <div className="navbar-right">
        <span><TbShoppingBagSearch className='icon' /></span>
        <div className="nav-search-icon">
          <span><SlBasket className='icon' /></span>
          <div className="dot"></div>
        </div>
        <button className='signUp-btn'>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
