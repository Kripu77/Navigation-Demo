import React from 'react'
import Home from './Components/Home'
import ModalX from './Components/Modal'
import Sidebar from './Components/Sidebar'
import { data } from './data'
import "./CSS/Style.css"
const App = () => {
    return (
        <main>
            <Home/>
            <ModalX/>
            <Sidebar/>
        </main>
    )
}

export default App
