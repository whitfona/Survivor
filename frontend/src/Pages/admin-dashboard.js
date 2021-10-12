import React, { useContext } from 'react'
import { UserContext } from '../Components/UserContext'
import WeeklysAdminPanel from '../Components/WeeklysAdminPanel'

export default function AdminDashboard() {

  const { setWeek } = useContext(UserContext);

  return (
    <div id="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="my-2">
        <label htmlFor="week">Set Week: </label>
        <select name="week" onChange={(e) => setWeek(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
        </select>
      </div>
  < WeeklysAdminPanel />
    </div>
  )
}