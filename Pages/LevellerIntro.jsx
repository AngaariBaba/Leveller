import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";

const Loader = () => {

  const Nav = useNavigate();

  setTimeout(() => {
    Nav('/mainmenu');  
  }, 53000);

  return (
    <>
    <StyledWrapper>
   <Link to="/mainmenu"><button style={{style:"white",position:'absolute',bottom:"10%",right:"10%",backgroundColor:'rgb(0,100,200)'}}>Skip..</button>
   </Link>
    <video
        autoPlay
        loop
        className="background-video"
        playsInline
        
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
        </StyledWrapper>
    
     </>
  );
};

const StyledWrapper = styled.div`
  /* Center loader and animate from bottom to top */
  .loader {
    display: flex;
    width: 10rem;
    height: 10rem;
    position: absolute;
    bottom: -15rem; /* Start from below the viewport */
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    align-items: center;
    animation: translateUp 5s forwards; /* Animation applied here */
    opacity: 0; /* Start transparent */
    filter: blur(5rem); /* Start blurry */
  }

  @keyframes translateUp {
    0% {
      bottom: -15rem; /* Initial position (off-screen) */
      opacity: 0; /* Fully transparent */
      filter: blur(5rem); /* Fully blurry */
    }
    100% {
      bottom: 45%; /* Final position */
      opacity: 1; /* Fully opaque */
      filter: blur(0); /* Clear */
    }
  }

  .head {
    width: 100%;
    height: 100%;
    background-color: #56c8d8; /* Bluish-green */
    border-radius: 50%;
    animation: move 3s linear infinite;
    box-shadow: 0 1rem 1rem #1fa19c;
    z-index: 1;
  }

  .eye {
    display: flex;
    position: absolute;
    width: 4rem;
    height: 4rem;
    background-color: #a8ffe1; /* Light teal */
    background: radial-gradient(rgba(255, 247, 247, 1) 20%, rgba(255, 170, 197, 1) 100%);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    z-index: 2;
    box-shadow: 0 0 1rem #56c8d8; /* Bluish-green glow */
    animation: move 5s alternate infinite;
  }

  .eye::before {
    content: "";
    display: flex;
    width: 1rem;
    height: 2rem;
    background-color: #000;
    background: radial-gradient(
      rgba(0, 0, 0, 1) 44%,
      #1fa19c 50%, /* Dark bluish-green */
      transparent 60%
    );
    border-radius: 50%;
    animation: blink 4s ease-in-out alternate infinite;
  }

  .flames {
    display: flex;
    position: absolute;
    z-index: 0;
  }

  .particle {
    display: flex;
    position: absolute;
    background-color: #56c8d8; /* Bluish-green particles */
    border-radius: 50%;
    filter: blur(0.3rem);
    border-top: 5px solid #1fa19c; /* Dark bluish-green */
    border-left: 5px solid #1fa19c; /* Dark bluish-green */
  }

  .flames::before {
    content: "";
    position: absolute;
    width: 8rem;
    height: 8rem;
    background: #56c8d8; /* Bluish-green */
    filter: blur(5rem);
    opacity: 0.5;
    border-radius: 50%;
    top: -8rem;
    left: -4rem;
    z-index: 4;
    animation: pulse 3s linear infinite;
  }

  /* Particle animations */
  .particle:nth-child(1) {
    width: 4rem;
    height: 4rem;
    top: -6rem;
    animation: move 7s alternate-reverse infinite;
  }

  .particle:nth-child(2) {
    width: 1.5rem;
    height: 1.5rem;
    top: -8rem;
    left: -5rem;
    animation: move 1.5s ease-in-out reverse infinite;
  }

  .particle:nth-child(3) {
    width: 4rem;
    height: 4rem;
    top: -5rem;
    left: -4rem;
    animation: move 8s alternate-reverse infinite;
  }

  .particle:nth-child(4) {
    width: 3rem;
    height: 3rem;
    top: -7.5rem;
    animation: move 4s alternate-reverse infinite;
  }

  .particle:nth-child(5) {
    width: 2rem;
    height: 2rem;
    top: -9rem;
    left: 1rem;
    animation: move 2.5s alternate-reverse infinite;
  }

  .particle:nth-child(6) {
    width: 2rem;
    height: 2rem;
    top: -6.8rem;
    left: -1.5rem;
    animation: move 5s alternate-reverse infinite;
  }

  .particle:nth-child(7) {
    width: 1rem;
    height: 1rem;
    top: -10rem;
    left: -1rem;
    animation: move 1.2s alternate-reverse infinite;
  }

  .particle:nth-child(8) {
    width: 1.3rem;
    height: 1.3rem;
    top: -7.5rem;
    left: -2rem;
    animation: move 2.5s alternate-reverse infinite;
  }

  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(4px, 6px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes blink {
    20% {
      transform: translate(0, 0);
      height: 2rem;
    }
    30% {
      height: 0;
    }
    40% {
      transform: translate(5px, 10px);
      height: 0;
    }
    50% {
      height: 2rem;
    }
    70% {
      transform: translate(-10px, -10px);
    }
    90% {
      transform: translate(0, 0);
    }
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export default Loader;
