import React from 'react';

const NewMemeButton = ({allMemeImages, setMeme}) => {

  const handleClick= () => {
    let rand = allMemeImages[Math.floor(Math.random()*allMemeImages.length)].url;
    setMeme((prevMeme)=>{
      return {
        ...prevMeme,
        randomImage: rand
      }
    })
  }

  return (
    <React.Fragment>
      <button 
        className="newMemeButton"
        onClick={handleClick}
        >Get a new meme image 🖼
      </button>
    </React.Fragment>
  )
};

export default NewMemeButton;