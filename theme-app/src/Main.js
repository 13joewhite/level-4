import React, {useContext} from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function Main(){
    return (
        <main className="main-body">
            <Switch>
                <Route exact path="/">
                    <Home /> 
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </main>
    )
}

export default Main