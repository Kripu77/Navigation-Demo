import React,{useState} from 'react'
import "./Style.css"
import {FiAlignJustify } from "react-icons/fi"
import Container from './Components/Container'

const App = () => {
        const[visible, setVisible] = useState(false)
    return (
        <div>
        
           <div className='main-container'>
               <div className='bars'>

         
               <FiAlignJustify onClick={()=>{setVisible(true)}}/>
                     </div>
               <div className={visible?"parent-container":"hide"}>
<Container setVisible={setVisible}/>

               </div>


           </div>
           <h1> Hi guys</h1>
        </div>
    )
}

export default App
