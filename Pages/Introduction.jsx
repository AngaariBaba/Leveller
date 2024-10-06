import React, { useState } from "react";
import Notification from "../Components/Notification";
import { Link } from "react-router-dom";

//STEP !:- Notification
//Solve the Hello World
//Step 3- Prompt for input

export default function Introduction()
{
    const [que,Setque] = useState('');

    return (<>
     <Notification data="Hey there, look another kid who wishes to be a programmer... 
                            Let's see if he can even make a Hello World program!"/>
                            
    <div style={{display:"flex",justifyContent:"center",margin:10}}>
   <Link to='/mainmenu'> <button style={{marginLeft:10}}>Back</button>
   </Link>
   
   <Link to='/introduction/forward'> <button style={{marginLeft:10}}>Next</button>
   </Link>
    </div>
    </>);
}

