import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const MoonContainer = styled.div`
  position: fixed;
  top: 50%;
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
  background: url('/moon.png') center/cover;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const MoonQuarter = styled(motion.div)`
  position: absolute;
  width: 50%;
  height: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: bold;
  font-size: 1rem;
  overflow: hidden;
  background: url('/moon.png');
  background-size: 200% 200%;
  background-repeat: no-repeat;
  border: none;
  box-shadow: none;
  text-align: center;
  
  &:hover {
    filter: brightness(1.1);
  }
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

const MoonButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

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
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
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
            {section.name}
          </QuarterComponent>
        );
      })}
    </MoonContainer>
  );
};

export default MoonButton; 