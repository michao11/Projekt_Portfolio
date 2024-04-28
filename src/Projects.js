import React from "react";
import ReactCardGame from "./react_card_game.png";
import ThreeJsGame from "./three_js_game.png"
import Arrow from "./arrow.svg"

function Projects() {
    return (
        <section className="projects hidden">
            <div className="projects-div">
                <div className="project">
                    <div className="div-arrow">
                        <h1>Check out my project</h1><img className="project-arrow" src={Arrow} alt="Check"></img>
                    </div>
                    <a href="https://github.com/michao11/Projekt_Gra_Karciana"><img className="thumbnail" src={ReactCardGame} alt="React Card Game"></img></a>
                    <h2>Brotato Card Game in React</h2>
                </div>
                <div className="project">
                    <div className="div-arrow">
                        <h1>Check out my project</h1><img className="project-arrow" src={Arrow} alt="Check"></img>
                    </div>
                    <a href="https://github.com/michao11/Gra_Three.js"><img className="thumbnail" src={ThreeJsGame} alt="Game in Three.js"></img></a>
                    <h2>Game in Three.js</h2>
                </div>
            </div>
        </section>
    )
}

export default Projects;
