import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"
import {Link} from "react-router-dom"

function Header() {
    const {theme} = useContext(ThemeContext)
    return (
        <header className={`${theme}-theme-header links`}>
            <Link className={`${theme}-theme-links`} to="/">Home</Link>
            <Link className={`${theme}-theme-links`} to="/about">About</Link>
            <Link className={`${theme}-theme-links`} to="/contact">Contact</Link>
        </header>
    )    
}

export default Header
