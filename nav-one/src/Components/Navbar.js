import React, {useState, useEffect, useRef} from 'react'
import {FaBars, FaTwitter} from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
<h1 className='nav-heading'>Kripu <span> Khadka</span></h1>
<button className='nav-toggle'><FaBars/></button>
 <ul className='social-icons'>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>

                </div>
                <div className='links-container show-container'>
                    <p> Home
                    </p>
                    <p> About
                    </p>
                    <p> Careers
                    </p>
                    <p>
                        Projects
                    </p>
                    <p>Contact</p>
                </div>
               
            </div>
        </nav>
    )
}

export default Navbar
