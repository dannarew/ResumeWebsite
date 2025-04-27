import React from 'react';

const Contact = () => {
  return (
    <div className="page">
      <h1>Contact</h1>
      <div className="container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to me for any inquiries or opportunities.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
            
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            
            <div className="contact-item">
              <h3>Location</h3>
              <p>City, Country</p>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 