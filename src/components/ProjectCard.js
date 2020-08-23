import React from "react"

export default function ProjectCard(props){

    const {img, info, name, tech, git} = props.content
    
    const test = () => {
        debugger
    }
    return(
        <div className="project-card">
            
            <div className="project-card-img" style={{backgroundImage: `url(${img})`}}>
                {/* <img src={props.img}/> */}
            </div>
            <div className="project-name">{name}</div>
            <div className="project-info">{info}</div>
            <div className="project-break"></div>
            <div className="project-header">Tech Used</div>
            <div className="project-tech-list">
                {tech.map(tech => <div className="project-tech" key={tech}>{tech}</div>)}
            </div>
            <div className="project-break"></div>
            <div className="project-tech-links">
                <img src="../images/github_logo.png"/>
                {git.map( git =><div className="project-git-link" key={git.end}><a href={git.link} target="_blank">{git.end}</a></div>)}
                
            </div>
        </div>
    )
}