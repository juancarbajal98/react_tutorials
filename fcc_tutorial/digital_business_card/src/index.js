import React from 'react'
import ReactDOM  from 'react-dom'
import "./styles.css" // styles
import Headshot from "./Headshot"
import Content from "./Content"
import Footer from "./Footer" // components

const DigitalBusinessCard = () => {
  return (
  <div className="container">
    <Headshot/>
    <Content/>
    <Footer/>
  </div>
  )
}

const container = document.getElementById('root')

ReactDOM.render(<DigitalBusinessCard/>,container)