import React from "react"
import About from "./AboutSection"
import Projects from "./Projects"
import Blogs from "./BlogContainer"
import ContactContainer from "./ContactSection"

export default function MainPage(){

    return (
        <div>
            
            <div className="hero-image-container">
            
            <div className="hidden-text" id="home">Alessandro Duterte</div>  
                <div className="top-container">
                    <div className="top-left">
                        <div className="welcome-message">
                            Hi,<br/>
                            My Name is Alessandro.<br/>
                            I'm a Software Engineer.
                        </div>
                    </div>
                    <div className="top-right">
                    </div>
                </div>
            </div>
            <div>
                <div className="hidden-text" id="about">About Section</div>
                <About/>
            </div>
            <div>
                <div className="hidden-text" id="projects">Projects Section</div>
                    <Projects/>
            </div>
            <div>
                <div className="hidden-text" id="blogs">Blogs Section</div>
                <Blogs/>
            </div>
            <div>
                <div className="hidden-text" id="contact">Contact Section</div>
                <ContactContainer/>
            </div>
        </div>
    )
}