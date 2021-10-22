import React from 'react'
import { data } from '../data'
import { FaTimes } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div  className='sidebar-container'>
               <h1> Kripu Khadka</h1> 
               {/* sidebar close button */}
                <button> <FaTimes/></button>
               </div>
               <div className='list'>
           
            {
                data.map((value)=>{
                    const {id, url, name}= value;
                    return <div key={id} className='list-items'>
                     <a href={url}> {name}</a>
                    </div>

                })
            } </div>
            
           
        </div>
    )
}

export default Sidebar
