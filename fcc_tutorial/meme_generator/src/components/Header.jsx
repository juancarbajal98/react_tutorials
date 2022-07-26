import React from 'react';
import memeIcon from '../images/meme-icon.png'

const Header = () => {
  return(
    <div className="header">
      <img src={memeIcon}/>
      <h3>Meme Generator</h3>
      <p>React Course - Project 3</p>
    </div>
  )
};
export default Header;