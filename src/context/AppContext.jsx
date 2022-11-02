import React, { useState } from 'react'


export const AppContext = React.createContext({
  userData: {},
  isLoggedIn: false
})


const AppContextProvider = ({ children }) => {

  const [contextValue, setContextValue] = useState({ userData: {}, isLoggedIn: false })

  const value = { contextValue, setContextValue }

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}



export default AppContextProvider
