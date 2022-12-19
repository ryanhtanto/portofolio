import React,{useEffect}  from "react";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Introduce from "../components/introduce";
import Navbar from "../components/navbar";
import Resume from "../components/resume";
import Skills from "../components/skills";
import Works from "../components/works";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Main() {
        useEffect(() => {
                AOS.init();
        }, [])
  return (
        <>
                <header>
                        <Navbar />
                </header>
                <main className="wrapper">
                        <div className="section">
                                <Introduce />
                        </div>
                        <div className="section">
                                <Works />
                                <Resume />
                                <Skills />
                                <Contact />
                        </div>
                </main>
                <footer>
                        <Footer />
                </footer> 
        </>
  );
}
 
export default Main;