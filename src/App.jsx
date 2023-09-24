import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Registerpage from './pages/Registerpage'
import Contactpage from './pages/Contactpage'
import Faqs from './components/sections/Faqs'
import BigIdea from './components/sections/BigIdea'
import TimelineSection from './components/sections/TimelineSection'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Registerpage />} />
        <Route path='/contact-us' element={<Contactpage />} />
        <Route path='/Faqs' element={<Faqs />} />
        <Route path='/overview' element={<BigIdea />} />
        <Route path='/timeline' element={<TimelineSection/>} />
      </Routes>
    </>
  )
}

export default App
