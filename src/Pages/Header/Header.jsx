import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className="Header">
        <div className="header-content">
        <h1>Welcome to our Cafe!</h1>
            <p>Here you can find our wide variety of dishes, enjoy a great meal, and even order a drink.</p>
        </div>
      <button className="header-btn">Discover our menu</button>
        
    </div>
  )
}

export default Header