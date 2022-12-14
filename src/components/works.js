import React from "react";
import eva from "../images/portofolio/eva.png"
import vacay from "../images/portofolio/vacay.png"
import console from "../images/portofolio/console.png"
import colorBlind from "../images/portofolio/colorblind.png"
import coMoney from "../images/portofolio/CoMoney.png"

const Works = () => {
        return (
                <>
                        <div className="container works">
                                <h3 className="fw-bold box-area mt-5">Works</h3>
                                <p>Repository of projects that I worked before.</p>
                                <div className="row"> 
                                        <div className="col-lg-12">
                                                <ul className="brand-style-works">
                                                        <li data-aos="zoom-in"><a href="https://www.eva-hr.com/talent-management/"><img src={eva} alt="porto" /></a></li>
                                                        <li data-aos="zoom-in" data-aos-delay="300"><a href="https://expert-color-blind.web.app/"><img src={colorBlind} alt="porto" /></a></li>
                                                        <li data-aos="zoom-in" data-aos-delay="600"><a href="https://shiba-rent.000webhostapp.com/"><img src={console} alt="porto" /></a></li>
                                                        <li data-aos="zoom-in" data-aos-delay="900"><a href="https://shiba-vacation.000webhostapp.com/"><img src={vacay} alt="porto" /></a></li>
                                                        <li data-aos="zoom-in" data-aos-delay="1200"><a href="https://comoney-dicoding.web.app/"><img src={coMoney} alt="porto" /></a></li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default Works;