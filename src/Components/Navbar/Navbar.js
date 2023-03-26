import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://cdn.vectorstock.com/i/1000x1000/19/52/fuel-icon-vector-981952.webp" alt="Logo" />
        <span>FuelUp</span>
      </div>
      <ul className="nav-links">
        <li className='navbar-li'><a href="#">Home</a></li>
        <li className='navbar-li'><a href="#">About Us</a></li>
        <li className='navbar-li'><a href="#">Fuel Products</a></li>
        <li className='navbar-li'><a href="#">Contact Us</a></li>
      </ul>
      <div className="cart">
        <span className="item-count">3</span>
        <img src="https://www.example.com/cart.png" alt="Cart" />
      </div>
    </nav>
  );
}

export default Navbar;
