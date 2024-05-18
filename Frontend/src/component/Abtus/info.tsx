import React from 'react';
import bg from '../images/portfolio.png';
import './info.css';
import a from '../images/infopg1.jpg'
const Info: React.FC = () => {
  return (
    <>
      <img className="infimg" src={bg} alt="Portfolio" />
      <div className="inftxt">
        <p className="inftxt1">Know About Us</p>
        <hr className="infline"/>
        <p className="inftxt2">Introducing Bloomila, where floral fantasies come to life! Born from a seed of inspiration and nurtured with love, our enchanting flower shop blossomed into existence to sprinkle your world with petals of delight. Our goal at Bloomila? To weave dreams into bouquets and make every moment bloom with magic. Discover a garden of whimsy and wonder with us! </p>
      </div>
      <div class="container">
      <div class="column">
      <img src={a} alt="Image"/>
    </div>
    <div class="column">
      <p className="inftxt31">At Bloomila,</p>
      <p className="inftxt32"> we believe in sourcing our flowers with care and conscience, ensuring each bloom tells a tale of sustainability and freshness. We partner with local growers who share our passion for quality and eco-conscious practices, hand-selecting each stem to ensure only the finest finds their way to our shop. From sun-kissed fields to verdant gardens, we seek out blooms bursting with natural beauty and fragrance.</p>
    </div>
    <div class="column">
      <p className="inftxt3">Additionally, we support fair trade initiatives, sourcing flowers from ethical suppliers around the globe, guaranteeing fair wages and safe working conditions for all. Our commitment to sustainability extends to our packaging too, as we opt for eco-friendly materials whenever possible, ensuring our flowers arrive at your doorstep in the most planet-friendly way possible.</p>
    </div>
  </div>
    </>
  );
}
export default Info;
