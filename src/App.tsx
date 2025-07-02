// import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Certificate from './Pages/Certificate';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App