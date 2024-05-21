import React from 'react';
import Header from '../component/Header/header'; 
import Homepage from '../component/Homepage/homepage';
import Content from '../component/Content/content';
import Footer from '../component/Footer/footer';
import Slideshow from '../component/Slideshow/slideshow';
import Map from '../component/GoogleMaps/google.tsx';
import Chatbox from '../component/Chatbox/chatbox';

const MainPage = () => {
  return (
   <>
   <Header/>
   <Homepage/>
   <Slideshow/>
   <Chatbox/>
   <Content/>
   <Map/>
   <Footer/>
   </>
  )
}
export default MainPage;
