import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Teams() {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-nba-v1.p.rapidapi.com/teams/league/standard',
            headers: {
              'x-rapidapi-key': '3ffca1a831msh77c53d411b55c21p1ba000jsna874f24376fc',
              'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              const newTeams = response.data.api.teams.filter(team => team.nbaFranchise === "1" && team.teamId !== "37")
              setTeams(newTeams)
          }).catch(function (error) {
              console.error(error);
          });
    }, [])

     const handleImgError = (e) => {
        e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pistons_logo17.svg/1200px-Pistons_logo17.svg.png"
    }

    const teamsListed = teams.map(team => {
        return (
            <div className="teamPosition" key={team.teamId}>
                <Link to={`/${team.teamId}`}>
                    <img  
                        width="150" 
                        height="150" 
                        onError={handleImgError} 
                        src={team.logo} alt={team.fullName}
                    />
                    <p>{team.fullName}</p>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <header>
                <img 
                    height="200" 
                    width="200"
                    src={"https://www.freepnglogos.com/uploads/nba-logo-png/nba-all-star-game-full-team-lebron-team-giannis-18.png"} 
                    alt="logo"/>
                <h1 className="database">  DATABASE</h1>
            </header>
            <div className="displayTeams">
                {teamsListed}               
            </div>
        </div>
    )
}


export default Teams