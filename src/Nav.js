import React from "react"
import { useState, useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

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
        <div className="nav" style={{backgroundColor: pos === "top" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, .5)" }}>
          <div id="header" >
              <div className="header-text">alessandro</div>
              <img className="header-text" src="./images/logo.svg" alt="logo" id="logo"/>
              <div className="header-text">duterte</div>
          </div>
          
          <div id="nav">
            <Link className="header-link" to="/">Home</Link>
            <Link className="header-link" to="/blog">Blog</Link>
            <Link className="header-link" to="/projects">Projects</Link>
            <Link className="header-link" to="/contact">Contact</Link>
          </div>
      </div>
        
    )
}