import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const ExperienceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h2`
  color: white;
  margin: 0;
  font-size: 1.6rem;
  padding-bottom: 0.5rem;
`;

const RoleContainer = styled.div`
  width: 100%;
  height: calc(100% - 3.5rem);
  position: relative;
  overflow: hidden;
`;

const RoleCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  position: absolute;
  top: 0;
  left: 0;
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

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LogoSection = styled.div`
  width: 113px;
  height: 113px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  padding: 0;
  overflow: hidden;
  margin-top: -0.5%;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const RoleTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin: 0;
  padding-bottom: 0.3rem;
`;

const Company = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  margin: 0;
  padding-bottom: 0.3rem;
`;

const Date = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  margin: 0;
  padding-bottom: 0.8rem;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.5;
  white-space: pre-line;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 0.5rem;
  height: 1.5rem;
`;

const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const NavigationArrows = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
  height: 1.5rem;
  pointer-events: none;
`;

const ArrowButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;
  color: white;
  font-size: 1rem;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const Experience = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const roles = [
    {
      title: "Information Technology Support Specialist",
      company: "Marist University",
      date: "Mar. 2024 - Aug. 2024",
      description: "Provided technical support and assistance to university staff and students.\n\n• Communicate with managers to set up campus computers used on campus\n• Assess and troubleshoot computer problems brought by students, faculty and staff\n• Maintain upkeep of computers, classroom equipment, and 200 printers across campus"
    },
    {
      title: "Resident Assistant",
      company: "Marist University",
      date: "Mar. 2025 - Present",
      description: "Oversee residential community of 75+ undergraduate students, fostering academic success and personal development.\n\n• Manage a college residence hall of 75+ diverse undergraduate students\n• Create a residence hall conducive to academic, personal, and social growth\n• Collaborate with other RA's on initiatives resulting in a safe, and enjoyable living environment\n• Serve as a role model for students by behaving in a mature and responsible manner, using good judgment, and abiding by institutional policies"
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handleDotClick = (index) => {
    setDirection(index > currentRole ? 1 : -1);
    setCurrentRole(index);
  };

  const handlePrevRole = () => {
    if (currentRole > 0) {
      setDirection(-1);
      setCurrentRole(currentRole - 1);
    }
  };

  const handleNextRole = () => {
    if (currentRole < roles.length - 1) {
      setDirection(1);
      setCurrentRole(currentRole + 1);
    }
  };

  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      <RoleContainer>
        <AnimatePresence initial={false} custom={direction}>
          <RoleCard
            key={currentRole}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <ContentSection>
              <RoleTitle>{roles[currentRole].title}</RoleTitle>
              <Company>{roles[currentRole].company}</Company>
              <Date>{roles[currentRole].date}</Date>
              <Description>{roles[currentRole].description}</Description>
            </ContentSection>
            {(currentRole === 0 || currentRole === 1) && (
              <LogoSection>
                <Logo src="/marist.jpg" alt="Marist Logo" />
              </LogoSection>
            )}
          </RoleCard>
        </AnimatePresence>
      </RoleContainer>
      <NavigationArrows>
        <ArrowButton 
          onClick={handlePrevRole} 
          disabled={currentRole === 0}
          aria-label="Previous role"
        >
          ←
        </ArrowButton>
        <NavigationDots>
          {roles.map((_, index) => (
            <Dot
              key={index}
              active={currentRole === index}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </NavigationDots>
        <ArrowButton 
          onClick={handleNextRole} 
          disabled={currentRole === roles.length - 1}
          aria-label="Next role"
        >
          →
        </ArrowButton>
      </NavigationArrows>
    </ExperienceContainer>
  );
};

export default Experience; 