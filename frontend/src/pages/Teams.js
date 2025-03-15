import { useEffect, useState } from "react";
import axios from "axios";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/teams/list")
      .then((res) => setTeams(res.data));
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      {teams.map((team) => (
        <div key={team.id}>
          <h3>{team.name}</h3>
          <p>{team.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Teams;
