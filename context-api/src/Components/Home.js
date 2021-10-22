import React,{useContext} from 'react'
import{FaBars} from 'react-icons/fa'
//pass in the context value
 import { useMainContext } from './Context';


const Home = () => {
const data = useMainContext();
//destructure it
const{
    isModalOpen, isSiderBarOpen, sideBarClose, sideBarOpen
} = data;
console.log(data)
    return (
      <main>
        <button className="sidebar-toggle" onClick={()=>sideBarOpen()}>
          <FaBars />
        </button>
        <div>
        
        </div>
      </main>
    );
}

export default Home
