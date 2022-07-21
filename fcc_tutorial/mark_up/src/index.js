import React from 'react'
import ReactDOM from 'react-dom' // packages
import "./styles.css" // styles
import Header from "./Header"
import Content from "./Content" // components

const MarkUp = () => {
  return (
    <React.Fragment>
      <Header/>
      <Content/>
    </React.Fragment>
  )
}

const container = document.getElementById('root')

ReactDOM.render(<MarkUp/>, container)