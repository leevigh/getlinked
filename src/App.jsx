import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Registerpage from './pages/Registerpage'
import Contactpage from './pages/Contactpage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Registerpage />} />
        <Route path='/contact-us' element={<Contactpage />} />
      </Routes>
    </>
  )
}

export default App
