import React, {useState, useEffect, useRef} from 'react'
import {FaBars, FaTwitter} from 'react-icons/fa'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Navbar = () => {
    const [navVisible, setNavVisible]= useState(false)
    const[width, setWidth] = useState(window.innerWidth)
     
    
      useEffect(()=>{
          if(window.innerWidth>800){
              setNavVisible(false)

          }
      },[width])
      

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
<h1 className='nav-heading'>Kripu <span> Khadka</span></h1>
<button className='nav-toggle' onClick={()=>setNavVisible(!navVisible)}><FaBars/></button>
 <ul className='social-icons'>
                    <li className='icons'><AiFillFacebook/></li>
                    <li className='icons'><AiFillInstagram/></li>
                    <li className='icons'><AiFillTwitterCircle/></li>
                </ul>

                </div>
                <div className={navVisible? 'show-container' : 'links-container'}>
                   <li className='link'> Home</li>
                       <li className='link'>About</li>
                           <li className='link'> Careers</li>
                               <li className='link'> Projects</li>
                                   <li className='link'>Contact</li>
                                    

                </div>
               
            </div>
        </nav>
    )
}

export default Navbar
