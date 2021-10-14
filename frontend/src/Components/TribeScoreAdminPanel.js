import React, { useState, useEffect } from 'react'
import TribeScoreAdminContestantsTable from './TribeScoreAdminContestantsTable';
import axios from 'axios'

export default function AdvantageAdminPanel() {

  const [ week, setWeek ] = useState();
  const [ scores, setScores ] = useState({ week });
  const [ contestants, setContestants ] = useState({});
  const [ questions, setQuestions ] = useState({});
  const [ contestantsLoaded, setContestantsLoaded ] = useState(false);
  const [ questionsLoaded, setQuestionsLoaded ] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/survivors')
      .then((data) => {
        setContestants(data.data)
        setContestantsLoaded(true)
      })
      .catch((err) => console.log(err));
    axios.get('http://localhost:5000/mc-questions')
      .then((data) => {
        setQuestions(data.data)
        setQuestionsLoaded(true);
      })
      .catch((err) => console.log(err));
    axios.get('http://localhost:5000/week')
      .then((data) => {
        setWeek(data.data[0].week)
      })
      .catch((err) => console.log(err));
  }, [])

  // const contestants = [{"Contestant_ID":4,"Contestant_Name":"Eric E","Contestant_Tribe_One":"Yase","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":5,"Contestant_Name":"Heather A","Contestant_Tribe_One":"Luvu","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":6,"Contestant_Name":"Erika C","Contestant_Tribe_One":"Luvu","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":7,"Contestant_Name":"Genie C","Contestant_Tribe_One":"Ua","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":8,"Contestant_Name":"Ricard F","Contestant_Tribe_One":"Ua","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":9,"Contestant_Name":"Xander H","Contestant_Tribe_One":"Yase","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":11,"Contestant_Name":"Evvie J","Contestant_Tribe_One":"Yase","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":12,"Contestant_Name":"Danny M","Contestant_Tribe_One":"Luvu","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":13,"Contestant_Name":"Nasser M","Contestant_Tribe_One":"Luvu","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":17,"Contestant_Name":"Deshawn R","Contestant_Tribe_One":"Luvu","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":18,"Contestant_Name":"Brad R","Contestant_Tribe_One":"Ua","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":19,"Contestant_Name":"Jairus R","Contestant_Tribe_One":"Ua","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":20,"Contestant_Name":"Tiffany S","Contestant_Tribe_One":"Yase","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":21,"Contestant_Name":"Sydney S","Contestant_Tribe_One":"Luvu","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":22,"Contestant_Name":"Shantel S","Contestant_Tribe_One":"Ua","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":23,"Contestant_Name":"David V","Contestant_Tribe_One":"Yase","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":24,"Contestant_Name":"Liana W","Contestant_Tribe_One":"Yase","Contestant_Tribe_Two":"","Contestant_Finish_Position":""},{"Contestant_ID":25,"Contestant_Name":"Sara W","Contestant_Tribe_One":"Ua","Contestant_Tribe_Two":"","Contestant_Finish_Position":""}];
  // const questions = [{"MC_Admin_ID":1,"Question_Number":1,"MC_Questions":"Survives the week","MC_Point_Value":1},{"MC_Admin_ID":2,"Question_Number":2,"MC_Questions":"WINS Immunity (Group)","MC_Point_Value":2},{"MC_Admin_ID":3,"Question_Number":3,"MC_Questions":"WINS Reward (Group)","MC_Point_Value":1},{"MC_Admin_ID":4,"Question_Number":4,"MC_Questions":"WINS Immunity (Individual)","MC_Point_Value":5},{"MC_Admin_ID":5,"Question_Number":5,"MC_Questions":"WINS Reward (Individual)","MC_Point_Value":3},{"MC_Admin_ID":6,"Question_Number":6,"MC_Questions":"Is part of a reward (As an extra)","MC_Point_Value":2},{"MC_Admin_ID":7,"Question_Number":7,"MC_Questions":"LOSES a Reward or Immunity Challenge (Group)","MC_Point_Value":-2},{"MC_Admin_ID":8,"Question_Number":8,"MC_Questions":"LOSES a Reward or Immunity Challenge (Individual)","MC_Point_Value":-1},{"MC_Admin_ID":9,"Question_Number":9,"MC_Questions":"FINDS a “Hidden idol” (Maintains Possession)","MC_Point_Value":8},{"MC_Admin_ID":10,"Question_Number":10,"MC_Questions":"FINDS an “Advantage” (Not a clue)","MC_Point_Value":5},{"MC_Admin_ID":11,"Question_Number":11,"MC_Questions":"Earns/Buys an “Advantage” or “Clue”","MC_Point_Value":2},{"MC_Admin_ID":12,"Question_Number":12,"MC_Questions":"USES an “Advantage”","MC_Point_Value":1},{"MC_Admin_ID":13,"Question_Number":13,"MC_Questions":"PLAYS a hidden idol","MC_Point_Value":10},{"MC_Admin_ID":14,"Question_Number":14,"MC_Questions":"MAKES a fake idol","MC_Point_Value":10},{"MC_Admin_ID":15,"Question_Number":15,"MC_Questions":"Plays THEIR Fake Idol","MC_Point_Value":5},{"MC_Admin_ID":16,"Question_Number":16,"MC_Questions":"Someone plays YOUR fake idol","MC_Point_Value":7},{"MC_Admin_ID":17,"Question_Number":17,"MC_Questions":"Plays someone else’s fake idol","MC_Point_Value":-5},{"MC_Admin_ID":18,"Question_Number":18,"MC_Questions":"Goes home with an idol(s) in their pocket","MC_Point_Value":-5},{"MC_Admin_ID":19,"Question_Number":19,"MC_Questions":"Makes a tribe swap/switch","MC_Point_Value":7},{"MC_Admin_ID":20,"Question_Number":20,"MC_Questions":"Makes THE merge","MC_Point_Value":10},{"MC_Admin_ID":21,"Question_Number":21,"MC_Questions":"Plays their “Shot in the Dark” ","MC_Point_Value":5},{"MC_Admin_ID":22,"Question_Number":22,"MC_Questions":"“Shot in the Dark”  is Safe","MC_Point_Value":5},{"MC_Admin_ID":23,"Question_Number":23,"MC_Questions":"“Shot in the Dark”  is Not Safe","MC_Point_Value":-5},{"MC_Admin_ID":24,"Question_Number":24,"MC_Questions":"“Shot in the Dark”  is Not Safe but they survive","MC_Point_Value":8},{"MC_Admin_ID":25,"Question_Number":25,"MC_Questions":"Medically Evaluated","MC_Point_Value":-5},{"MC_Admin_ID":26,"Question_Number":26,"MC_Questions":"Medically Evaluated","MC_Point_Value":-5},{"MC_Admin_ID":27,"Question_Number":27,"MC_Questions":"Makes the final 3","MC_Point_Value":10},{"MC_Admin_ID":28,"Question_Number":28,"MC_Questions":"Makes the final 2","MC_Point_Value":15},{"MC_Admin_ID":29,"Question_Number":29,"MC_Questions":"Wins","MC_Point_Value":21}];

  const sendScores = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/update-main-challenge-questions', scores)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setScores({ week });
  }

  return (
    <>
    {(contestantsLoaded && questionsLoaded) && <div>
      <h2 className="my-1">Tribe Score Section</h2>


      {questions.map((question, index) => {
        return (
        <div className="my-2" key={index}>
          <p>{question.MC_Questions}</p>
          <TribeScoreAdminContestantsTable contestants={contestants} index={index} score={scores} setScores={setScores} sendScores={sendScores} />
        </div>
        )
      })}

    </div>}
    </>
  )
}
