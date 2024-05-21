import React from 'react';
import './bio.css';
import j from '../images/floristJia.jpg'; 
import m from '../images/floristManal.jpg'; 

const Bio = () => {
  return (
    <>
    <div className="Bioo">
        <div>
        <h1 className="biohead">
            About The Owners
        </h1>
        <hr className="bioline"/>
        <p className="biotext1">
        We started this flower shop with a simple yet profound vision: to bring the 
        timeless beauty and joy of flowers into every home and heart. Inspired by the enchanting 
        power of nature to uplift spirits and transform spaces, we embarked on this 
        journey to create a haven of floral wonder. Our goal is to craft exquisite arrangements 
        that celebrate life's special moments, big and small, and to foster a deeper connection with nature. Through every bouquet we design, we aim to share the magic of flowers, spreading happiness, love, and inspiration far and wide. At Bloomila, 
        we believe that every petal tells a story, and we are here to help you tell yours.
        </p>
        </div>
        <div className="florists">
        <img className="jiaflorist" src={j} alt="" />
        <div className="floriststext">
            <p className="textstart">Hi, I am Jia,</p>
             and I started Bloomila with my dear friend Manal. 
            We had this idea to create a flower shop that not only sells beautiful 
            blooms but also tells stories, evokes emotions, and brings joy to people's 
            lives. Our journey began with a shared passion for nature's beauty and a 
            desire to spread that beauty to every corner of our community. We envisioned
             a place where flowers could do more than just decorate—they could inspire, comfort, 
             and celebrate life's precious moments.</div>
        </div>
        <div className="florists">
       
        <div className="floriststext">
            <p className="textstart">Hello, I'm Manal,</p>
             co-founder of Bloomila alongside my dear friend Jia. When we embarked on 
             this journey, we envisioned more than just a flower shop. We wanted to 
             create a sanctuary of beauty, a place where each bloom carries a story, 
             and each bouquet becomes a cherished memory. Our shared passion for 
             flowers and our desire to spread joy and positivity inspired us to bring 
             Bloomila to life.  At Bloomila,
              we are dedicated to sourcing our flowers ethically, supporting local 
              growers, and ensuring that every arrangement we create brings a smile to 
              someone's face. </div>
             <img className="manalflorist" src={m} alt="" />
        </div>
    </div>
    </>
   
  )
}

export default Bio;