import React, {useState} from 'react'

const App = () => {
    
const [count, setCount] = useState(0);
    return (
        <div style={{textAlign:"center"}}>
            <h1> Hello this is the hotel number of customer booking counter</h1>
        <h2> {count} </h2>
         <button onClick = {()=>{setCount(0)}}>Reset</button>
        <button onClick={()=>{
            if(count>=10){
                alert("you have reached the max value")
            }
            else{
            setCount(count+1)}}
        }>
                
                
                Increase</button>



        <button onClick={()=>{
            if(count<=0){
                alert("you have reached the lowest value as possible")
            }
            else{
            setCount(count-1)}}}>Decrease</button>
       
        </div>
    )
}

export default App
