import React from "react";

function Skills() {
    return (
        <section className="skills hidden">
            <div className="skills-div">
                <div className="skills-data">
                    <h1>Main skills</h1>
                </div>
                <div className="skills-info">
                    <div className="container-python">
                        <div className="python">
                            <span>Python</span>
                        </div>
                    </div>
                    <div className="container-c">
                        <div className="c">
                            <span>C++</span>
                        </div>
                    </div>
                    <div className="container-php">
                        <div className="php">
                            <span>PHP</span>
                        </div>
                    </div>
                    <div className="container-js">
                        <div className="js">
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <div className="container-sql">
                        <div className="sql">
                            <span>SQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
