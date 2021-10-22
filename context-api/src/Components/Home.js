import React,{useContext} from 'react'
import{FaBars} from 'react-icons/fa'
//pass in the context value
import { useGlobalContext } from './Context';


const Home = () => {
const data = useGlobalContext();
console.log(data);

    return (
      <main>
        <button className="sidebar-toggle">
          <FaBars />
        </button>
        <div>
          <button className="modal-btn"> Show Modal</button>
        </div>
      </main>
    );
}

export default Home
