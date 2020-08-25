import React from "react"
import ContactForm from "../components/ContactForm"

export default function ContactContainer(){
    return (
        <div className="contact-container" >
            <h2 className="section-name">
                Let's Connect!
            </h2>
            <ContactForm/>
            <div className="social-links">
                <a href="https://github.com/aduterte"><img className="social-icon" src="../images/github_logo.png" alt="git hub logo"/></a>
                <a href="https://www.linkedin.com/in/alessandro-duterte/"><img className="social-icon" src="../images/linkedinlogo.png" alt="linkedin logo"/></a>
                <a href="https://medium.com/@alexduterte"><img className="social-icon" src="../images/medium_logo.webp" alt="medium.com logo"/></a>
            </div>
            <div className="footer">© 2020 Alessandro Duterte</div>
        </div>
    )
}