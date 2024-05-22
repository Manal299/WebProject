import React from 'react';
import { Link } from 'react-router-dom';
import { IoHeart } from "react-icons/io5";
import { BiBasket } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import './navbar.css';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
      <div className="navbar-link">
      <a href="/">Home</a>
        </div>
        <div className="navbar-link">
          About
          <div className="dropdown-content">
            <a href="/aboutus">About Us</a>
            <a href="/blog">Blog Page</a>
          </div>
        </div>
        <div className="navbar-link">
          Shop
          <div className="dropdown-content">
            <a href="/bestseller">Best Seller</a>
            <a href="/seasonal">Seasonal Flower</a>
          </div>
        </div>
        <div className="navbar-link">
          Extra Help
          <div className="dropdown-content">
            <a href="/flowerrecognition">Flower Recognition</a>
            <a href="/login">Login</a>
            <a href="/option8">Option 8</a>
            <a href="/option9">Option 9</a>
          </div>
        </div>
      </div>
      <div className="navbar-right">
      <BiBasket className="iconic"/>
      <IoHeart className="iconic"/>
      <FaRegUser className="iconic"/>
      </div>
    </div>
  );
};

export default Navbar;
