import React from 'react';
import styled from '@emotion/styled';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer className="page">
      <Title>About Me</Title>
      <Content>
        <Paragraph>
          I am a passionate developer with expertise in modern web technologies.
          My journey in software development began with a curiosity for creating
          beautiful and functional user experiences.
        </Paragraph>
        <Paragraph>
          I specialize in React development and have experience with various
          front-end technologies. I'm always eager to learn new technologies
          and best practices to deliver exceptional results.
        </Paragraph>
        <Paragraph>
          When I'm not coding, I enjoy exploring new technologies, contributing
          to open-source projects, and sharing my knowledge with the developer
          community.
        </Paragraph>
      </Content>
    </AboutContainer>
  );
};

export default About; 