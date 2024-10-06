import React, { useState } from "react";
import './Registration.css'; // Link to the CSS file
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login({setUser}) {

    const [data,SetData] = useState(
        {
        username:'',
        password:''
    });

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
            
            setUser(resp.data.profile[0].username);
            Nav('/continue');
        }
        else
        {
            console.log('failes');  
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
                </form>
            </div>
        </>
    );
}
