import { createContext, useMemo, useState } from "react";


export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [week, setWeek] = useState(null);

  const value = useMemo(() => ({user, setUser, week, setWeek}), [user, setUser, week, setWeek])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}