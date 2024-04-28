import React from "react";
import Arrow from "./arrow.svg"
import ReactCardGame from "./react_card_game.png";
import ThreeJsGame from "./three_js_game.png"


function Project({item}) {
    return (
        <div className="project">
            <h1>Check out my project</h1>
            <img className="project-arrow" src={Arrow} alt="Check"></img>
            <a href="https://github.com/michao11/Projekt_Gra_Karciana"><img src={ReactCardGame} alt="React Card Game"></img></a>
            <h2>Brotato Card Game in React</h2>
            <a href="https://github.com/michao11/Gra_Three.js"><img src={ThreeJsGame} alt="Game in Three.js"></img></a>
            <h2>Game in Three.js</h2>
        </div>
    )
}

export default Project;
