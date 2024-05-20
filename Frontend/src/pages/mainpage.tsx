import React, { useEffect, useState } from 'react';
import Homepage from '../component/Homepage/homepage';
import Content from '../component/Content/content';
import Footer from '../component/Footer/footer';
import Slideshow from '../component/Slideshow/slideshow';
import axios from 'axios';
import Header from '../Components/Header';

const MainPage = () => {
  interface user {
    name: string;
    email: string;
  }
  const [data, setData] = useState<user[]>([])
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000');
      console.log('Data fetched:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    // <div>
    //   {data.map((dt,index)=>{
    //     return(
    //       <div key={index}>
    //         <h1 className='text-black'>{dt.name}</h1>
    //         <p className='text-black'>{dt.email}</p>
    //       </div>
    //     )
    //   })}
    // </div>
   <>
   <Header/>
   {/* <Slideshow/>
   <Content/> */}
   <Footer/>
   </>
  )
}
export default MainPage;
