import React, { useEffect, useState } from 'react';
import './Questions.css'; // Import the CSS
import { Link } from 'react-router-dom';
import axios from 'axios';

const Questions = ({user}) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ActiveDay, SetActiveDay] = useState(-1);

    // Function to increment ActiveDay
    const IncrementActiveDays = async () => { 
        try {
            console.log(user, " incrementing");
            await axios.post("http://localhost:3001/increment", { username: user });
            SetActiveDay(prev => prev + 1); // Increment locally
        } catch (err) {
            console.error("Error incrementing active day:", err);
        }
    };

    // Fetch the Active Day once when the component mounts
    useEffect(() => {
        async function GetActiveDay(user) {
            try {
                console.log("get active day ", user);
                const resp = await axios.post('http://localhost:3001/activeday', { user });
                console.log("Active day fetched:", resp.data.active_day);
                SetActiveDay(resp.data.active_day);
            } catch (err) {
                setError("Failed to fetch active day");
            }
        }
        GetActiveDay(user);
    }, [user]);

    // Fetch questions every time ActiveDay changes
    useEffect(() => {
      
        if (ActiveDay === -1) return; // Don't fetch if ActiveDay hasn't been set yet

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
    }, [ActiveDay]);

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
        </div>
    );
};

export default Questions;
