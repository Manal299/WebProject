import React from 'react';
import Navbar from '../Navbar/navbar';
import './homepage.css';

const Homepage: React.FC = () => {
  const items = [
    {
      label: 'Home'
    },
    {
      label: 'About',
      options: ['Option 1', 'Option 2', 'Option 3']
    },
    {
      label: 'Services',
      options: ['Option 4', 'Option 5']
    },
    {
      label: 'Contact',
      options: ['Option 6', 'Option 7', 'Option 8', 'Option 9']
    }
  ];

  return (
    <div className="page1">
      <header>
        <nav className="nav-bar">
          <Navbar items={items} />
        </nav>
      </header>
    </div>
  );
};

export default Homepage;
