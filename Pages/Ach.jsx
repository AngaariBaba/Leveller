import React from "react";
import './Ach.css'; // Link to the CSS file

export default function Ach({rank}) {
    return (
        <div className="achievement-container">
            <h1 className="achievement-title">Rank Achieved:</h1>
            <h2 className="rank-title">{rank}!</h2>
            <div className="rank-badge">
                <p className="rank-text">You have unlocked a new level of mastery!</p>
            </div>
            <button style={{margin:15}}>Continue..</button>
        </div>
    );
}
