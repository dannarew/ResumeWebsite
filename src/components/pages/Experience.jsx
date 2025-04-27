import React from 'react';

const Experience = () => {
  return (
    <div className="page">
      <h1>Experience</h1>
      <div className="container">
        <div className="experience-item">
          <h2>Software Engineer</h2>
          <h3>Company Name</h3>
          <p className="date">2020 - Present</p>
          <ul>
            <li>Developed and maintained web applications using React and Node.js</li>
            <li>Implemented responsive designs using CSS and Tailwind</li>
            <li>Collaborated with cross-functional teams to deliver high-quality products</li>
          </ul>
        </div>
        
        <div className="experience-item">
          <h2>Junior Developer</h2>
          <h3>Previous Company</h3>
          <p className="date">2018 - 2020</p>
          <ul>
            <li>Built and deployed web applications using modern JavaScript frameworks</li>
            <li>Optimized application performance and user experience</li>
            <li>Participated in code reviews and agile development processes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience; 