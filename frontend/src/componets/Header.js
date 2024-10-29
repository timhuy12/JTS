import React from "react";
import logo from './Ametek-logo.png'
import './style.css'

function Header() {
    return (
        <div className="head">
            <header>
                <img src={logo} alt="Ametek Logo"/>
            </header>
        </div>
    )
}

export default Header