import DataContext from "./DataContext";
import { useState } from "react";

const DataState = (props)=>{
    
    const [state,setState] = useState(null)
    const [topic,setTopic] = useState(null)
    const [region,setRegion] = useState(null)
    const [sector,setSector]= useState(null)
    
    return(
        <DataContext.Provider value={{state,setState,topic,setTopic,region,setRegion,sector,setSector}}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataState