import React from 'react'
import { data } from '../data'
import { FaTimes } from 'react-icons/fa'
import { useMainContext } from './Context'

const Sidebar = () => {
    const sideStatus = useMainContext();
  const{isSideBarOpen, sideBarOpen, sideBarClose} = sideStatus;
  console.log(isSideBarOpen)
    return (
        <div className={isSideBarOpen?"sidebar":"sidebar-hidden"}>
            <div  className='sidebar-container'>
               <h1> Kripu Khadka</h1> 
               {/* sidebar close button */}
                <button onClick={()=>sideBarOpen()}> <FaTimes/></button>
               </div>
               <div className='list'>
           
            {
                data.map((value)=>{
                    const {id, url, name, valuex}= value;
                    return <div key={id} className='list-items'>
                     <a href={url}> {name}</a>
                     <h5>{valuex}</h5>
                    </div>

                })
            } </div>
            
           
        </div>
    )
}

export default Sidebar
