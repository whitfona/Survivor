import React from 'react'

export default function TribeScoreAdminContestantsTable({ contestants, index, scores, setScores, sendScores }) {

  const handleChange = (e) => {
    const {name, value} = e.target;

    setScores(prevState => ({
      ...prevState,
      q: index+1,
      [name]: value
    }));
  }

  return (
    <div>
      <form className="contestant-form" onSubmit={sendScores}>
        <table>
          <tbody>
            <tr>
              <td>{contestants[0].Contestant_Name}</td>
              <td>{contestants[1].Contestant_Name}</td>
              <td>{contestants[2].Contestant_Name}</td>
              <td>{contestants[3].Contestant_Name}</td>
              <td>{contestants[4].Contestant_Name}</td>
              <td>{contestants[5].Contestant_Name}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td><input type="number" value={scores} name={contestants[0].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" value={scores} name={contestants[1].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" value={scores} name={contestants[2].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" value={scores} name={contestants[3].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" value={scores} name={contestants[4].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" value={scores} name={contestants[5].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>{contestants[6].Contestant_Name}</td>
              <td>{contestants[7].Contestant_Name}</td>
              <td>{contestants[8].Contestant_Name}</td>
              <td>{contestants[9].Contestant_Name}</td>
              <td>{contestants[10].Contestant_Name}</td>
              <td>{contestants[11].Contestant_Name}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td><input type="number" name={contestants[6].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" name={contestants[7].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" name={contestants[8].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" name={contestants[9].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" name={contestants[10].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" name={contestants[11].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>{contestants[12].Contestant_Name}</td>
              <td>{contestants[13].Contestant_Name}</td>
              <td>{contestants[14].Contestant_Name}</td>
              <td>{contestants[15].Contestant_Name}</td>
              <td>{contestants[16].Contestant_Name}</td>
              <td>{contestants[17].Contestant_Name}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td><input type="number" name={contestants[12].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" name={contestants[13].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" name={contestants[14].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" name={contestants[15].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" name={contestants[16].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
              <td><input type="number" name={contestants[17].Contestant_Name.replace(/ /g,"_")} onChange={handleChange} /></td>
            </tr>
          </tbody>
        </table>
        <button className="btn-secondary" type="submit">Submit Scores</button>
      </form>

    </div>
  )
}
