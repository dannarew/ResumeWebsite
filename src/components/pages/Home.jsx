import React from 'react';
import styled from '@emotion/styled';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
`;

const Home = () => {
  return (
    <HomeContainer className="page">
      <Title>Welcome to My Portfolio</Title>
      <Subtitle>Hover over the hexagon to explore</Subtitle>
    </HomeContainer>
  );
};

export default Home; 