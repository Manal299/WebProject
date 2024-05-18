import React from 'react';
import "./header.css";

const Header: React.FC = () => {
  return (
    <>
      <div>
        <h1 className='brand-name'>
          <span>B</span>
          <span>l</span>
          <span>o</span>
          <span>o</span>
          <span>m</span>
          <span>i</span>
          <span>l</span>
          <span>a</span>
        </h1>
      </div>
    </>
  ) as React.ReactElement;
};

export default Header;
