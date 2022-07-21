import React from 'react'
import ReactDOM  from 'react-dom'
import "./styles.css" // styles
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

const App = () => {
  return (
    <React.Fragment>
       <Navbar/>
       <Hero/>
       <Card/>
    </React.Fragment>
  )
}

const container = document.getElementById('root')

ReactDOM.render(<App/>,container)