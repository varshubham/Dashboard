import React, { useState } from 'react'
import Card from './Card'

import { useContext } from 'react'
import DataContext from '../context/DataContext'


const Test = () => {


  const datainitial = []
  const [data, setData] = useState(datainitial)
  const a = useContext(DataContext)

 


  const showdata = async () => {
   await fetch(`http://localhost:5000/api/data/topic/${a.state}`).then(response => response.json()).then(data => setData(data))
   
  }
  return (
    <div className='container'>
      <div className='row my-2'>
      {data.map((note) => {

        return <Card note={note} key={note._id} />
      })}

      <button onClick={showdata}>show data</button>
      </div>
    </div>
  )
}


export default Test

