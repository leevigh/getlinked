import React from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
// import { Rules } from './Components/Sections/Rules'
// import Criteria from './Components/Sections/Criteria'
// import Prizes from './components/sections/Prizes'
// import Partners from './components/sections/Partners'
// import Footer from './components/sections/Footer'
// import Privacy from './components/sections/Privacy'
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
