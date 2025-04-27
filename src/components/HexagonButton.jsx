import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const HexagonContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
`;

const Hexagon = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #FFD700;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  cursor: pointer;
`;

const HexagonSection = styled(motion.div)`
  position: absolute;
  width: 50%;
  height: 50%;
  background: #FFD700;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background: #FFC000;
  }
`;

const HexagonButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const sections = [
    { name: 'Home', path: '/', position: { top: '0%', left: '25%' } },
    { name: 'About', path: '/about', position: { top: '25%', left: '0%' } },
    { name: 'Experience', path: '/experience', position: { top: '25%', right: '0%' } },
    { name: 'Contact', path: '/contact', position: { bottom: '0%', left: '25%' } },
  ];

  const containerVariants = {
    collapsed: { scale: 1 },
    expanded: { scale: 1.2 },
  };

  const sectionVariants = {
    collapsed: { scale: 0, opacity: 0 },
    expanded: { scale: 1, opacity: 1 },
  };

  return (
    <HexagonContainer>
      <Hexagon
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      />
      {sections.map((section, index) => (
        <HexagonSection
          key={section.name}
          style={section.position}
          variants={sectionVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          transition={{ delay: index * 0.1 }}
          onClick={() => navigate(section.path)}
        >
          {section.name}
        </HexagonSection>
      ))}
    </HexagonContainer>
  );
};

export default HexagonButton; 