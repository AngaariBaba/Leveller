import React from "react";
import styled from "styled-components";

const  Ach = () => {
  return (
    <>
    <StyledWrapper>
      <div className="spinner">
        <div className="spinner1" />
      </div>
      
    </StyledWrapper>
    <br/>
    <br/>
    <h2 style={{color:'black',boxShadow: '1px 5px 20px #7CF5FF',border:'solid 2px #7CF5FF',borderRadius:10,padding:5,backgroundColor:'#7CF5FF',width:600}}>Rank: Awaken Beast</h2>
    <br/>
    <h2 style={{color:'black',boxShadow: '1px 5px 20px #7CF5FF',border:'solid 2px #7CF5FF',borderRadius:10,padding:5,backgroundColor:'#7CF5FF',width:600}} >Streak: 1 day</h2>
    <br/>
    <h2 style={{color:'black',boxShadow: '1px 5px 20px #7CF5FF',border:'solid 2px #7CF5FF',borderRadius:10,padding:5,backgroundColor:'#7CF5FF',width:600}}>Items: 1 RageKey</h2>
    <br/>
    <h2 style={{color:'black',boxShadow: '1px 5px 20px #7CF5FF',border:'solid 2px #7CF5FF',borderRadius:10,padding:5,backgroundColor:'#7CF5FF',width:600}}>Weapons: 1 StackGun</h2>
    <br/>
    <h2 style={{color:'black',boxShadow: '1px 5px 20px #7CF5FF',border:'solid 2px #7CF5FF',borderRadius:10,padding:5,backgroundColor:'#7CF5FF',width:600}}>Rage: 100%</h2>

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

export default Ach;
