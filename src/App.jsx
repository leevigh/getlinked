import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Rules } from './Components/Sections/Rules'
import Criteria from './Components/Sections/Criteria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < Rules />
        <Criteria />
      </div>
     
    </>
  )
}

export default App
