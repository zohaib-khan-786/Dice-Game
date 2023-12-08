import './start.css'
const StartGame = ({ setIsGameStarted }) => {
  return (
    <>
        <div className="container">
            <div className="left">
                <img src="/images/multipleDice.png" alt="Dice Image" />
            </div>
            <div className="right">
                <h1>DICE GAME</h1>
                <button onClick={()=> setIsGameStarted(true)}>START</button>
            </div>
        </div>
    </>
  )
}

export default StartGame