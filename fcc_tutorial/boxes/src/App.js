import React from 'react';
import boxes from './boxes'; // data
import './styles.css'; // styles
import Box from './Box' //components
import BoxDerivedState from './BoxDerivedState' //components

const App = () => {
    // const squareElements_derivedState = squares.map(square => { 
    //   return <BoxDerivedState on={square.on} key={square.id}></BoxDerivedState> 
    // })

  const [squares, setSquares] = React.useState(boxes)

  const toggle = (id) => {
    setSquares(prev => {
      let new_squares = [...prev]
      new_squares[id-1].on = !new_squares[id-1].on
      return new_squares
    })
  };
  const squareElements = squares.map(square => { 
    // return <Box key={square.id} id={square.id} on={square.on} toggle={toggle}></Box> 
    return <Box key={square.id} on={square.on} toggle={() => toggle(square.id)}></Box> 
  });

  return(
  <main>
    <h1>Boxes will go here</h1>
    {squareElements}
    {/* {squareElements_derivedState} */}
  </main>
  )
};
export default App;