import React from "react";
import AppLogo from './app_logo.png';
import menuIcon from './menu-icon.svg'

function NavBar({ scrollToAboutMe, scrollToExperience, scrollToSkills, scrollToProjects, scrollToContact }) {
    return (
        <nav>
            <div className="nav-bar-logo">
                <img className="app-logo" src={AppLogo} alt="Logo"></img>
                <span className="nav-bar-span">Michał Obarek</span>
            </div>
            <div className="nav-bar-links">
                <button onClick={scrollToAboutMe}>About me</button>
                <button onClick={scrollToExperience}>Experience</button>
                <button onClick={scrollToSkills}>Skills</button>
                <button onClick={scrollToProjects}>Projects</button>
                <button onClick={scrollToContact}>Contact</button>
            </div>
            <img id="menu-icon" src={menuIcon} alt="Menu Icon"></img>
        </nav>
    )
}

export default NavBar;