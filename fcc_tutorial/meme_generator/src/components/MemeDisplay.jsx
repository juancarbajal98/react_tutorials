import React from "react";

const MemeDisplay = ({meme}) => {
  return(
    <React.Fragment>
      <h1>{meme.topText}</h1>
      {meme.randomImage && <img src={meme.randomImage}/>}
      <h1>{meme.bottomText}</h1>
    </React.Fragment>
  )
};

export default MemeDisplay;