import React from 'react';

const HexagonButton = ({ text, onClick, rotation }) => {
  return (
    <button
      className="hexagon-button"
      onClick={onClick}
      style={{ '--rotation': `${rotation}deg` }}
    >
      {text}
    </button>
  );
};

export default HexagonButton; 