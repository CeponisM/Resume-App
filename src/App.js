import React, { useState, useEffect } from 'react';
import bcmcImage from './bcmc.png';
import gauditImage from './gaudit.png';
import instagramCloneImage from './instagram_clone.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import './App.css';

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

  const particlesInit = async (main) => {

    await loadFull(main);
  };

  const particlesLoaded = (container) => {

  };

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent", // Make sure the background is transparent
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push", // The push mode adds new particles when the canvas is clicked
              },
              onHover: {
                enable: true,
                mode: "repulse", // The repulse mode makes particles move away from the mouse
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff", // Snow particles are white
            },
            links: {
              enable: false, // Disable particle linking
            },
            move: {
              direction: "bottom", // Particles move to the bottom
              enable: true,
              outModes: {
                default: "out", // Particles are removed when they go out of the canvas
              },
              speed: 2, // The speed of the particles
            },
            number: {
              density: {
                enable: true,
                area: 800, // Density of particles
              },
              value: 400, // Total number of particles
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle", // The shape of the particles
            },
            size: {
              value: { min: 1, max: 5 }, // Size range of particles
            },
          },
          detectRetina: true,
        }}
      />
      <div className="content">
        <header className="App-header">
          <div className='name-heading'>
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
          </div>
        </header>

        <div className="websites-container">
          <div className='heading2'>
            <h1>What Have I Built?</h1>
          </div>
          <p />
          <div className='websites-container-list'>
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

        <div className="websites-container-info">
          <div className='heading2'>
            <h1>What Do I Do?</h1>
          </div>
          <div className='websites-container-content'>
            Create fun projects in my spare time
            <p />
            Write quality code that is easy to read and extend
            <p />
            Create and maintain documentation of everything I make
            <p />
            Strictly follow security best practices
            <p />
            Never stop learning
          </div>
        </div>

        <div className="websites-container">
          <div className='heading2'>
            <h1>What Do I Know?</h1>
          </div>
          <div className='websites-container-content2'>
            <ul>
              <li>Javascript, PHP, C#, Python and several other programming languages</li>
              <li>How to design user friendly UX with VueJS, SASS, HTML5 Canvas, and other front end technologies</li>
              <li>How to use Docker, configure Apache, manage NPM packages, exit VIM, and other Sys Admin tasks</li>
              <li>How to write efficient queries in both MySQL and MSSQL</li>
              <li>How to interpret data to make meaningful insights</li>
              <li>How to ask a great question on Stack Overflow</li>
            </ul>
          </div>
        </div>

        <header className="websites-container-info">
          <div className='name-heading2'>
            <h1>Where Am I?</h1>
            <div className="google-map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611268.9670127521!2d-86.6380249552102!3d44.62662645152815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881e12b147b76f25%3A0xaad3e15fc5e80c36!2sBenzonia%20Township%2C%20MI!5e0!3m2!1sen!2sus!4v1701056081777!5m2!1sen!2sus" width="600" height="390" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </header>

        <div className="websites-container">
          <div className='websites-container-name'>
            What Is My Contact?
          </div>
          <div className='websites-container-content2'>
            <div className='email'>
              <a href="mailto:MantasCeponis5@gmail.com">
                <p id="email" class="text-center">MantasCeponis5@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        <header className="App-header">
          <div className='name-heading'>
            <h1>Thank you for reading</h1>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;