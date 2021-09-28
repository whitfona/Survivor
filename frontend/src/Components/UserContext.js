import { createContext, useMemo, useState } from "react";


export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

  const [user, setUser] = useState(1);
  const [week, setWeek] = useState(null);
  const [playerAdvantageScores, setPlayerAdvantageScores] = useState([]);
  const [playerWeeklysScores, setPlayersWeeklyScores] = useState([]);
  const [survivorScores, setSurvivorScores] = useState([]);

  const value = useMemo(() => ({user, setUser, week, setWeek, playerAdvantageScores, setPlayerAdvantageScores, playerWeeklysScores, setPlayersWeeklyScores, survivorScores, setSurvivorScores}), [user, setUser, week, setWeek, playerAdvantageScores, setPlayerAdvantageScores, playerWeeklysScores, setPlayersWeeklyScores, survivorScores, setSurvivorScores])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}