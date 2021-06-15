import React, {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"
import axios from "axios"


function Roster() {
    const [roster, setRoster] = useState([])
    const {teamSelected} = useParams()

    console.log(teamSelected)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://api-nba-v1.p.rapidapi.com/players/teamId/${teamSelected}`,
            headers: {
              'x-rapidapi-key': '3ffca1a831msh77c53d411b55c21p1ba000jsna874f24376fc',
              'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            setRoster(response.data.api.players)
            console.log(response)
            }).catch(function (error) {
              console.error(error);
          });
    }, [])

        const teamRoster = roster.map(rost => {
            console.log(rost)
            return (
                <div className="teamPosition" key={rost.playerId}>
                        <Link to={`/${rost.teamId}/${rost.playerId}:`} width="100" height="100" className="roster" >
                            <h3>{rost.firstName} {rost.lastName}</h3>
                        </Link>
                </div>
            )
        })
        console.log(roster)

    return (
        <div>
            <header>
                <img 
                    height="200" 
                    width="200"
                    src={"https://www.freepnglogos.com/uploads/nba-logo-png/nba-all-star-game-full-team-lebron-team-giannis-18.png"} />
                <h1 className="database">DATABASE</h1>
            </header>
            <div className="displayTeams">
                {teamRoster}               
            </div>
        </div>
    )
}

export default Roster 