import React from "react"
import { useState, useEffect} from "react"

export default function Nav () {
    
    const [pos, setPos] = useState("top");

    useEffect (()=>{
      document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 5){
          setPos("moved")
        } else {
          setPos("top")
        }
      })
    },[])

    // useEffect (document.addEventListener("scroll", e => {
      
    //     let scrolled = document.scrollingElement.scrollTop;
    //     if (scrolled >= 5){
    //       setPos("moved")
    //     } else {
    //       setPos("top") 
    //     }
      
    // }),[])

    return (
        <div className="nav" style={{backgroundColor: pos === "top" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0)" }}>
          <div id="header" >
              <div className="header-text">alessandro</div>
              <img className="header-text" src="./images/logo.svg" alt="logo" id="logo"/>
              <div className="header-text">duterte</div>
          </div>
          
          <div id="nav">
            <a className="header-link" href="#home">Home</a>
            
            <a className="header-link" href="#about">About</a>
            <a className="header-link" href="#projects">Projects</a>
            <a className="header-link" href="#blogs">Blog</a>
            <a className="header-link" href="#contac">Contact</a>
          </div>
      </div>
        
    )
}