import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const MoonContainer = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainMoon = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/moon.png') center/cover;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const MoonQuarter = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/moon.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const TopLeftQuarter = styled(MoonQuarter)`
  top: 0;
  left: 0;
  border-top-left-radius: 100%;
  transform-origin: bottom right;
  background-position: 0% 0%;
  padding-top: 25%;
  padding-left: 25%;
`;

const TopRightQuarter = styled(MoonQuarter)`
  top: 0;
  right: 0;
  border-top-right-radius: 100%;
  transform-origin: bottom left;
  background-position: 100% 0%;
  padding-top: 25%;
  padding-right: 25%;
`;

const BottomLeftQuarter = styled(MoonQuarter)`
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 100%;
  transform-origin: top right;
  background-position: 0% 100%;
  padding-bottom: 25%;
  padding-left: 25%;
`;

const BottomRightQuarter = styled(MoonQuarter)`
  bottom: 0;
  right: 0;
  border-bottom-right-radius: 100%;
  transform-origin: top left;
  background-position: 100% 100%;
  padding-bottom: 25%;
  padding-right: 25%;
`;

const MoonButton = ({ onHoverChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsExpanded(true);
    onHoverChange?.(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    onHoverChange?.(false);
  };

  const sections = [
    { name: 'Home', path: '/', component: TopLeftQuarter },
    { name: 'About', path: '/about', component: TopRightQuarter },
    { name: 'Experience', path: '/experience', component: BottomLeftQuarter },
    { name: 'Contact', path: '/contact', component: BottomRightQuarter },
  ];

  const quarterVariants = {
    initial: (index) => ({
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }),
    hover: (index) => ({
      x: index === 0 ? -20 : index === 1 ? 20 : index === 2 ? -20 : 20,
      y: index < 2 ? -20 : 20,
      scale: 1.05,
      rotate: index === 0 ? -5 : index === 1 ? 5 : index === 2 ? 5 : -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        mass: 1
      }
    })
  };

  return (
    <MoonContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {sections.map((section, index) => {
        const QuarterComponent = section.component;
        return (
          <QuarterComponent
            key={section.name}
            custom={index}
            variants={quarterVariants}
            initial="initial"
            animate={isExpanded ? "hover" : "initial"}
            whileHover={{ scale: 1.1, zIndex: 2 }}
            onClick={() => navigate(section.path)}
          >
            <span style={{ opacity: isExpanded ? 1 : 0 }}>{section.name}</span>
          </QuarterComponent>
        );
      })}
    </MoonContainer>
  );
};

export default MoonButton; 