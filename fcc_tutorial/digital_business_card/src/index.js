import React from 'react'
import ReactDOM  from 'react-dom'
import "./styles.css" // styles
import Header from "./Header"
import Buttons from "./Buttons"
import Content from "./Content"
import Footer from "./Footer" // components

const DigitalBusinessCard = () => {
  return (
  <React.Fragment>
    <Header/>
    <Buttons/>
    <Content/>
    <Footer/>
  </React.Fragment>
  )
}

const container = document.getElementById('root')

ReactDOM.render(<DigitalBusinessCard/>,container)