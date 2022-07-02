import React, { useEffect, useState } from 'react'
import SingleColor from './SingleColor'
import SingleColor_c2u from './SingleColor_c2u'

import './App.css'

import Values from 'values.js' // used to check if input is valid hex

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [colorList, setColorList] = useState(new Values(`#f15025`).all(10))


  useEffect(()=>{
    if(color.length === 7){ handleSubmit()}
  }, [color])

  const handleSubmit = () => {
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
        /* 
        this version uses SingleColor.jsx - the difference is the action
        triggered on clicking the color card. This one copies the hex to 
        clipboard
        */
        return <SingleColor key={index} {...color} index={index}/>  

        /* 
        This one passes the color setter to the child component so that 
        the color state is updated when a SingleColor is clicked
        c2u: Click to Update
        */
        // return <SingleColor_c2u key={index} {...color} index={index} setter={setColor}/> 
      })}
    </section>
    </>
  );
}

export default App;
