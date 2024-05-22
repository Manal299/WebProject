import React from 'react';
import Header from '../component/Header/header'; 
import Homepage from '../component/Homepage/homepage';
import UserProfile from '../component/UserProfile/userprofile';


const MainPage = () => {
  return (
    <>
      <Header/>
      <Homepage/>
      <UserProfile/>
    </>
  );
}

export default MainPage;
