import React, { useState } from "react";
import Notification from "../Components/Notification";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

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
   <Link to='/mainmenu'> <Button msg="back"/>
   </Link>
   
   <Link to='/introduction/forward'> <Button msg="next"/>
   </Link>
    </div>
    </>);
}

