import { useState } from "react";
import Team from "./shared/Team";

//function to update the teams list that gets displayed
const updateList = (teams) => {
  teamList = teams
  console.log(teamList)
}

let nbaTeams, mlbTeams

let teamList = []

//function to retrieve nba teams
async function getNbaTeams(update) {
  nbaTeams = await fetch("https://api-basketball.p.rapidapi.com/teams?league=12&season=2019-2020", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "api-basketball.p.rapidapi.com",
    "x-rapidapi-key": "89bac9e7d3mshfbf03620be19c46p11ee29jsnccfb3c02f3cf"
  }
  })
  .then(res => res.json())
  .then(data => data.response)
  .catch(err => {
    console.error(err);
  })
  update(nbaTeams)
}

//function to retrieve mlb teams
async function getMlbTeams(update) {
  mlbTeams = await fetch("https://api-baseball.p.rapidapi.com/teams?league=1&season=2020", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "api-baseball.p.rapidapi.com",
      "x-rapidapi-key": "89bac9e7d3mshfbf03620be19c46p11ee29jsnccfb3c02f3cf"
    }
  })
  .then(response => response.json())
  .then(data => data.response)
  .catch(err => {
    console.error(err);
  })
  update(mlbTeams);
}



const TeamSelectList = ({league}) => {
const [selectedList, setSelectedList] = useState()


  //set of teams selected

  //nba
  if(league === 'nba'){
    if(nbaTeams == null){
      getNbaTeams(updateList)
    } else{
      console.log('old teams')
      updateList(nbaTeams)
    }
  }

  //mlb
  if (league == 'mlb'){
    // getMlbTeams(updateList)
    if(mlbTeams == null){
      getMlbTeams(updateList)
    } else{
      console.log('old teams')
      // console.log({teamList})
      updateList(mlbTeams)
    }
  }

  return (
    <div className="team-list-bg">
      <div className="container">
        <div className="team-list-container">
        <h2>Teams</h2>
        <h3>{league}</h3>
        <div className="team-list">
          {teamList.map((team) => (
            <Team key={team.id} team={team}/>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSelectList;
