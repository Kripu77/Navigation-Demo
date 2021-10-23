
import React,{useContext, useState} from 'react'

//create a context

export const mainContextProvider = React.createContext();

const MainContext = ({children}) => {

//we will set state for our actions that we want to happen

const [isModalOpen, setIsModalOpen]= useState(false);
const [isSideBarOpen, setIsSideBarOpen]= useState(false);


//fn's for changing state
const modalOpen = ()=>{
    return setIsModalOpen(true);

}

const modalClose = ()=>{
    return setIsModalOpen(false);

}

const sideBarOpen = ()=>{
    return setIsSideBarOpen(!isSideBarOpen);
}

const sideBarClose = ()=>{
    return setIsSideBarOpen(false)
}
    return (
        <div>
            <mainContextProvider.Provider value={{isModalOpen, isSideBarOpen, modalClose, modalOpen, sideBarOpen, sideBarClose}}>
                {children}
            </mainContextProvider.Provider>
            
        </div>
    )
}

//custom hook

export const useMainContext = ()=>{
    return useContext(mainContextProvider);
}
export default MainContext
