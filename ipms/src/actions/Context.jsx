import React from 'react'
import { useState, createContext, useContext } from 'react'

const Context = createContext()

function ContextProvider({ children }) 
{
  const [isLogin, setIsLogin] = useState(true);
  const [accessLevel,setAccessLevel] = useState(5);
  
  return (
    <Context.Provider value={{isLogin,setIsLogin,accessLevel,setAccessLevel}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider

export const useGlobalContext = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error('useGlobalContext must be used within a Context.Provider')
    }
    return context

}
