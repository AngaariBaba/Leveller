import React, { useEffect,useState } from "react";
import styled from "styled-components";
import Button from '../Components/Button'
import { Link } from "react-router-dom";
import Key from "../Components/RageKey";
import RankBoost from "./RankBoost";
import Notification from "../Components/Notification";
import NeonHashmap from "../Components/Hashmap";


const Ach = ({rank,RageKey,day}) => {


  useEffect(()=>{

    
    const audio = new Audio("/ach.mp3");
    audio.play();
    console.log("key -> ",RageKey);
    console.log("Rank -> ",rank);
    console.log("Day -> ",day);

  },[])


  const AchArray = {1:"The Looper",4:"Been a while",5:"For-Loop King",12:"The Array king",14:"The Reaper!"}


  switch(day)
  {

    case 2 : return(<RankBoost rank="The Looper"/>);

    case 4: return(<RankBoost rank="For loop king"/>);
 
    case 6: return(<RankBoost rank={"Been a while"}/>);

    case 9: return(<><RankBoost rank={"Array Awaker!"}/> </>);
    
    case 13: return(<><Key/><h1 style={{color:'rgb(200,50,100)'}}>+1 Rage Key!</h1> <h2>This Key Gives you freedom to boost your rage by 10%</h2><br/><Notification data="Hey Hey heyyyyy!...LOOK WHOSE DOING SOOOO FREAKING GOOO!...Got a rage key huh? Make sure to use it wisely!"/><br/><Link to="/mainmenu"><Button msg="Continue,,"/></Link></>);

    case 15: return(<><RankBoost rank={"Binary Brawler!"}/> </>);
    
    case 22: return (<><NeonHashmap/><h1 style={{color:'yellow'}}>HashMap Unlocked!</h1> <h2>HashMap allows searching in Constant time! Making solutions from Quadratic to Linear </h2><br/>  <Notification msg="Okay so you unlocked the hashmap? Well it is indeed an amazing tool but remember a hashmap is not the best weapon in an interview!"/><br/><Button msg="continue"/></>)
  
    default : return (<h1>Loading...</h1>)
  };
  
  
};


export default Ach;