import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HexagonButton from './components/HexagonButton';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Contact from './components/pages/Contact';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <HexagonButton />
      </div>
    </Router>
  );
}

export default App;
