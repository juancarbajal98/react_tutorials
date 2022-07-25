import React from 'react';
import './styles.css'; // styles 
import Navbar from './components/Navbar'
import JournalEntry from './components/JournalEntry'
import JournalData from './data'; // data

const App = () => {
  const journalEntries = JournalData.map(entry => {
    return <JournalEntry
      key={entry.id}
      {...entry}
    />
  })
  return(
    <React.Fragment>
      <Navbar/>
      <section className="journalEntries">
        {journalEntries}
      </section>
    </React.Fragment>
  )
};

export default App;