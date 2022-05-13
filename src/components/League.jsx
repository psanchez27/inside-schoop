import Button from "./shared/Button";

const League = ({league, showList}) => {
  return (
    <Button league={league} background={`images/${league.league}-logo.png`} showList={showList} />
  );
};

export default League;
