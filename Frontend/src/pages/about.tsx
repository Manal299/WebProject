import React from 'react';
import Header from '../Components/Header';
import Homepage from '../component/Homepage/homepage';
import Info from '../component/Abtus/info';
import Footer from '../component/Footer/footer';
import Testimonial from '../component/Testimonials/testimonial';

const AboutUs: React.FC = () => {
  return (
    <>
    <Header/>
    <Homepage/>
    <Info/>
    <Testimonial/>
    <Footer/>
    </>
  )
};
export default AboutUs;

