import React, { useState, useEffect } from 'react';
import './App.css';
import bcmcImage from './bcmc.png';
import gauditImage from './gaudit.png';
import instagramCloneImage from './instagram_clone.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  const websites = [
    {
      name: 'BCMC.World',
      url: 'https://BCMC.World/',
      image: bcmcImage,
      info: 'BCMC World Information...'
    },
    {
      name: 'GAudit.org',
      url: 'https://GAudit.org',
      image: gauditImage,
      info: 'GAudit Information...'
    },
    {
      name: 'Instagram Clone',
      url: 'https://instagramclone.example.com',
      image: instagramCloneImage,
      info: 'Instagram Clone Information...'
    }
  ];

  
  return (
    <div className="App">
        <div className="content">
          <header className="App-header">
            <h2>Mantas Čeponis</h2>
            <div className="social-links">
              <a href="https://github.com/CeponisM" target="_blank" rel="noopener noreferrer" className="social-link github-link">
                <FontAwesomeIcon icon={faGithub} />
                <span>CeponisM on GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/CeponisM" target="_blank" rel="noopener noreferrer" className="social-link linkedin-link">
                <FontAwesomeIcon icon={faLinkedin} />
                <span>CeponisM on LinkedIn</span>
              </a>
            </div>
          </header>
          <div className="websites-container">
            {websites.map((site, index) => (
              <div className="website-preview" key={index}>
                <a href={site.url} target="_blank" rel="noopener noreferrer">
                  <img src={site.image} alt={`${site.name} Preview`} className="website-image" />
                  <div className="info-pane">
                    <p className="website-title">{site.name}</p>
                    <p className="website-info">{site.info}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default App;