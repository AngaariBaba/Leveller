import React from "react";
import styled from "styled-components";

const FuturisticStack = ({ items }) => {
  return (
    <Container>
      <Heading>Achievement :- Stack Slayer!</Heading>
      <StackContainer>
        {items.map((item, index) => (
          <StackItem key={index}>
            <Content>{item}</Content>
          </StackItem>
        ))}
      </StackContainer>
    </Container>
  );
};

// Styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  color: #0ff; /* Neon-like color */
  font-size: 28px;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
  margin-bottom: 20px;
  font-family: "Orbitron", sans-serif;
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StackItem = styled.div`
  width: 300px;
  padding: 20px;
  background: rgba(50, 50, 50, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.7), inset 0 0 20px rgba(0, 255, 255, 0.3);
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.5), transparent);
    animation: shine 2s infinite;
  }

  &:hover {
    box-shadow: 0 0 20px rgba(0, 255, 255, 1), inset 0 0 20px rgba(0, 255, 255, 0.5);
  }

  @keyframes shine {
    0% {
      left: -100%;
    }
    50% {
      left: 100%;
    }
    100% {
      left: -100%;
    }
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

// Usage Example
export default function Stack() {
  const items = ["", "", "", ""];
  return <FuturisticStack items={items} />;
}
