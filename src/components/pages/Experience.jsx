import React from 'react';
import styled from '@emotion/styled';

const ExperienceContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
`;

const CompanyName = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const Role = styled.h3`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
`;

const Date = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  line-height: 1.6;
`;

const Experience = () => {
  const experiences = [
    {
      company: "Tech Company A",
      role: "Senior Frontend Developer",
      date: "2021 - Present",
      description: "Led development of multiple React-based web applications, implemented modern UI/UX practices, and mentored junior developers."
    },
    {
      company: "Tech Company B",
      role: "Frontend Developer",
      date: "2019 - 2021",
      description: "Developed and maintained multiple web applications using React, Redux, and modern JavaScript features."
    },
    {
      company: "Tech Company C",
      role: "Junior Developer",
      date: "2018 - 2019",
      description: "Assisted in the development of web applications, focusing on responsive design and cross-browser compatibility."
    }
  ];

  return (
    <ExperienceContainer className="page">
      <Title>Experience</Title>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index}>
          <CompanyName>{exp.company}</CompanyName>
          <Role>{exp.role}</Role>
          <Date>{exp.date}</Date>
          <Description>{exp.description}</Description>
        </ExperienceCard>
      ))}
    </ExperienceContainer>
  );
};

export default Experience; 