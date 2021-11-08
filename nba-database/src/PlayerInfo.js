import React, {useState, useEffect} from "react"
import {useParams, useHistory} from "react-router-dom"
import axios from "axios"

function PlayerInfo() {
    const [player, setPlayer] = useState([])
    const [team, setTeam] = useState([])
    const {teamSelected, playerSelected} = useParams()
    const history = useHistory()


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
            }).catch(function (error) {
              console.error(error);
          });
    }, [])

    const teamDetails = team.map(teamInfo => {
        return (
            <div key={teamInfo.teamId}>
                <h1>{teamInfo.fullName}</h1>
            </div>
        )
    })

    const playerDetails = player.map(play => {
        function lengthConverter(){
            return play.heightInMeters * 3.2808
        }
        const feet = Math.floor(lengthConverter())
        const inches = Math.round((lengthConverter() - feet) * 12)

        function weightConverter(){
            return Math.floor(play.weightInKilograms * 2.2046)
        }

        return (
            <div key={play.playerId}>
                <h1>{play.firstName} {play.lastName}</h1>
                <h2>Height: {`${feet} Ft. ${inches} inches   `}</h2>
                <h3 className="info">{play.firstName} {play.lastName} is from {play.country}, he played college basketball for {play.collegeName}. {play.firstName} was drafted in {play.startNba} and has been in the NBA for {play.yearsPro} years. He is {`${feet} feet ${inches} inches`} tall and weighs {weightConverter()} lbs.</h3> 
                {teamDetails}              
            </div>
        )
    })

    function handleClick(){
        setTimeout(() => {
            history.push(`/${teamSelected}`)
        }, 500)
    }

    return (
        <div>
            <header>
                <button className="backBtn" onClick={handleClick}>Back</button>
                <img 
                    height="200" 
                    width="200"
                    src={"https://www.freepnglogos.com/uploads/nba-logo-png/nba-all-star-game-full-team-lebron-team-giannis-18.png"} 
                    alt="logo"/>
                <h1 className="database">  DATABASE</h1>
            </header>
            <div className="displayPlayer">
                {playerDetails}
            </div>
        </div>
    )
}

export default PlayerInfo