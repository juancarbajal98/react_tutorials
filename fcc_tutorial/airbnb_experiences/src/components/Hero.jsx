import React from "react";
import ImageGrid from "./ImageGrid"

const Hero = () => {
  return(
    <React.Fragment>
      <ImageGrid/>
      <div className="hero--text">
        <h1>Online Experiences</h1>
        <h4>Join unique interactive activies led by one-of-a-kind hosts—all without leaving home.</h4>
      </div>
    </React.Fragment>
    

  )
};
export default Hero;