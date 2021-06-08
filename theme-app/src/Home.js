import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Home(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className={`${theme}-theme-body page`}>
            <h1>Press the button for {theme === "light" ? "Dark" : "Light"} mode</h1>
            <button className={`${theme}-theme-button`} onClick={toggleTheme}>Switch Theme</button>        
        </div>
    )
}

export default Home