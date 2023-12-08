import './GameRun.css'
import NumberSelected from './NumberSelected'
import GameScore from './GameScore'
import DiceRoll from './DiceRoll'
import { useState } from 'react'
const GameRun = () => {

  
  const [currentDice, setCurrentDice] = useState(1)
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState('')
  const [count, setCount] = useState(0)
  const generateRandomNumber = (min , max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () => {
    if (!selectedNumber) {
      return setError('Please select any number')
    } else {
    const randomNumber = generateRandomNumber(1 , 7)
    setSelectedNumber(undefined);
    setCurrentDice(prev => randomNumber)

    if (selectedNumber === randomNumber) {
      setCount(prev => prev + randomNumber)
    } else {
      setCount(prev => prev - 2)
    }
    }
  }



  return (
    <>
    <div className="container-game">
    <div className="container-top">
        <GameScore count={count}/>
        <NumberSelected error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
    </div>
        <DiceRoll rollDice={rollDice} currentDice={currentDice}/>

    </div>
    </>
  )
}

export default GameRun