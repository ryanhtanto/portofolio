import React from "react";
import Logo from '../images/lightmode.png'
import LogoDark from '../images/darkmode.png'
import github from "../images/social/github.png"
import linkedin from "../images/social/linkedin.png"

const Navbar = () => {
  return (
        <>
                <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                                <img src={LogoDark} alt='logo' className="logo mt-3"/>
                                <div className="d-flex ms-auto mx-2 responsive-display-block">
                                        <a className="responsive-link px-2" href="https://github.com/ryanhtanto">
                                                <img src={github} alt="github" />
                                        </a>
                                        <a className="responsive-link" href="https://www.linkedin.com/in/ryan-hertanto-06aa531b6/">
                                                <img src={linkedin} alt="linkedin" />
                                        </a>
                                </div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav bg-none ms-auto">
                                                <li className="nav-item">
                                                        <a className="nav-link text-white" href="#home">Home</a>
                                                </li>
                                                <li className="nav-item">
                                                        <a className="nav-link text-white" href="#works">Works</a>
                                                </li>
                                                <li className="nav-item">
                                                        <a className="nav-link text-white" href="#resume">Resume</a>
                                                </li>
                                                <li className="nav-item">
                                                        <a className="nav-link text-white" href="#skills">Skills</a>
                                                </li>
                                                <li className="nav-item">
                                                        <a className="nav-link text-white" href="#contact">Contact</a>
                                                </li>
                                                <li className="nav-item">
                                                        <a className="nav-link" href="https://github.com/ryanhtanto">
                                                                <img src={github} alt="github" />
                                                        </a>
                                                </li>
                                                <li className="nav-item">
                                                        <a className="nav-link" href="https://www.linkedin.com/in/ryan-hertanto-06aa531b6/">
                                                                <img src={linkedin} alt="linkedin" />
                                                        </a>
                                                </li>

                                        </ul>
                                </div>
                        </div>
                </nav>
        </>
  );
}
 
export default Navbar;