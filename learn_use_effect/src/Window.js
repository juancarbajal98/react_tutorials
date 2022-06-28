import React, { useEffect, useState } from 'react'

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth) // set to initial window width
  const [windowHeight, setWindowHeight] = useState(window.innerHeight) // set to initial window width

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <div>Width: {windowWidth}</div>
      <div>Height: {windowHeight}</div>
    </>
  )
}

export default App;