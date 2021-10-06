import { createContext, useMemo, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

  const [ week, setWeek ] = useState(5);
  const [ currentPlayer, setCurrentPlayer ] = useState({});
  const [ authenticated, setAuthenticated ] = useState(false);

  const value = useMemo(() => ({ week, setWeek, currentPlayer, setCurrentPlayer, authenticated, setAuthenticated }), [ week, setWeek, currentPlayer, setCurrentPlayer, authenticated, setAuthenticated ]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}