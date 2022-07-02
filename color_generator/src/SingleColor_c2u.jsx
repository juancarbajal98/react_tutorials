import React from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, setter}) => {
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)

  return (
  <article
  className = {`color ${index > 10 && 'color-light'}`}
  style = {{backgroundColor: `rgb(${bcg})`}}
  onClick={(e)=> { setter(hex) }}
  >
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hex}</p>
  </article>
  )
}

export default SingleColor