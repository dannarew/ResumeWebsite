import React, { useState } from 'react';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MoonButton from './components/HexagonButton';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Contact from './components/pages/Contact';
import './styles/global.css';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ContentSection = styled.div`
  width: 100%;
  height: ${props => {
    if (props.isExperience) return '50vh';
    if (props.isContact) return '50vh';
    if (props.isAbout) return '50vh';
    return '40vh';
  }};
  padding: 2rem;
  margin-top: ${props => {
    if (props.isExperience) return '47vh';
    if (props.isContact) return '47vh';
    if (props.isAbout) return '47vh';
    return '60vh';
  }};
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  overflow: ${props => props.isContact ? 'visible' : 'hidden'};
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;

const NavigationDots = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 100;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

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

const AppContent = () => {
  const [isMoonHovered, setIsMoonHovered] = useState(false);
  const location = useLocation();
  
  // Simplified path checking that works with both local and GitHub Pages
  const path = location.pathname.replace('/hexagon-portfolio', '');
  const isHomePage = path === '/' || path === '';
  const isExperience = path === '/experience';
  const isAbout = path === '/about';
  const isContact = path === '/contact';

  return (
    <MainContainer>
      {isHomePage ? (
        <Home isMoonHovered={isMoonHovered} />
      ) : (
        <ContentSection isExperience={isExperience} isAbout={isAbout} isContact={isContact}>
          <ContentWrapper isContact={isContact}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home isMoonHovered={isMoonHovered} />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </AnimatePresence>
          </ContentWrapper>
        </ContentSection>
      )}
      <MoonButton onHoverChange={setIsMoonHovered} />
    </MainContainer>
  );
};

function App() {
  return (
    <Router basename="/hexagon-portfolio">
      <AppContent />
    </Router>
  );
}

export default App;
