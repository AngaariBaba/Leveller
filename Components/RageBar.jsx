import React from "react";
import './RageBar.css'

export default function RageBar({rage,streak,user})
{
    return (<>
    <>
    
  
  <div className="loading">
  {user?<h1 style={{fontSize:20}}> User : {user}</h1>: <h1 style={{fontSize:20}}> User : Unknown</h1>}
  <h1 style={{fontSize:20}}> Rage : {rage}%</h1>
  <h1 style={{fontSize:20,}}> Streak : {streak}</h1>
  
    <svg width="64px" height="48px">
      <polyline
        points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
        id="back"
      />
      <polyline
        points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
        id="front"
      />
    </svg>

 
  </div>
</>

    </>);
}