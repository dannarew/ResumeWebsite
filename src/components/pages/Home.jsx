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

const TextContainer = styled.div`
  position: fixed;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 5;
  opacity: ${props => props.isMoonHovered ? 0 : 1};
  transition: opacity 0.2s ease;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000,
    3px 3px 6px rgba(0, 0, 0, 0.7);
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  text-shadow: 
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000,
    2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const MoonInstruction = styled.div`
  position: fixed;
  bottom: 10vh;
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
  transition: opacity 0.2s ease;
  opacity: ${props => props.isMoonHovered ? 0 : 1};

  &:hover {
    opacity: 0.9;
  }
`;

const Home = ({ isMoonHovered }) => {
  return (
    <HomeContainer className="page">
      <TextContainer isMoonHovered={isMoonHovered}>
        <Title>Daniel Narewski</Title>
        <Subtitle>Welcome to my professional portfolio showcasing my skills, experience, and projects.</Subtitle>
      </TextContainer>
      <MoonInstruction isMoonHovered={isMoonHovered}>Hover over the moon to explore</MoonInstruction>
    </HomeContainer>
  );
};

export default Home; 