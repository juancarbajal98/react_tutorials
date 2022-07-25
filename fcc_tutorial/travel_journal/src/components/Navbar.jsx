import React from 'react';
import earthIcon from "../images/earth-icon.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar--earth-icon" src={earthIcon}/>
      my travel journal.
    </div>
  )
};
export default Navbar;