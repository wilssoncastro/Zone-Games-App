import React from "react";
import { Link } from "react-router-dom";
import './styles/landingpage.css'


export default function LandingPage(){
   
   
    return(
        <div className="landingpage">
            <h2 className="Welcome"> WELCOME TO</h2>
            <h1 className="gamerzone">GAMER ZONE!</h1>
            <p className="pWelcome">Here you can find the best information<br/> about all the
               video games you can imagine.<br/> This site uses information 
               brought from an external API</p>
            <Link to = '/home'>
                <button className="buttonLanding">Let's go!</button>
            </Link>
            
            
        </div>
    )
}