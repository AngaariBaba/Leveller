import React from "react";
import './Landing.css'
import { Link } from "react-router-dom";
export default function MainMenu()
{
    const playSound = (music) => {
        const audio = new Audio(music); // Adjust the path as necessary
        audio.play();
      };
      playSound('/bgm.mp3')

      

    return(<>
     <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <div className="container">
          <h1 className="neon-text">Main Menu</h1>
          <p className="neon-text">Choose Options</p>
          <div className="buttons">
           <Link to='/introduction'><button onClick={()=>{playSound('./clickSmall.wav')}} className="neon-button start">New Campaign</button>
           </Link> 
          <Link to='/continue'>  <button onClick={()=>{playSound('./clickSmall.wav')}} className="neon-button give-up">Continue Campaign</button>
          </Link>
           <button onClick={()=>{playSound('./clickSmall.wav')}} className="neon-button give-up">My States</button>
           <Link to='/'> <button onClick={()=>{playSound('./Cancel.wav')}} className="neon-button give-up">Quit</button>
           </Link>
          </div>
        </div>
        {/* Background music */}
       
      </>
    );
}