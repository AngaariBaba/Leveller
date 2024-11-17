import React, { useState } from "react";
import './Registration.css'; // Link to the CSS file
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

export default function Login({setUser,setRank}) {

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
        setloader(true);
        console.log(data);
        const resp = await axios.post('https://leveller-backend.onrender.com/login',data);
        console.log(resp.data);

    

        if(resp.data.profile)
        {
            console.log("logged in");
            console.log(resp.data.profile.username);
            console.log("calling setuser ",setUser);
            setUser(resp.data.profile.username);
            setRank(resp.data.profile.rank);
        
            console.log("Setting loader");
           
            setTimeout(() => {
                Nav('/continue')
            }, 5000);
          
        }
        else
        {
            console.log('failes');  
            SetLoginFail(true);
            setloader(false);
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
                {loader?<Loader/>:<></>}
            </div>
           
            {LoginFail?<h2>Login Failed. Recheck Credentials Or Start New Campaign</h2>:<></>}
        </>
    );
}
