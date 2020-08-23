import React from "react"
import About from "./AboutSection"
import Projects from "./Projects"
import Blogs from "./BlogContainer"

export default function MainPage(){

    return (
        <div>
            
            <div className="hero-image-container">
            <a className="hidden-text" name="home">Alessandro Duterte</a>  
                <div className="top-container">
                    <div className="top-left">
                        <h2>Welcome</h2>
                    </div>
                    <div className="top-right">
                       
                    </div>
                </div>
            </div>
            <div>
            <a className="hidden-text" name="about">About Section</a>
                <About/>
            </div>
            <div>
            <a className="hidden-text" name="projects">Projects Section</a>
                <Projects/>
            </div>
            <div>
            <a className="hidden-text" name="blogs">Blogs Section</a>
                <Blogs/>
            </div>
        </div>
    )
}