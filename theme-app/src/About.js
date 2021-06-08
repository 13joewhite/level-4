import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function About(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className={`${theme}-theme-body page`}>
            <h1>This is a website fully devoted to switching between two color themes.</h1>
            <h2>Press the button to see how it works!</h2>
            <button className={`${theme}-theme-button`} onClick={toggleTheme}>Switch Theme</button>
        </div>
    )
}

export default About