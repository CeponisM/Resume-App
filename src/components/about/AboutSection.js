import React from 'react';
import profileImage from './ProfileImage.jpg';

import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <img src={profileImage} alt="Your Name" className="profile-image" />
      <div className="about-content">
        <h2>About Me</h2>
          I'm a cybersecurity-focused full-stack developer with 8+ years of entrepreneurial experience and
          30+ active projects spanning blockchain security, machine learning, and enterprise infrastructure.
          I combine technical innovation with business acumen to deliver scalable solutions that prioritize security and performance.
      </div>
    </div>
  );
};

export default AboutSection;