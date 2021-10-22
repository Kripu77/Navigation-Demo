

import React,{useContext} from 'react'
export const mainContextProvider = React.createContext();
// we will pass oour components via our children prop

const ContextMain = ({children}) => {
    return (
        <div>
            <mainContextProvider.Provider value={'hello'}>
                {children}
            </mainContextProvider.Provider>
        </div>
    )
}

//custom hook can be used which will enable us reducing importing useContext hook oftend
export const useGlobalContext = ()=>{
    return useContext(mainContextProvider)
}

export default ContextMain;
