import React from 'react';

const InputForm = ({meme, setMeme}) => {
  
  const handleNewText = (newText, objKey) => {
    setMeme((prevMeme) => { 
      return {
        ...prevMeme,
        [objKey]: newText
      }
    })
  }
  
  return(
  <div className="inputForm">
    <input 
    type="text"
    className="top-text" 
    placeholder="Top text"
    value={meme.topText}
    onChange={(e) => handleNewText(e.target.value, 'topText')}
    ></input>
    <input 
    type="text"
    className="bottom-text" 
    placeholder="Bottom text"
    value={meme.bottomText}
    onChange={(e) => handleNewText(e.target.value, 'bottomText')}
    ></input>
  </div>
  )
};

export default InputForm;