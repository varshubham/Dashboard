import React, { useState } from 'react'
import Card from './Card'



const Items=()=> {
    const datainitial = []
    const [data, setData] = useState(datainitial)

    
    const showdata = async () => {

        fetch('http://localhost:5000/api/data').then(response => response.json()).then(data =>setData(data))
    }

    

        return (
            <div className='container'>
            <div className='row my-2 '>
                {data.map((note) => {

                    return <Card note={note} key={note._id} />
                })}

                <button onClick={showdata}>Show all data</button>

            </div>
            </div>
        )
    }


    export default Items
