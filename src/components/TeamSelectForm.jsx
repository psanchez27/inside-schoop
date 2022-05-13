import Card from './shared/Card'
import LeagueSelectList from './LeagueSelectList';

const TeamSelectForm = ({showList}) => {
  return (
    <Card>
      <h2 style={{textAlign: 'center'}}>Select Team</h2>
      <LeagueSelectList showList={showList}/>
    </Card>
  );
};

export default TeamSelectForm;
