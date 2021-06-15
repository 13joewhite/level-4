import './App.css';
import React from "react"
import Teams from "./Teams"
import Roster from "./Roster"
import PlayerInfo from "./PlayerInfo"
import {Switch, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <Teams />
        </Route>
        <Route exact path="/:teamSelected">
          <Roster />
        </Route>
        <Route path="/:teamSelected/:playerSelected">
          <PlayerInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
