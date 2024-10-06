import React, { useState } from "react";
import '../Components/Questions.css'
import { Link } from "react-router-dom";
import Notification from "../Components/Notification";

export default function IntroductionHW()
{

    const [Show,SetShow] = useState(false);

    return(<>
    <div className="container">
            <h1 className="title">Questions to Solve Today</h1>
            <ul className="question-list">
                    <li className="question-item">
                        Write Hello World Program in C/Java/C++ on an Online Compiler and press button below!
                    </li>
            </ul>
        <a href="https://www.programiz.com/cpp-programming/online-compiler/" target="_blank">
        <button className='but'>Compiler</button>
        </a>

         <Link to="/introduction"> <button className='but'>Back</button>
         </Link>

          <button onClick={()=>{SetShow(true);}} className='but'>Next</button>

            </div>

            {Show?(<div className="container"><Notification data="Woah Hotshot...Seems like you were serious...well what do i gotta call you?"/></div>):(<div className="container"><h1>No SMS</h1></div>)}
         {Show? <div className="container">
             <Link to="/register"> <button className="but">Continue..</button>
             </Link>
          </div> : <></> }
    </>);
}