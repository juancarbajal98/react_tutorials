import React from 'react';
import markerIcon from '../images/marker-icon.png'

const JournalEntry = (props) => {
  console.log(props)
  return (
    <div className="journalEntry">
      <img src={props.imageUrl}/>
      <section className="journalEntry--col">
        <div>
          <img className="journalEntry--marker-icon" src={markerIcon}/>
          <span className="journalEntry--location">{props.location.toUpperCase()}</span>
          <a className="journalEntry--google-maps" href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <p className="journalEntry--date bold">{props.startDate} - {props.endDate}</p>
        <p className="journalEntry--desc">{props.description}</p>
      </section>
    </div>
  )
};
export default JournalEntry;