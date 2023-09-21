import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Rules } from './Components/Sections/Rules'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < Rules />
      </div>
     
    </>
  )
}

export default App
