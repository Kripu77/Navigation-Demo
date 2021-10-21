import React,{useState} from 'react'
import "./Style.css"
import {FiAlignJustify } from "react-icons/fi"
import Container from './Components/Container'
import Modal from './Components/ModalX'
import ModalX from './Components/ModalX'

const App = () => {
        const[visible, setVisible] = useState(false)
    return (
        <main>

       
        <div>
        
           <div className='main-container'>
               <div className='bars'>

         
               <FiAlignJustify onClick={()=>{setVisible(true)}}/>
                     </div>
               <div className={visible?"parent-container":"hide"}>
<Container setVisible={setVisible}/>

               </div>


           </div>
        
        </div>

        <ModalX/>
         </main>
    )
}

export default App
