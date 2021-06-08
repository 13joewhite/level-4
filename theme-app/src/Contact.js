import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Contact(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className={`${theme}-theme-body page`}>
            <h1>There is no contact info. This isn't a real website!</h1>
            <h2>Click the button!!</h2>
            <button className={`${theme}-theme-button`} onClick={toggleTheme}>Switch Theme</button>       
         </div>
    )
}

export default Contact