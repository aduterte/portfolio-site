import React from "react"
import ProjectCard from "../components/ProjectCard"

export default function Projects(){
    return(
        <div className="projects-container">
            <h2>Technical Projects</h2>
            <div className="project-list">
                <ProjectCard content={{
                    img: "../images/trailflix.png",
                    name: "TrailFlix",
                    info: "A website where users can search for movies and watch their trailers.",
                    tech: ["Ruby", "Ruby on Rails","BCrypt", "React", "Javascript", "JSON Web Token"],
                    git: [{end: "Font End", link: "https://github.com/aduterte/trailflix-front-end"}, {end: "Back End", link: "https://github.com/aduterte/trailflix-back-end"}]}}/>
                <ProjectCard content={{
                    img: "../images/git-fit2.png",
                    name: "GitFit",
                    info: "A social media platform for fitness enthusiasts where users can create and log workouts, track their weight, and engage with other users.",
                    tech: ["Ruby", "Ruby on Rails","BCrypt", "React", "JSON Web Token", "ChartJS", "Recoil", "Nokogiri", "Javascript"],
                    git: [{end: "Font End", link: "https://github.com/aduterte/gitfit-frontend"}, {end: "Back End", link: "https://github.com/aduterte/gitfit-backend"}]}}/>
                <ProjectCard content={{
                    img: "../images/flatironhogwarts.png",
                    name: "Flatiron Hogwarts",
                    info: "A website where students can join classes and communities with social media elements.",
                    tech: ["Ruby", "Ruby on Rails","BCrypt"],
                    git: [{end: "Front/Back End", link: "https://github.com/aduterte/flat_iron_hogwarts"}]}}/>
            </div>
        </div>
    )
}