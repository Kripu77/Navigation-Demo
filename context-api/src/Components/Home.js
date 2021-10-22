import React,{useContext} from 'react'
import{FaBars} from 'react-icons/fa'
import { useGlobalContext } from './Context';
const Home = () => {
    const {isModalOpen} = useGlobalContext();

    return (
      <main>
        <button className="sidebar-toggle" onClick={()=>isModalOpen}>
          <FaBars />
        </button>
        <div>
          <button className="modal-btn"> Show Modal</button>
        </div>
      </main>
    );
}

export default Home
