import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ParentCardComponent from './Component/ParentCardComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainPage'>
     <h1>Team Play</h1>
     <ParentCardComponent/>
    </div>
  )
}

export default App
