// import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Home1 from './Pages/Home1';
import Certificate from './Pages/Certificate';
import Certificate1 from './Pages/Certificate1';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/certificate1" element={<Certificate1 />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App