import React from "react"
import ProjectCard from "../components/ProjectCard"

export default function Projects(){
    return(
        <div className="projects-container">
            <h2 className="section-name">Technical Projects</h2>
            <div className="project-list">
                <ProjectCard content={{
                    img: "../images/trailflix.png",
                    name: "TrailFlix",
                    info: "A website where users can search for movies and watch their trailers.",
                    tech: ["Ruby", "Ruby on Rails","BCrypt", "React", "Javascript", "JSON Web Token"],
                    git: [{end: "Font End", link: "https://github.com/aduterte/trailflix-front-end"}, {end: "Back End", link: "https://github.com/aduterte/trailflix-back-end"}],
                    bullets: ["Utilized theMovieDb api to seed the database", 
                    "Automated a way to organically grow the database the more a user uses the website",
                    "Utilized the youTube api to play the movie trailers",
                    "Utilized JSON Web Tokens and localStorage to store encrypted user information client-side"]}}/>
                <ProjectCard content={{
                    img: "../images/git-fit2.png",
                    name: "GitFit",
                    info: "A social media platform for fitness enthusiasts where users can create and log workouts, track their weight, and engage with other users.",
                    tech: ["Ruby", "Ruby on Rails","BCrypt", "React", "JSON Web Token", "ChartJS", "Recoil", "Nokogiri", "Javascript"],
                    git: [{end: "Font End", link: "https://github.com/aduterte/gitfit-frontend"}, {end: "Back End", link: "https://github.com/aduterte/gitfit-backend"}],
                    bullets: ["Deployed a Ruby on Rails backend with a React front end", "Implemented the Recoil State Management library to manage state across the app",
                    "Utilized Nokogiri web scraping to create an API for the backend",
                    "Utilized JSON Web Tokens and localStorage to store encrypted user information client-side"]}}/>
                <ProjectCard content={{
                    img: "../images/flatironhogwarts.png",
                    name: "Flatiron Hogwarts",
                    info: "A website where students can join classes and communities with social media elements.",
                    tech: ["Ruby", "Ruby on Rails","BCrypt"],
                    git: [{end: "Front/Back End", link: "https://github.com/aduterte/flat_iron_hogwarts"}],
                    bullets: ["Used a Ruby on Rails framework to build the front end and back end", "Utilized Bcrypt Ruby gem to encrypt user passwords for secure passwords", "Programmed an algorithm to sort users into their communities"]}}/>
            </div>
        </div>
    )
}