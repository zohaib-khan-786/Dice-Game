import styled from 'styled-components'
const DiceRoll = ({rollDice , currentDice}) => {

  return (
    <>
      <DiceCont>
        <div className="dice"  onClick={rollDice}>
          <img src={`/images/dice-six-faces-${currentDice}.png`} alt="DiceFaces"/> 
          <p>Click to roll dice</p>
        </div>
                  
      </DiceCont>
    </>
  )
}

export default DiceRoll


const DiceCont = styled.div`
height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  
  img{
    width: 300px;
  }
  .buttonCont{
    display: flex;
    gap: 20px;
  }
`
