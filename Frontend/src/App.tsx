import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MainPage from './pages/mainpage';
import AboutUs from './pages/about';

function App() {

  return (
    <>
     <Router>
          <Routes>
            <Route path='/' element={<MainPage/>} /> 
            {/*<Route path='/Flower-Shop/Blog' element={<Blog/>}/>*/}
            {/* <Route path='/aboutus' element={<AboutUs/>} />  */}
          </Routes>
      </Router>
    </>
  )
}

export default App;
