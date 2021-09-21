import React, {useState} from 'react'

const App = () => {
    const [count, setCount] =useState(0)
    return (
        <div>
           <h1> Hello this is our freshly cooked hotel customer counter machine</h1>
       <h2> {count}</h2>
       <button onClick={()=>{setCount(count+1)}}> Increment Count</button>
       <button onClick={()=>{setCount(count-1)}}> Increment Count</button>
       <button onClick={()=>{setCount(0)}}> Reset</button>
        </div>
    )
}

export default App
