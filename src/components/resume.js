import React from "react";
import { projects } from "../data/data";

function Resume() {
        return (
                <div className="container" id="resume">
                        <h3 className="fw-bold box-area mt-5">Resume</h3>
                        {projects.map((project) => (
                                <div className="container resume">
                                        <div className="row">
                                                <div className="col-lg-3 col-md-3 col-sm-12">
                                                        <p className="mb-0 fw-bold">{project.title}</p>
                                                        <p className="mt-0 fw-bold">{project.position}</p>
                                                </div>
                                                <div className="col-lg-6 col-md-7 col-sm-12">
                                                        <p className="m-0">{project.company}</p>
                                                        <p className="mt-0">{project.date}</p>
                                                        <ul>
                                                                <li>{project.desc1}</li>
                                                                <li>{project.desc2}</li>
                                                                <li>{project.desc3}</li>
                                                                <li>{project.desc4}</li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        ))}
                       
                        {/* <ResumeList/> */}
                </div>
        )   

}

export default Resume;