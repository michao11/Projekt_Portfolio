import React from "react";
import profile from './profile.png';

function AboutMe() {
    return (
        <section className="about-me hidden">
            <div className="about-me-div">
                <div>
                    <img className="about-me-img" src={profile} alt="Profile"></img>
                </div>
                <div className="about-me-for">
                    <div className="about-me-data">
                        <h1>Welcome</h1>
                    </div>
                    <div className="about-me-info">
                        <h3>Hello, my name is Michał Obarek</h3>
                        <h3>I'm a Back-End Developer</h3>
                        <h3>based in Zgierz, Poland</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
