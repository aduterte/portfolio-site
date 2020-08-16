import React from "react"
import About from "./AboutSection"
import Projects from "./Projects"
import Blogs from "./BlogContainer"

export default function MainPage(){

    return (
        <div>
            
            <div className="hero-image-container">
            <a className="hidden-text" name="home">Alessandro Duterte</a>  
                <h2>Welcome</h2>
            </div>
            <div>
            <a className="hidden-text" name="about">About Section</a>
                <About/>
            </div>
            <div>
                <Projects/>
            </div>
            <div>
                <Blogs/>
            </div>
        </div>
    )
}