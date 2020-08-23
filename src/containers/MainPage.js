import React from "react"
import About from "./AboutSection"
import Projects from "./Projects"
import Blogs from "./BlogContainer"

export default function MainPage(){

    return (
        <div>
            
            <div className="hero-image-container">
            
            <div className="hidden-text" id="home">Alessandro Duterte</div>  
                <div className="top-container">
                    <div className="top-left">
                        <h2>Welcome</h2>
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
        </div>
    )
}