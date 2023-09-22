import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Rules } from './Components/Sections/Rules'
import Criteria from './Components/Sections/Criteria'
import Prizes from './components/sections/Prizes'
import Partners from './components/sections/Partners'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < Rules />
        <Criteria />
        < Prizes />
        <Partners />
      </div>
     
    </>
  )
}

export default App
