import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Registerpage from './pages/Registerpage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Registerpage />} />
      </Routes>
    </>
  )
}

export default App
