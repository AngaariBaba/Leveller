// src/Questions.js
import React, { useEffect, useState } from 'react';
import './Questions.css'; // Import the CSS
import { Link } from 'react-router-dom';
import axios from 'axios';

const Questions = ({user}) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ActiveDay,SetActiveDay] = useState(0);
    

    async function IncrementActiveDays()
    { 
        console.log(user," incrementing");
        await axios.post("http://localhost:3001/increment",{username:user});
    }

    useEffect(() => {

        async function GetActiveDay(user)
        {
            console.log("get active day ",user);
            const resp = await axios.post('http://localhost:3001/activeday',{user});
            console.log("26 ",resp.data.active_day);
            SetActiveDay(resp.data.active_day);
        }
        GetActiveDay(user);

        const fetchQuestions = async () => {
            try {
                const response = await axios.post('http://localhost:3001/getquestions',{active_day:ActiveDay});
                const data = response.data.questions;
                console.log(data);
                setQuestions(data);
            } catch (err) {
                setError(err.message);
            } finally {
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
            <h1 className="title">Questions to Solve Today ! Day {ActiveDay}</h1>
            <ul className="question-list">
                {questions.map((q) => (
                    <li  className="question-item">
                        {q}
                    </li>
                ))}
            </ul>
         <Link to="/mainmenu"> <button className='but'>Back</button>
         </Link>
          <button onClick={IncrementActiveDays} className='but'>Next</button> 
            </div>
    );
};

export default Questions;
