import React from "react";
import imageGrid from "../images/image-grid-photos.png"

const Hero = () => {
  return(
    <section className="hero">
      <img className="hero--image" src={imageGrid}/>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activies led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
};
export default Hero;