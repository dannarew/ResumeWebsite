import React from 'react';
import { useNavigate } from 'react-router-dom';
import HexagonButton from '../HexagonButton';

const Home = () => {
  const navigate = useNavigate();

  const buttons = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Experience', path: '/experience' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <div className="hexagon-container">
      <div className="hexagon">
        {[0, 90, 180, 270].map((rotation, index) => (
          <div
            key={rotation}
            className="hexagon-section"
            style={{ '--rotation': `${rotation}deg` }}
          />
        ))}
        {buttons.map((button, index) => (
          <HexagonButton
            key={button.text}
            text={button.text}
            onClick={() => navigate(button.path)}
            rotation={index * 90}
          />
        ))}
      </div>
    </div>
  );
};

export default Home; 