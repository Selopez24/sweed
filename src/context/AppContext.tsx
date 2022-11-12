import React, { useState, FC } from "react";

interface Props {
  children?: React.ReactNode;
  userData: {};
  isLoggedIn: boolean;
}

export const AppContext = React.createContext({
  userData: {},
  isLoggedIn: false,
});

export const AppContextProvider: FC<Props> = ({ children }) => {
  const [contextValue, setContextValue] = useState({
    userData: {},
    isLoggedIn: false,
  });

  return (
    <AppContext.Provider value={{ userData: {}, isLoggedIn: false }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
