import React from 'react';
import profileImage from './ProfileImage.jpg';

import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <img src={profileImage} alt="Your Name" className="profile-image" />
      <div className="about-content">
        <h2>About Me</h2>
          I'm a passionate developer with expertise in web technologies and a
          strong focus on creating user-friendly applications. With a background
          in Computer Science, I bring a unique perspective to every project.
      </div>
    </div>
  );
};

export default AboutSection;