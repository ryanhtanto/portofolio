import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Avatar from '../images/avatar.png'

const Introduce = () => {
  return (
        <>
                <div className="introduce container mt-130">
                        <div className="row ">
                                <div className="col-lg-7 col-md-12 col-sm-12 ">
                                        <h1 className="fw-bold box-area m-0">Hello, </h1>
                                        <h1 className="fw-bold box-area m-0">I'm Ryan Hertanto.</h1>
                                        <TypeAnimation
                                                sequence={[
                                                        'Love hate relationship with programming',
                                                        2000,
                                                        'Web Developer',
                                                        2000,
                                                        'Javascript Developer',
                                                        2000,
                                                ]}
                                                wrapper="h5"
                                                className="mt-3 color-under"
                                                cursor={true}
                                                repeat={Infinity}
                                        />
                                        <p className="mt-5">Based in the metropolitan city of Tangerang, Indonesia. I am currently exploring as a programmer in <span className="fw-bold" style={{color: '#D3902A'}}>frontend web developer,</span> and got course certification from <a href="https://www.dicoding.com/certificates/RVZKK9GOOZD5" style={{textDecoration:'none', fontWeight: '700'}}><span className="fw-bold dicoding-certification">DICODING academy.</span></a></p>
                                        <p className="mt-3">I have experienced in frontend developer for one years, and exploring some programming language such as Javascript, PHP, Java, and Typescript, with their framework.</p>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
                                        <div className="card">
                                                <img src={Avatar} alt="avatar" className="card-img-top"/>
                                        </div>
                                </div>
                        </div>
                </div>
        </>
  );
}
 
export default Introduce;