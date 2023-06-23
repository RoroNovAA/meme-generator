import React from "react";
import Logo from "../images/troll-face.png";

export default function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="logo" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">MemeGen - Personal Project</h4>
        </header>
    )
}