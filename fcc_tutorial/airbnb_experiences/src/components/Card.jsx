import React from "react";
import starIcon from "../images/star-icon.png"

const Card = (props) => {
  return(
    <div className="card">
      <section className="card--top">
        {props.card.status && <div className="card--status">{props.card.status.toUpperCase()}</div>}
        <img className="card--image" src={require(`../images/${props.card.coverImg}`)}></img>
      </section>

      <section className="card--bottom">
        <img className="card--star" src={starIcon}/>
        <span> {props.card.stats.rating} </span>
        <span className="gray">({props.card.stats.reviewCount}) • </span>
        <span className="gray">{props.card.country}</span>
        <p>{props.card.title}</p>
        <p><span className="bold">From ${props.card.price_USD} /</span> person</p>
      </section>
    </div>
  )
};

export default Card;