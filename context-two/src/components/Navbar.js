import React ,{useState}from 'react'

import Header from './Header';
import { FaAffiliatetheme, FaBars } from "react-icons/fa";
import { useNavModalContext } from './context';
import data  from "./data";
import Navlinks from './Navlinks';


const Navbar = () => {
    const data = useNavModalContext();
    const{isSideBarOpen, sideBarToggler} = data;
    console.log(data)

  
    return (
      <main>
<h1> Kripu Khadka</h1>
<FaBars onClick={()=>sideBarToggler()}/>
        <div className={isSideBarOpen? "wrapper" : "hidden"}>
   

          <div className="nav-container">
            <h1> Kripu Khadka</h1>

            <FaAffiliatetheme onClick={()=>sideBarToggler()}/>
          </div>
          <Navlinks/>
        </div>
      </main>
    );
}

export default Navbar
