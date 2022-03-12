import React from 'react'
import VerticalBar from '../d3/Newchart';

const card = (props) => {
  const { note } = props;
  const intensity = note.intensity.toString();
  const likelihood = note.likelihood.toString();
  const relevance = note.relevance.toString();
  return (
    <div >
      <div className="card my-3"  >
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <div className="d-flex">
          <VerticalBar data={intensity} domain="Intensity"/> 
          <VerticalBar data={likelihood} domain="Likelihood"/>
          <VerticalBar data={relevance} domain="Relevance"/>
           <div className='m-3'>
            Start Year : {note.start_year}<br/>
            End Year : {note.end_year}<br/>
            Country : {note.country}<br/>
            Topic : {note.topic}<br/>
            Region : {note.region}<br/>
            Sector : {note.sector}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card


