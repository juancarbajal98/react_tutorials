import React from 'react';

const CounterPractice = () =>{
  const [count,setCount] = React.useState(0)
  return (
    <React.Fragment>
      <button onClick={() => {
        setCount(prevCount => prevCount -1)
      }}>-</button>
      <h1>Count: {count}</h1>
      <button onClick={() => {
        setCount(prevCount => prevCount +1)
      }}>+</button>
    </React.Fragment>
  )
};
export default CounterPractice;