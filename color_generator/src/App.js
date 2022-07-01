import React, { useState } from 'react'
import SingleColor from './SingleColor'

import './App.css'

import Values from 'values.js' // used to check if input is valid hex

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [colorList, setColorList] = useState(new Values(`#f15025`).all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try{
      let colors = new Values(color).all(10)
      setColorList(colors)
    }
    catch(error){
      setError(true)
      console.error(error)
    }
  }
  return (
    <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
        placeholder="#33FF57"
        className ={`${error?'error':null}`}
        />
        <button className="btn" type="submit">Submit</button>
      </form>
    </section>
    <section className="colors">
      {colorList.map ((color, index) => {
        console.log(`Color: ${JSON.stringify(color)}` )
        console.log(`Index: ${index}` )
        // todo undestand syntax here
        return <SingleColor key={index} {...color} index={index}/> 
      })}
    </section>
    </>
  );
}

export default App;
