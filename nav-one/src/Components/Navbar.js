import React, {useState, useEffect, useRef} from 'react'
import {FaBars, FaTwitter} from 'react-icons/fa'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
<h1 className='nav-heading'>Kripu <span> Khadka</span></h1>
<button className='nav-toggle'><FaBars/></button>
 <ul className='social-icons'>
                    <li className='icons'><AiFillFacebook/></li>
                    <li className='icons'><AiFillInstagram/></li>
                    <li className='icons'><AiFillTwitterCircle/></li>
                </ul>

                </div>
                <div className='links-container show-container'>
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
