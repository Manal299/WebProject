import React from 'react';
import FlowerRecognition from '../component/Recognition/recognition';
import Header from '../component/Header/header';
import Homepage from '../component/Homepage/homepage';
import Footer from '../component/Footer/footer';

function FlowerRecognitionPage() {
  return (
   <>
   <Header/>
   <Homepage/>
   <FlowerRecognition />
   <Footer/>
    </>
  );
}

export default FlowerRecognitionPage;