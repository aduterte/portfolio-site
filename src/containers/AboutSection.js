import React from "react"

export default function About(){
    let skills=["Ruby", "Rails", "SQL", "Javascript", "React", "Recoil", "Redux", "PHP", "HTML", "CSS", "Photoshop", "Illustrator"]
    return (
        <div className="about">
            <a name="about"></a>
            <h2>About Me</h2>
            <img className="about-pic" src="../images/about_pic.jpg"/>
            <p className="about-blurb">My Name is Alessandro Duterte, I'm a Full Stack Developer. I've performed a wide range of design and coding projects utilizing Ruby on Rails, HTML, CSS, API, and JavaScript.  Skilled problem-solver with a fast learning curve for cutting-edge technologies.  Known for a strong work ethic and professional demeanor, exceptional interpersonal skills, and the capacity to adhere to industry’s rules and regulations.</p>
            <h2>Technical Skills</h2>
            <div className="technical-skills-container">
                {skills.map(skill => <div className="technical-skill">{skill}</div>)}
            </div>
            <div className="resume-link">
                <a href="../files/alessandr_resume_2020.pdf">My Resume</a>
            </div>
            <div>
                <a href="https://github.com/aduterte"><img className="social-icon" src="../images/github_logo.png"/></a>
                <a href="https://www.linkedin.com/in/alessandro-duterte/"><img className="social-icon" src="../images/linkedinlogo.png"/></a>
                <a href="https://medium.com/@alexduterte"><img className="social-icon" src="../images/medium_logo.webp"/></a>
            </div>
        </div>
    )
}