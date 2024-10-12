import React, { useEffect, useState } from 'react';
import './Questions.css'; // Import the CSS
import { Link } from 'react-router-dom';
import axios from 'axios';
import Ach from '../Pages/Ach';
import Button from './Button';
import Items from './Items';

const Questions = ({user,ActiveDay,SetActiveDay}) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message,Setmessage] = useState(false);
    const [Achi,ShowAchi] = useState(false);
    const [AchMsg,SetAchMsg] = useState('');
   
    
    // Function to increment ActiveDay
    const AchArray = {1:"The Looper",3:"Been a while",5:"For-Loop King",12:"Heap Master"}

   const CheckForAch =  async  () =>{
        console.log(ActiveDay);
        if(ActiveDay==1 || ActiveDay==5 || ActiveDay == 3 || ActiveDay==12)
        {
            ShowAchi(true);
            SetAchMsg(AchArray[ActiveDay]);
            console.log("sending to setrank" , {user,rank:AchArray[ActiveDay]})
            await axios.post("http://localhost:3001/setrank",{user,rank:AchArray[ActiveDay]});
            
        }
    }

    const IncrementActiveDays = async () => { 
        try {
            console.log(user, " incrementing");
            Setmessage(true);

            await axios.post("http://localhost:3001/increment", { username: user });
            console.log("Setting active day ,",ActiveDay+1);   
            SetActiveDay();
            CheckForAch();
           
            
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
            <Items/>
          {!Achi?
           <>
            <h1 className="title">Questions to Solve Today! Day {ActiveDay}</h1>
            <h1 className="title" style={{color:'rgb(225,225,225)'}}>Dungeon Name : {questions[0].topic}</h1>
            <ul className="question-list">
                {console.log(questions)}
                {questions.map((q, index) => (
                    <a href={q.link} target="_blank"><li key={index} className="question-item">
                        {q.name}
                    </li>
                    </a>
                ))}
            </ul>
            <Link to="/mainmenu">
               <Button msg="back"/>
            </Link>
           {!message?<a onClick={()=>{IncrementActiveDays();
                CheckForAch();
            }} > <Button msg="Next"/></a>: <></>
        }
            <br/>
            {message?<h2>Good Work...Come Back Tommorow!</h2>:<></>}
            </>:<><Ach rank={AchMsg}/></>}

        </div>
    );
};

export default Questions;
