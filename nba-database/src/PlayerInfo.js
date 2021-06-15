import React, {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"
import axios from "axios"

function PlayerInfo() {
    const [player, setPlayer] = useState([])
    const [team, setTeam] = useState([])
    const {teamSelected, playerSelected} = useParams()

    console.log(teamSelected)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://api-nba-v1.p.rapidapi.com/players/playerId/${playerSelected}`,
            headers: {
              'x-rapidapi-key': '3ffca1a831msh77c53d411b55c21p1ba000jsna874f24376fc',
              'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            setPlayer(response.data.api.players)
            console.log(response)
            }).catch(function (error) {
              console.error(error);
          });

          const options2 = {
            method: 'GET',
            url: `https://api-nba-v1.p.rapidapi.com/teams/teamId/${teamSelected}`,
            headers: {
              'x-rapidapi-key': '3ffca1a831msh77c53d411b55c21p1ba000jsna874f24376fc',
              'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options2).then(function (response) {
              setTeam(response.data.api.teams)
            console.log(response.data)
            }).catch(function (error) {
              console.error(error);
          });
    }, [])

    const teamDetails = team.map(teamInfo => {
        return (
            <div>
                <h1>{teamInfo.fullName}</h1>
            </div>
        )
    })

    const playerDetails = player.map(play => {
        console.log(play)
        return (
            <div  key={play.playerId}>
                <header>
                    <img 
                        height="200" 
                        width="200"
                        src={"https://www.freepnglogos.com/uploads/nba-logo-png/nba-all-star-game-full-team-lebron-team-giannis-18.png"} />
                    <h1 className="database">DATABASE</h1>
                </header>
                <h1>{play.firstName} {play.lastName}</h1>
                <h2>Height: {play.heightInMeters}</h2>
                <p>{play.firstName} {play.lastName} is from {play.country}, he played college basketball for {play.collegeName}. {play.firstName} was drafted in {play.startNba} and has been in the NBA for {play.yearsPro} years. He is {play.heightInMeters} meters tall and weighs {play.weightInKilograms} kilograms.</p>               
            </div>
        )
    })

    return (
        <div>
            {playerDetails}
            {teamDetails}
        </div>
    )
}

export default PlayerInfo