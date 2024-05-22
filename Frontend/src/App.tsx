import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MainPage from './pages/mainpage';
import AboutUs from './pages/about';
import Blog from './pages/blogpage';
import BlogPage from './component/Blog/blog';
import FlowerRecognitionPage from './pages/flowerrecogpage';
import LoginSignup from './pages/login';
import UserProfile from './component/UserProfile/userprofile';
import SignUp from './pages/signup';

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
}

function App() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch('../public/data/blogsdata.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
        console.log("Fetched blogs:", blogs);
      })
      .then(data => {
        console.log('Fetched blogs:', data);
        setBlogs(data);
      })
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>} /> 
          <Route path='/blog' element={<Blog blogs={blogs} />}/>
          <Route path="/blog/:blogId" element={<BlogPage blogs={blogs} />} />
          <Route path='/aboutus' element={<AboutUs/>} /> 
          <Route path='/flowerrecognition' element={<FlowerRecognitionPage/>} /> 
          <Route path ='/login' element={<LoginSignup/>}/>
          <Route path ='/profile' element={<UserProfile/>}/>
          <Route path ='/signup' element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
