import React,{useState, useContext} from 'react'

export const modalContext = React.createContext();



const Context = ({children}) => {
    const [isModalOpen, setIsModalOpen]= useState(false)

    //fn to check

    const modalToggler = ()=>{
 setIsModalOpen(!isModalOpen)
    }
    return (
        <div>
            <modalContext.Provider value={{isModalOpen, modalToggler}}>
                {children}
            </modalContext.Provider>
        </div>
    )
}

//custom hook

export const useModalHook = ()=>{
    return useContext(modalContext);
}

export default Context
