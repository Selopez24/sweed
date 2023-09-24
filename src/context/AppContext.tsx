import React, { useState, ReactNode, createContext } from "react";

interface Props {
  children: ReactNode;
}

interface ContextType {
  userData: Record<string, any>;
  isLoggedIn: boolean;
}

export const AppContext = createContext<ContextType>({
  userData: {},
  isLoggedIn: false,
});

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [contextValue, setContextValue] = useState({
    userData: {},
    isLoggedIn: false,
  });

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
