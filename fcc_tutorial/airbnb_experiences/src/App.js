import React from 'react'
import "./styles.css" // styles
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import MapPractice from "./components/MapPractice" // components
import CardData from "./data"

const App = () => {
  const cards = CardData.map(card => {
    return <Card
      key={card.id}
      card={card}
    />
  })

  return (
    
    <React.Fragment>
       <Navbar/>
       <Hero/>
       <section className="cards">
       {cards}
       </section>
       {/* <MapPractice/> */}
    </React.Fragment>
  )
};
export default App;