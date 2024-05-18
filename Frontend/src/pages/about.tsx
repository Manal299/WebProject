import React from 'react';
import Header from '../component/Header/header'; 
import Homepage from '../component/Homepage/homepage';
import Info from '../component/Abtus/info';
import Footer from '../component/Footer/footer';
import Testimonial from '../component/Testimonials/testimonial';
import Creds from '../component/Credits/creds';

const AboutUs: React.FC = () => {
  return (
    <>
    <Header/>
    <Homepage/>
    <Info/>
    <Testimonial/>
    <Creds/>
    <Footer/>
    </>
  )
};
export default AboutUs;

