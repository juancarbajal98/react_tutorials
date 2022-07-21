import React from 'react'
import emailIcon from "../images/email-icon.png"
import linkedInIcon from "../images/linkedin-icon.png"

const Buttons = () => {
  return (
    <React.Fragment>
      <div className="content--buttons-container">
        <div className="content--button email">
          <img src={emailIcon}/>
          <p>Email</p>
        </div>
        <div className="content--button linkedin">
          <img src={linkedInIcon}/>
          <p>LinkedIn</p>
        </div>      
      </div>
    </React.Fragment>
  )
};

export default Buttons;