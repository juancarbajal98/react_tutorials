import React from "react";
import img from "../images/card-1.png"
import starIcon from "../images/star-icon.png"

const Card = () => {
  return(
    <div className="card--container">
      <div className="card--status">
        <p className="card--status-text"></p>
      </div>
      <img src={img}></img>
      <img src={starIcon}></img>
      <p>5.0</p>
      <p>(6)</p>
      <div></div>
      <p>USA</p>
      <p>Life lessons with Katie Zaferes</p>
      <p>From $136 / person</p>
    </div>
  )
};

export default Card;