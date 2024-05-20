import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header.tsx'
import Footer from './component/Footer/footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>,
)
