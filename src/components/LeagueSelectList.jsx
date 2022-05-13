import Leagues from '../data/leagues'
import League from './League';

const LeagueSelectList = ({showList}) => {

  return (
    <div className='league-list'>
      {Leagues.map((league) => (
        <League key={league.id} league={league} showList={showList}/>
      ))}
    </div>
  );
}
export default LeagueSelectList;