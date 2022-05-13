import { useState } from "react";
import Header from "./components/Header";
import SavedTeamsList from "./components/SavedTeamsList";
import TeamSelectForm from "./components/TeamSelectForm";
import TeamSelectList from "./components/TeamSelectList";

const App = () => {
  const [myList, setMyList] = useState()
  const [leagueSelect, setLeagueSelect] = useState()



  const showList = (league) => {
    //set leage select
    setLeagueSelect(league.league)
    //set pop up window
    const teamList = document.querySelector('.team-list-bg')
    //show team list window
    teamList.style.display = 'block'
    //close team list window
    window.addEventListener("click", e => e.target === teamList ? teamList.style.display='none' : false);
  }

  

  return (
    <>
      <Header />
      <div className="container">
        <TeamSelectForm showList={showList}/>
        <SavedTeamsList list={myList}/>
      </div>
      <TeamSelectList league={leagueSelect}/>
    </>
  );
};

export default App;
