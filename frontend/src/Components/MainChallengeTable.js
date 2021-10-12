import React from 'react'

export default function MainChallengeTable({ questionAndResults, totals } ) {

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr className="font-900">
              <th className="sticky-col-1">Activity</th>
              <th className="sticky-col-2">Points</th>
              <th>Eric E</th>
              <th>Heather A</th>
              <th>Erika C</th>
              <th>Genie C</th>
              <th>Ricard F</th>
              <th>Xander H</th>
              <th>Evvie J</th>
              <th>Danny M</th>
              <th>Nasser M</th>
              <th>Deshawn R</th>
              <th>Brad R</th>
              <th>Jairus R</th>
              <th>Tiffany S</th>
              <th>Sydney S</th>
              <th>Shantel S</th>
              <th>David V</th>
              <th>Liana W</th>
              <th>Sara W</th>
            </tr>
          </thead>
          {totals.map((result, index) => (
            <tbody key={index}>
              <tr>
                <td className="sticky-col-1"></td>
                <td className="sticky-col-2"></td>
                <td className="font-900">{result.Eric_E}</td>
                <td className="font-900">{result.Heather_A}</td>
                <td className="font-900">{result.Erika_C}</td>
                <td className="font-900">{result.Genie_C}</td>
                <td className="font-900">{result.Ricard_F}</td>
                <td className="font-900">{result.Xander_H}</td>
                <td className="font-900">{result.Evvie_J}</td>
                <td className="font-900">{result.Danny_M}</td>
                <td className="font-900">{result.Nasser_M}</td>
                <td className="font-900">{result.Deshawn_R}</td>
                <td className="font-900">{result.Brad_R}</td>
                <td className="font-900">{result.Jairus_R}</td>
                <td className="font-900">{result.Tiffany_S}</td>
                <td className="font-900">{result.Sydney_S}</td>
                <td className="font-900">{result.Shantel_S}</td>
                <td className="font-900">{result.David_V}</td>
                <td className="font-900">{result.Liana_W}</td>
                <td className="font-900">{result.Sara_W}</td>
              </tr>
            </tbody>
          ))}
          {questionAndResults.map((result, index) => (
            <tbody key={index}>
              <tr>
                <td className="sticky-col-1">{result.Question}</td>
                <td className="sticky-col-2">{result.Point_Value}</td>
                <td>{result.Eric_E}</td>
                <td>{result.Heather_A}</td>
                <td>{result.Erika_C}</td>
                <td>{result.Genie_C}</td>
                <td>{result.Ricard_F}</td>
                <td>{result.Xander_H}</td>
                <td>{result.Evvie_J}</td>
                <td>{result.Danny_M}</td>
                <td>{result.Nasser_M}</td>
                <td>{result.Deshawn_R}</td>
                <td>{result.Brad_R}</td>
                <td>{result.Jairus_R}</td>
                <td>{result.Tiffany_S}</td>
                <td>{result.Sydney_S}</td>
                <td>{result.Shantel_S}</td>
                <td>{result.David_V}</td>
                <td>{result.Liana_W}</td>
                <td>{result.Sara_W}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  )
}
