
import React, {useState, useContext, createContext} from 'react'

export const navModalContext = React.createContext();
const ConTextPro = ({children}) => {

    const[isModalOpen, setIsModalOpen]= useState(false);
    const[isSideBarOpen, setIsSideBarOpen] = useState(false);

    //fn to control the action 

    const modalToggler= ()=>{
        setIsModalOpen(!isModalOpen)
    }
    const sideBarToggler = ()=>{
        setIsSideBarOpen(!isSideBarOpen)
    }
    return (
        <div>
            <navModalContext.Provider value={{isModalOpen, isSideBarOpen, modalToggler,sideBarToggler}}>
                {children}
            </navModalContext.Provider>
        </div>
    )
}


//setup custom hool

export const useNavModalContext = ()=>{
    return useContext(navModalContext);
}
export default ConTextPro
