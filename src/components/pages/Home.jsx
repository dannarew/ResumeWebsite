import React from 'react';
import styled from '@emotion/styled';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 15vh;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 700;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const MoonInstruction = styled.div`
  position: fixed;
  bottom: 15vh;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  backdrop-filter: blur(5px);
  z-index: 5;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Home = () => {
  return (
    <HomeContainer className="page">
      <Title>Portfolio</Title>
      <Subtitle>Welcome to my professional portfolio showcasing my skills, experience, and projects.</Subtitle>
      <MoonInstruction>Hover over the moon to explore</MoonInstruction>
    </HomeContainer>
  );
};

export default Home; 