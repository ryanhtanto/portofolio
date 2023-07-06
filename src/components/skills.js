import React from "react";
import Firebase from "../images/skills/firebase.png"
import bootstrap from "../images/skills/bootstrap.png"
import react from "../images/skills/react.png"
import figma from "../images/skills/figma.webp"
import gsap from "../images/skills/gsap.png"
import laravel from "../images/skills/laravel.png"
import mysql from "../images/skills/mysql.png"
import redux from "../images/skills/redux.svg"
import materialUI from "../images/skills/materualUI.png"
import jest from "../images/skills/jest.png"
import cypress from "../images/skills/cypress.png"

function Skills () {
        return (
                <div className="container skills" id="skills">
                        <h3 className="fw-bold box-area mt-5">Skills</h3>
                        <p>Some Framework & Tools Knowledge</p>
                        <div className="col-lg-12">
                                <ul className="brand-style-2">
                                        <li><img src={bootstrap} alt="logo" /></li>
                                        <li><img src={Firebase} alt="logo" /></li>
                                        <li><img src={react} alt="logo" /></li>
                                        <li><img src={figma} alt="logo" /></li>
                                        <li><img src={gsap} alt="logo" /></li>
                                        <li><img src={laravel} alt="logo" /></li>
                                        <li><img src={mysql} alt="logo" /></li>
                                        <li><img src={redux} alt="logo" /></li>
                                        <li><img src={materialUI} alt="logo" /></li>
                                        <li><img src={jest} alt="logo" /></li>
                                        <li><img src={cypress} alt="logo" /></li>
                                </ul>
                        </div>
                </div>
        )
}

export default Skills;