import React, {useState, useEffect} from 'react';
import './styles.css'; // styles
import Header from './components/Header';
import InputForm from './components/InputForm';
import NewMemeButton from './components/NewMemeButton';
import MemeDisplay from './components/MemeDisplay';
import CounterPractice from './components/CounterPractice';

const App = () => {
  /* state */
  const [meme, setMeme] = useState({
    topText: '',
    bottomText:'',
    randomImage:''
  })
  const [allMemeImages, setAllMemeImages] = useState([])

  /* data fetch */
  const request_url = 'https://api.imgflip.com/get_memes'
  const memeRequest = async () => {
    const response = await fetch(request_url)
    const memeData = await response.json()
    setAllMemeImages(memeData.data.memes)
  }

  /* fetch data on load */
  useEffect(()=> { memeRequest()},[])

  return(
    <React.Fragment>
      <Header/>
      <section className="memeControls">
        <InputForm meme={meme} setMeme={setMeme}/>
        <NewMemeButton allMemeImages={allMemeImages} setMeme={setMeme}/>
      </section>
      <section className="memeDisplay">
        <MemeDisplay meme={meme}/>
      </section>
      {/* <CounterPractice/> */}
    </React.Fragment>
  )
};

export default App;