import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GameRun from './components/GameRun'
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  return (
    <>
    {
      !isGameStarted ? <StartGame setIsGameStarted={setIsGameStarted} /> : <GameRun />
    }
      
    </>
  )
}

export default App
