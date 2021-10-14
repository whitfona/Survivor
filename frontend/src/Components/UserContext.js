import { createContext, useMemo, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

  const [ currentPlayer, setCurrentPlayer ] = useState({});
  const [ authenticated, setAuthenticated ] = useState(false);

  const value = useMemo(() => ({ currentPlayer, setCurrentPlayer, authenticated, setAuthenticated }), [ currentPlayer, setCurrentPlayer, authenticated, setAuthenticated ]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}