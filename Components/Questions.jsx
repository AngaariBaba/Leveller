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
    const [rageKey,SetKey] = useState(false);
   
    
    // Function to increment ActiveDay
    const AchArray = {1:"The Looper",3:"Been a while",5:"For-Loop King",21:"The Hasher!",8:"Array Awaker!",15:"The Binary Brawler!"}

   const CheckForAch =  async  () =>{
        if(ActiveDay==1 || ActiveDay==5 || ActiveDay == 3 || ActiveDay==12 || ActiveDay==21 || ActiveDay==8)
        {
            ShowAchi(true);
            SetAchMsg(AchArray[ActiveDay]);
            await axios.post("https://leveller-backend.onrender.com/setrank",{user,rank:AchArray[ActiveDay]});
            
        }
    }

    

    const IncrementActiveDays = async () => { 
        try {
            Setmessage(true);

            await axios.post("https://leveller-backend.onrender.com/increment", { username: user });   
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
                const response = await axios.post('https://leveller-backend.onrender.com/getquestions', { active_day: ActiveDay });
                const data = response.data.questions;
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
            </>:<>

           <Ach day={ActiveDay}/>
          
            </>}

        </div>
    );
};

export default Questions;
