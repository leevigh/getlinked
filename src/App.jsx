import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Rules } from './Components/Sections/Rules'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
