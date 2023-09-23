import React from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import { Rules } from './Components/Sections/Rules'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
=======
import Rules from './Component/Sections/Rules'
>>>>>>> Stashed changes

function App() {

  return (
    <>
<<<<<<< Updated upstream
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
=======
      <div>
        < Rules />
      </div>
    
>>>>>>> Stashed changes
    </>
  )
}

export default App
