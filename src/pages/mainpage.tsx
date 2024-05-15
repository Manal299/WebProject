import React from 'react';
import Header from '../component/Header/header'; 
import Homepage from '../component/Homepage/homepage';
import Content from '../component/Content/content';
import Footer from '../component/Footer/footer';
import Slideshow from '../component/Slideshow/slideshow';

const MainPage = () => {
  return (
   <>
   <Header/>
   <Homepage/>
   <Slideshow/>
   <Content/>
   <Footer/>
   </>
  )
}
export default MainPage;
