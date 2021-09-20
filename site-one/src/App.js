import React, {useState} from 'react'

const App = () => {
    
const [count, setCount] = useState(0);
    return (
        <div style={{textAlign:"center"}}>
            <h1> Hello this is the hotel number of customer booking counter</h1>
        <h2> {count} </h2>
         <button onClick = {()=>{setCount(count)}}>Reset</button>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setCount(count-1)}}>Decrease</button>
       
        </div>
    )
}

export default App
