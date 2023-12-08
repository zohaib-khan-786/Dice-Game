import styled from 'styled-components'

const NumberSelected = ({ selectedNumber, setSelectedNumber, error , setError}) => {

  const arrNumb = [1, 2, 3, 4, 5, 6]

  return (
    <div className="selectedCont">
        <p>{error}</p>
      <Boxes>
        {
          arrNumb.map((val, i) =>
            <Box isSelected={val === selectedNumber} key={i} className="box" onClick={() => {
              setSelectedNumber(val);
              setError('');
            }}>
              <h2>{val}</h2>
            </Box>
          )
        }
      </Boxes>
      <p>Select any number</p>
    </div>
  )
}

export default NumberSelected


const Boxes = styled.div`
  display: flex;
  gap: 20px;
`
const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 2px solid black;
    background-color: ${(props) => props.isSelected ? "black" : "transparent"};
    color: ${(props) => !props.isSelected ? "black" : "white"};
    cursor: pointer;
    
`