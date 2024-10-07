import React, { useEffect, useState } from 'react';
import './Questions.css'; // Import the CSS
import { Link } from 'react-router-dom';
import axios from 'axios';

const Questions = ({user,ActiveDay,SetActiveDay}) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message,Setmessage] = useState(false);
   
    
    // Function to increment ActiveDay
    const IncrementActiveDays = async () => { 
        try {
            console.log(user, " incrementing");
            Setmessage(true);

            await axios.post("http://localhost:3001/increment", { username: user });
            console.log("Setting active day ,",ActiveDay+1);   
            SetActiveDay();
           
            
        } catch (err) {
            console.error("Error incrementing active day:", err);
        }
    };

    

    // Fetch questions every time ActiveDay changes
    useEffect(() => {
      
       
        const fetchQuestions = async () => {
            try {
                console.log("Fetching questions for active day:", ActiveDay);
                const response = await axios.post('http://localhost:3001/getquestions', { active_day: ActiveDay });
                const data = response.data.questions;
                console.log("Questions fetched:", data);
                setQuestions(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    if (loading) {
        return <div className="loading">Loading questions...</div>;
    }

    if (error) {
        return <div className="error">Error fetching questions: {error}</div>;
    }

    return (
        <div className="container">
            <h1 className="title">Questions to Solve Today! Day {ActiveDay}</h1>
            <ul className="question-list">
                {questions.map((q, index) => (
                    <li key={index} className="question-item">
                        {q}
                    </li>
                ))}
            </ul>
            <Link to="/mainmenu">
                <button className="but">Back</button>
            </Link>
            <button onClick={IncrementActiveDays} className="but">Next</button>
            <br/>
            {message?<h2>Good Work...Come Back Tommorow!</h2>:<></>}

                    </div>
    );
};

export default Questions;
