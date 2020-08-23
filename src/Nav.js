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

    const styleTop = {backgroundColor: "rgba(0, 0, 0, 0)",
                      filter: "drop-shadow(3px 3px 4px rgb(0, 0, 0))"},
      styleMoved = {backgroundColor: "rgba(0, 0, 0)" , filter: ""}
  
    return (
        <div className="nav" style={pos === "top" ? styleTop : styleMoved}>
          {pos === "top" ? 
           <div id="header" >
            
           <div className="header-text">alessandro</div>
           <img className="header-text" src="./images/logo.svg" alt="logo" id="logo"/>
           <div className="header-text">duterte</div>
       </div>:
       <div id="header" >
            
       <div className="header-text">alessandro</div>
       <img className="header-text" src="./images/whitelogo.svg" alt="logo" id="logo"/>
       <div className="header-text">duterte</div>
   </div>}
         
          
          <div id="nav" style={pos === "top" ? styleTop : styleMoved}>
            <a className="header-link" href="#home">Home</a>
            
            <a className="header-link" href="#about">About</a>
            <a className="header-link" href="#projects">Projects</a>
            <a className="header-link" href="#blogs">Blog</a>
            <a className="header-link" href="#contac">Contact</a>
          </div>
      </div>
        
    )
}