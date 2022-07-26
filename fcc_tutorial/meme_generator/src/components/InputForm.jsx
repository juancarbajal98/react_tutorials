import React from 'react';

const InputForm = ({setMeme}) => {
  
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
    className="top-text" 
    placeholder="Top text"
    type="text"
    onChange={(e) => handleNewText(e.target.value, 'topText')}
    ></input>
    <input 
    className="bottom-text" 
    placeholder="Bottom text"
    type="text"
    onChange={(e) => handleNewText(e.target.value, 'bottomText')}
    ></input>
  </div>
  )
};

export default InputForm;