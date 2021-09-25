import React from 'react'

export default function MainChallengeTable({ questionAndResults} ) {

let countEric = 0, countHeather = 0, countErika = 0, countGenie = 0, countRicard = 0, countXander = 0, countEvvie = 0, countDanny = 0, countNasser = 0, countDeshawn = 0, countBrad = 0, countJairus = 0, countTiffany = 0, countSydney = 0, countShantel = 0, countDavid = 0, countLiana = 0, countSara = 0;

questionAndResults.map((result) => (
  countEric += (result.Eric_E * result.MC_Point_Value),
  countHeather += (result.Heather_A * result.MC_Point_Value),
  countErika += (result.Erika_C * result.MC_Point_Value),
  countGenie += (result.Genie_C * result.MC_Point_Value),
  countRicard += (result.Ricard_F * result.MC_Point_Value),
  countXander += (result.Xander_H * result.MC_Point_Value),
  countEvvie += (result.Evvie_J * result.MC_Point_Value),
  countDanny += (result.Danny_M * result.MC_Point_Value),
  countNasser += (result.Nasser_M * result.MC_Point_Value),
  countDeshawn += (result.Deshawn_R * result.MC_Point_Value),
  countBrad += (result.Brad_R * result.MC_Point_Value),
  countJairus += (result.Jairus_R * result.MC_Point_Value),
  countTiffany += (result.Tiffany_S * result.MC_Point_Value),
  countSydney += (result.Sydney_S * result.MC_Point_Value),
  countShantel += (result.Shantel_S * result.MC_Point_Value),
  countDavid += (result.David_V * result.MC_Point_Value),
  countLiana += (result.Liana_W * result.MC_Point_Value),
  countSara += (result.Sara_W * result.MC_Point_Value)
))

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr className="font-900">
              <th>Activity</th>
              <th>Points</th>
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
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>{countEric}</td>
              <td>{countHeather}</td>
              <td>{countErika}</td>
              <td>{countGenie}</td>
              <td>{countRicard}</td>
              <td>{countXander}</td>
              <td>{countEvvie}</td>
              <td>{countDanny}</td>
              <td>{countNasser}</td>
              <td>{countDeshawn}</td>
              <td>{countBrad}</td>
              <td>{countJairus}</td>
              <td>{countTiffany}</td>
              <td>{countSydney}</td>
              <td>{countShantel}</td>
              <td>{countDavid}</td>
              <td>{countLiana}</td>
              <td>{countSara}</td>
            </tr>
          </tbody>
            
          {questionAndResults.map((result, index) => (
            <tbody key={index}>
              <tr>
                <td>{result.MC_Questions}</td>
                <td>{result.MC_Point_Value}</td>
                <td>{result.Eric_E * result.MC_Point_Value}</td>
                <td>{result.Heather_A * result.MC_Point_Value}</td>
                <td>{result.Erika_C * result.MC_Point_Value}</td>
                <td>{result.Genie_C * result.MC_Point_Value}</td>
                <td>{result.Ricard_F * result.MC_Point_Value}</td>
                <td>{result.Xander_H * result.MC_Point_Value}</td>
                <td>{result.Evvie_J * result.MC_Point_Value}</td>
                <td>{result.Danny_M * result.MC_Point_Value}</td>
                <td>{result.Nasser_M * result.MC_Point_Value}</td>
                <td>{result.Deshawn_R * result.MC_Point_Value}</td>
                <td>{result.Brad_R * result.MC_Point_Value}</td>
                <td>{result.Jairus_R * result.MC_Point_Value}</td>
                <td>{result.Tiffany_S * result.MC_Point_Value}</td>
                <td>{result.Sydney_S * result.MC_Point_Value}</td>
                <td>{result.Shantel_S * result.MC_Point_Value}</td>
                <td>{result.David_V * result.MC_Point_Value}</td>
                <td>{result.Liana_W * result.MC_Point_Value}</td>
                <td>{result.Sara_W * result.MC_Point_Value}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  )
}
