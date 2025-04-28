import React from 'react';
import styled from '@emotion/styled';

const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

const Title = styled.h2`
  color: white;
  margin: 0;
  font-size: 1.6rem;
  padding-bottom: 0.5rem;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 3.5rem);
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;

const ResumeButton = styled.button`
  position: absolute;
  top: -5%;
  right: 0;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.2);
  background: #FFD700;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  backdrop-filter: blur(5px);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    background: #FFC800;
  }
`;

const AboutContent = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  line-height: 1.6;
  color: white;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }

  p {
    margin-bottom: 1.5rem;
    color: white;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    color: white;
  }

  li {
    margin-bottom: 0.5rem;
    color: white;
  }
`;

const About = () => {
  const handleResumeClick = () => {
    try {
      // Open resume PDF in a new tab with the correct filename
      const resumeWindow = window.open('/hexagon-portfolio/theDANresume.pdf', '_blank');
      if (!resumeWindow) {
        alert('Please allow pop-ups to view the resume');
      }
    } catch (error) {
      console.error('Error opening resume:', error);
      alert('Unable to open resume. Please try again.');
    }
  };

  return (
    <AboutContainer>
      <Title>About Me</Title>
      <ResumeButton onClick={handleResumeClick}>Resume</ResumeButton>
      <Content>
        <AboutContent>
          <p>
            Hello! I'm Daniel a dual Bachelor of Science student at Marist College, studying Computer Science and Biology, with an expected graduation date of May 2027. Throughout my time at Marist, I've developed a strong technical foundation through coursework in Object-Oriented Programming, Database Development, Web Development, Software Engineering, System Design, and Computer Organization.
          </p>
          
          <p>
            Beyond coursework, I've built practical experience through roles such as Information Technology Support Specialist and Resident Assistant. These experiences have sharpened my skills in troubleshooting, communication, leadership, and project management — all of which complement my technical abilities.
          </p>
          
          <p>
            I enjoy creating unique and helpful experiences, especially health related ones. I have led and contributed to several projects, including:
          </p>
          
          <ul>
            <li>
              <strong>Food Delivery App:</strong> Built a full-stack application using Python (Flask), SQL, JavaScript, HTML, and CSS, applying Agile methodologies to streamline development.
            </li>
            <li>
              <strong>CRUD REST API:</strong> Developed a scalable, Dockerized REST API with Java Spring Boot and deployed it to AWS, achieving 100% test coverage.
            </li>
            <li>
              <strong>Credit Card Segmentation:</strong> Built a data-driven customer segmentation tool using Python, Scikit-learn, and Streamlit, improving risk categorization accuracy.
            </li>
          </ul>
          
          <p>
            I have hands-on experience with technologies like Java, Python, C/C++, SQL, JavaScript, React, Docker, and more. I'm also passionate about exploring fields like machine learning and backend systems architecture.
          </p>
          
          <p>
            I'm currently seeking new opportunities and projects where I can apply my skills, continue learning, and contribute to forward-thinking teams.
          </p>
          
          <p>
            Let's connect :)
          </p>
        </AboutContent>
      </Content>
    </AboutContainer>
  );
};

export default About; 