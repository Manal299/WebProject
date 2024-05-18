import React from 'react';
import "./content.css";
import t from '../images/tulips.jpg';
import f from '../images/florist.jpg';
import vid from '../images/orangeflower.mp4';
import o from '../images/orderflo.jpg';

const Main: React.FC = () => {
  return (
    <>
      <div className="main">
        <div className="grid-container">
          <div className="grid-item">
            <div className="number">01</div>
            <div className="title">Order Online</div>
            <div className="description">We offer online shop and delivery services all over Pakistan.</div>
          </div>
          <div className="grid-item">
            <div className="number">02</div>
            <div className="title">Free Shipping</div>
            <div className="description">We offer free shipping on your first ever order. So go ahead buy yourself or your loved one some flowers!</div>
          </div>
          <div className="grid-item">
            <div className="number">03</div>
            <div className="title">More Freshness</div>
            <div className="description">Sourcing our flowers from the best gardens everyday and preserving them, so you receive quality every time.</div>
          </div>
          <div className="grid-item">
            <div className="number">04</div>
            <div className="title">Safe Payment</div>
            <div className="description">Our payment system is attributed with Jazzcash and we have had no single transaction failure and happy customers only.</div>
          </div>
        </div>
      </div>
      <div className="containercontent">
        <div className="image-wrapper">
          <div className="image-crop">
            <img src={t} alt="1" />
          </div>
          <div className="image-crop">
            <img src={f} alt="1" />
          </div>
        </div>
        <div className="textabtflo">
          <div className="abtflo">
            <p>About Bloomila</p>
          </div>
          <div className="blossom">
            <p>Blossoming Your Special Moments with Nature's Finest</p>
          </div>
          <div className="blossomdesc">
            <p>Welcome to Florist, where floral artistry meets passion for nature's beauty. Our story is rooted in a deep love for flowers and a commitment to creating unforgettable moments for our customers.</p>
          </div>
          <button type="button" className="btn btn-secondary btn-lg" style={{ backgroundColor: 'grey', color: 'white' }}>Read More</button>
        </div>
      </div>
      <div className="best-seller">
        <div className="bsttext">Best Sellers</div>
        <div className="bstmaintexy">Discover the Top Choices</div>
        <div className="bstmaintexy">At Bloomila</div>
      </div>
      <div className="exp">
        <div className="videopl">
          <video autoPlay muted loop>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text">
          <h2 className="vdhead">You Choose the Occasion. We'll Deliver the Flowers</h2>
          <p className="vdt1">Spread Love with Fresh Flowers.</p>
          <p className="vdt2">We Offer Beautiful Arrangements for Every Occasion. Handpicked, Delivered with Care. Brighten Someone's Day with Our Blooms. Express Yourself with Flowers. Let Our Flowers Speak for You..</p>
        </div>
      </div>
      <div className="ordercontent">
        <div className="ordimage-wrapper">
          <div className="ordimage-crop">
            <img src={o} alt="1" />
          </div>
        </div>
        <div className="ordtext">
          <div className="calltoaction">Call to Action</div>
          <div className="ordernow">Explore Our Exquisite Floral Collections & Shop Now for the Perfect Blooms</div>
        </div>
      </div>
    </>
  );
};

export default Main;
