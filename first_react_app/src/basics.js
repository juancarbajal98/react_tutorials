import './App.css';
import { useEffect, useState } from 'react';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const name = 'Juan'
  const nameIsShowing = true

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    /*  remark on modifying state
    here if we had tried: counter = 100
    we would be breaking a core rule of react which is to never 
    modify state with anything other than its respective setter

    instead we should do: setCounter(100)
    */

    console.log(`Counter updated: ${counter}`)
  }, [counter])
  return (
    <div className="App">
      
      {/* single line ternary JSX
      <h1>Hello, {nameIsShowing? name : 'John'}!</h1> 
      */}


      {/* 
      notice with lines below that things are wrapped in 
      enclosing tags <></> These are called fragments and
      they help us follow the rule that adjacent JSX elements 
      nust be wrapped in an enclosing tag
      */}
      {nameIsShowing ? 
      (
        <>
        <h1>test</h1>
        {name}
        </>
      ) : 
      (
        <>
        <h1>test</h1>
        <h2>There is no name</h2>
        </>
      )}


      <><br></br><br></br><br></br><br></br></>


      {/* 
      NESTED FUNCTIONAL COMPONENTS AND PASSING PROPS
      */}
      <Person name="Juan" age = "2"></Person>
      <Person name="a" age = "3"></Person>
      {/* notice when the prop is an expression it requires {} wrapping */}
      <Person name="c" age = {2+2}></Person>


      <><br></br><br></br><br></br><br></br></>


      {/* 
      Basic useState example
      */}
      <button onClick={ () => setCounter(counter - 1) }>-</button>
      <h1>{counter}</h1>
      <button onClick={ () => setCounter(counter + 1) }>+</button>
    </div>
  );
}

export default App;
