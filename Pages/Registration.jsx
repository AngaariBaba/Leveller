import React, { useState } from "react";
import './Registration.css'; // Link to the CSS file
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

export default function Registration({setuser}) {

    const [data,SetData] = useState(
        {name:'',
        username:'',
        password:''
    });

    const [registered,SetRegistered] = useState(false);
    const [Error,ShowMsg] = useState(false);

    const nav = useNavigate();

    async function SendData()
    {
        console.log(data);
        const resp = await axios.post('http://localhost:3001/register',data);
        console.log("THis is senddata",resp.data);

        if(resp.data.error)
        {
            ShowMsg(true);
            return;
        }

        SetRegistered(true);
        setuser(resp.data.username);

        setTimeout(() => {
            nav('/goodluck')
        }, 2000);
      
    }


    return (
        <>
            <div className="container">
                <h2 className="form-title">Introduce yourself!</h2>
                <form className="form-container">
                    <input onChange={(e)=>{
                        SetData({...data,name:e.target.value});
                    }} className="form-input" type="text" placeholder="Enter your name" />
                    <input onChange={(e)=>{
                        SetData({...data,username:e.target.value});
                    }} className="form-input" type="text" placeholder="Enter Username" />
                    <input onChange={(e)=>{
                        SetData({...data,password:e.target.value});
                    }} className="form-input" type="password" placeholder="Enter your password" />
                    <button onClick={(e)=>{
                        e.preventDefault();
                        SendData();
                    }} className="submit-button">Submit</button>
                </form>
                
                    {registered?<>
                    <Loader/></>:<></>}
                    {Error?<h2>User already exists..</h2>:<></>}
                   
            </div>

        </>
    );
}
