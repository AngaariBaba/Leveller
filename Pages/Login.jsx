import React, { useState } from "react";
import './Registration.css'; // Link to the CSS file
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

export default function Login({setUser}) {

    const [data,SetData] = useState(
        {
        username:'',
        password:''
    });
    const [loader,setloader] = useState(false);
    const [LoginFail,SetLoginFail] = useState(false); 

    const Nav = useNavigate();

    async function SendData()
    {
        console.log(data);
        const resp = await axios.post('http://localhost:3001/login',data);
        console.log(resp.data);

        if(resp.data.profile.length)
        {
            console.log("logged in");
            console.log(resp.data.profile[0].username);
            console.log("calling setuser ",setUser);
            setUser(resp.data.profile[0].username);

            console.log("Setting loader");
            setloader(true);
            setTimeout(() => {
                Nav('/continue')
            }, 5000);
          
        }
        else
        {
            console.log('failes');  
            SetLoginFail(true);
        }
    }


    return (
        <>
            <div className="container">
                <h2 className="form-title">Introduce yourself!</h2>
                <form className="form-container">
                  
                    <input onChange={(e)=>{
                        SetData({...data,username:e.target.value});
                    }} className="form-input" type="text" placeholder="Enter Username" />
                    <input onChange={(e)=>{
                        SetData({...data,password:e.target.value});
                    }} className="form-input" type="password" placeholder="Enter your password" />
                    <button onClick={(e)=>{
                        e.preventDefault();
                        SendData();
                    }} className="submit-button">Login</button>
                     <button onClick={(e)=>{
                       e.preventDefault();
                       Nav('/mainmenu');
                    }} className="submit-button">Back</button>
                </form>
            </div>
            {loader?<Loader/>:<></>}
            {LoginFail?<h2>Login Failed. Recheck Credentials Or Start New Campaign</h2>:<></>}
        </>
    );
}
