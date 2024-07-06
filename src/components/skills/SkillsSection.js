import React from 'react';
import { FaReact, FaJs, FaJava, FaPython } from 'react-icons/fa';
import { MdOutlineSecurity } from "react-icons/md";

import './SkillsSection.css';

const SkillsSection = () => {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'CyberSecurity', icon: <MdOutlineSecurity /> },
  ];

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;