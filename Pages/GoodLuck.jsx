import React, { useEffect, useState } from "react";
import Ach from "./Ach";
import Notification from "../Components/Notification";
import './Landing.css';
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
function Goodluck({user})
{
    const [name,setName] = useState('');

   
    useEffect(()=>{

    async function Getname()
    {
        console.log("15 goodluck",user);
        
        const resp = await axios.post('https://leveller-backend.onrender.com/getname',{user});
        console.log(resp.data);
        const name = resp.data.name;
        setName(name);
    }

    Getname();

    },[]);

    return (<>
    <Notification  data= {`Welldone ${name},
    Now you gotta daily check out the Leveller device to stay updated on your tasks...Remember if you miss doing problems for one day you lose 10% of your rage and if your rage reaches 0 your challange is over!
    ` } />

   <Link to="/mainmenu"><Button msg="Continue"/></Link> 

    </>);

}
export default Goodluck;