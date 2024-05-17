import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MainPage from './pages/mainpage';
import AboutUs from './pages/about';
import Blog from './pages/blogpage';
import BlogPage from './component/Blog/blog';
function App() {
  const blogs = [
    { id: 1, title: 'Blog 1', content: 'Content of Blog 1', image: 'image1.jpg' },
    { id: 2, title: 'Blog 2', content: 'Content of Blog 2', image: 'image2.jpg' },
    { id: 3, title: 'Blog 3', content: 'Content of Blog 3', image: 'image3.jpg' },
  ];
  return (
    <>
     <Router>
          <Routes>
            <Route path='/' element={<MainPage/>} /> 
            <Route path='/blog' element={<Blog blogs={blogs} />}/>
            <Route path="/blog/:blogId" element={<BlogPage blogs={blogs} />} />
            <Route path='/aboutus' element={<AboutUs/>} /> 
          </Routes>
      </Router>
    </>
  )
}

export default App;
