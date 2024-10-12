import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AchCard from "../Components/AchCard";
import axios from "axios";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const  States = ({user}) => {


  const [rage,SetRage] = useState(0);
  const [rank,SetRanK] = useState('None');
  const [items,SetItems] = useState('None');
  const [Weapons,SetWeapons] = useState('None');
  const [streak,SetStreak] = useState(0);
  
    
   
  useEffect(()=>{
        async function GetStats()
        {
          const resp = await axios.post("http://localhost:3001/getstats",{user});
          SetRanK(resp.data.rank);
          SetStreak(resp.data.streak);
          SetRage(resp.data.rage);
        }
        GetStats();
    
  },[])

  return (
    <>
    <StyledWrapper>
      <div className="spinner">
        <div className="spinner1" />
      </div>
      
    </StyledWrapper>
    
    <br/>
    <br/>
    <h2 style={{color:'black',boxShadow: '1px 5px 20px #7CF5FF',border:'solid 2px #7CF5FF',borderRadius:10,padding:5,backgroundColor:'#7CF5FF',width:600}}>Rank: {rank}</h2>
    <br/>
    <h2 style={{color:'black',boxShadow: '1px 5px 20px #7CF5FF',border:'solid 2px #7CF5FF',borderRadius:10,padding:5,backgroundColor:'#7CF5FF',width:600}} >Streak: {streak} day</h2>
    <br/>
    <h2 style={{color:'black',boxShadow: '1px 5px 20px #7CF5FF',border:'solid 2px #7CF5FF',borderRadius:10,padding:5,backgroundColor:'#7CF5FF',width:600}}>Items: 1 RageKey</h2>
    <br/>
    <h2 style={{color:'black',boxShadow: '1px 5px 20px #7CF5FF',border:'solid 2px #7CF5FF',borderRadius:10,padding:5,backgroundColor:'#7CF5FF',width:600}}>Weapons: 1 StackGun</h2>
    <br/>
    <h2 style={{color:'black',boxShadow: '1px 5px 20px #7CF5FF',border:'solid 2px #7CF5FF',borderRadius:10,padding:5,backgroundColor:'#7CF5FF',width:600}}>Rage: {rage}%</h2>
    <br/>
   <Link to="/mainmenu"> <Button msg="Back"/>
   </Link>
    </>
  );
};

const StyledWrapper = styled.div`
  .spinner {
  background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
  width: 150px;
  height: 150px;
  animation: spinning82341 1.7s linear infinite;
  text-align: center;
  border-radius: 100px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
}

.spinner1 {
  background-color: rgb(36, 36, 36);
  width: 150px;
  height: 150px;
  border-radius: 50px;
  filter: blur(10px);
}

@keyframes spinning82341 {
  to {
    transform: rotate(360deg);
  }
}
`;

export default States;
