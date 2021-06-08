import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Footer(){
    const {theme} = useContext(ThemeContext)
    return (
        <footer className={`${theme}-theme-footer`}>
            <h3>This is the footer.</h3>
        </footer>
    )
}

export default Footer