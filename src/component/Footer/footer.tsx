import React from 'react';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-8 font-heebo">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Column 1 */}
        <div className="footer-column w-full sm:w-1/3">
          <p className="font-bold text-lg mb-2 font-garamond">Flower Shop</p>
          <p className="text-sm">Welcome to the world of Florist, where flowers come to life with love and creativity. Discover our story, our passion for flowers, and our commitment to making every moment memorable.</p>
        </div>

        {/* Column 2 */}
        <div className="footer-column  w-full sm:w-1/3">
          <p className="font-bold text-lg ml-52 mb-2 font-garamond">Links</p>
          <ul className="text-sm ml-52">
            <li><a href="/" className="text-gray-800 hover:underline">Home</a></li>
            <li><a href="/about" className="text-gray-800 hover:underline">About</a></li>
            <li><a href="/shop" className="text-gray-800 hover:underline">Shop</a></li>
            <li><a href="/contact" className="text-gray-800 hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column w-full sm:w-1/3">
          <p className="font-bold text-lg mb-2 font-garamond">Contact Us</p>
          <p className="text-sm">
            Address: 13 Fifth Avenue, New York 101660 <br />
            Email: <a href="mailto:contact@info.com" className="text-gray-800 hover:underline">contact@info.com</a> <br />
            Phone: <a href="tel:+91987654321" className="text-gray-800 hover:underline">+91 987 654 321</a>
          </p>
        </div>
      </div>

      {/* Social media icons */}
      <div className="flex justify-end items-center mt-4 mr-4">
        <FaInstagram className="text-2xl mr-2" />
        <FaFacebookSquare className="text-2xl" />
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-800">
        <p className="text-sm">Copyright  &copy; 2024 Bloomila</p>
      </div>
    </footer>
  );
}

export default Footer;
