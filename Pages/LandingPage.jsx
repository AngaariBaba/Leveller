import react from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

export default function LandingPage()
{
  const playSound = (music) => {
    const audio = new Audio(music); // Adjust the path as necessary
    audio.play();
  };

    return(<>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <div className="container">
          <h1 className="neon-text">Welcome to Leveller Challenge!</h1>
          <p className="neon-text">Take the idle if you dare!</p>
          <div className="buttons">
           <Link to='/mainmenu'> <button className="neon-button start" onClick={()=>{playSound('./click.wav');}}>Start Now</button></Link>
            <button className="neon-button give-up"  onClick={()=>{playSound('./Cancel.wav')}}>I give up</button>
          </div>
        </div>
        {/* Background music */}
        <audio
          id="background-music"
          src="https://www.fesliyanstudios.com/play-mp3/387"
          preload="auto"
        />
      </>
      );
}