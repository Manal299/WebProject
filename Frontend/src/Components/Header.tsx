import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoHeart } from "react-icons/io5";
import { BiBasket } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';

function Header () {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

      // Calculate the total number of items in the cart
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    return (
      <>
       {/* <div> 

      <h1 className=" left-1/2 transform -translate-x-1/2 text-2xl text-brown-700 font-emotion">
          <span className="inline-block opacity-0 animate-reveal">B</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.1s' }}>l</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.2s' }}>o</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.3s' }}>o</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.4s' }}>m</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.5s' }}>i</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.6s' }}>l</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.7s' }}>a</span>
        </h1>
      
       </div> */}
      <div className=" flex items-center justify-around px-8 py-4 bg-white">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-lg hover:text-gray-700">Home</Link>
        <div className="relative group">
          <span className="text-lg cursor-pointer hover:text-gray-700">About</span>
          <div className="hidden group-hover:block absolute top-full left-0 mt-1 bg-white shadow-lg">
            <Link to="/aboutus" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
            <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog Page</Link>
          </div>
        </div>
        <div className="relative group">
          <span className="text-lg cursor-pointer hover:text-gray-700">Shop</span>
          <div className="hidden group-hover:block absolute top-full left-0 mt-1 bg-white shadow-lg">
            <Link to="/products" className="block px-4 py-2 hover:bg-gray-100">Best Seller</Link>
            <Link to="/seasonal" className="block px-4 py-2 hover:bg-gray-100">Seasonal Flower</Link>
          </div>
        </div>
        <Link to="/contact" className="text-lg hover:text-gray-700">Contact</Link>
      </div>
        <h1 className=" left-1/2 transform -translate-x-1/2 text-4xl text-brown-700 font-emotion">
          <span className="inline-block opacity-0 animate-reveal">B</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.1s' }}>l</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.2s' }}>o</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.3s' }}>o</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.4s' }}>m</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.5s' }}>i</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.6s' }}>l</span>
          <span className="inline-block opacity-0 animate-reveal" style={{ animationDelay: '0.7s' }}>a</span>
        </h1>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <Link to="/cart">
            <BiBasket className="text-xl" />
           
            <div className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">{totalItems}</div>
           </Link>
           </div>
           <Link to="/wishlist">
          <IoHeart className="text-xl" />
          </Link>
          <FaRegUser className="text-xl" />
        </div>
      </div> 
      </>
    );
  }


export default Header;
