import React from "react";
import './RageBar.css'

export default function RageBar()
{
    return (<>
    <>
    
  <div className="loading">
  <h1 style={{fontSize:20}}> Rage : 100%</h1>
  <h1 style={{fontSize:20,}}> Streak : 0</h1>
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