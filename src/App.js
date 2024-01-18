import React, { useState, useEffect } from 'react';
import bcmcImage from './bcmc.png';
import gauditImage from './gaudit.png';
import instagramCloneImage from './instagram_clone.png';
import game from './game.png';
import gps from './gps.png';
import starbucks from './starbucks.png';
import cgol from './cgol.png';
import mandala from './mandala.png';
import chat from './chat.png';
import motionExtraction from './motionExtraction.png';
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
      info: 'Interactive Website'
    },
    {
      name: 'GAudit.org',
      url: 'https://GAudit.org',
      image: gauditImage,
      info: 'Solidity Smart-Contract Auditing'
    },
    {
      name: 'Game App Concept',
      url: 'https://MCeponis.com/2',
      image: game,
      info: 'Web-App React Game (WIP)'
    },
    {
      name: 'Instagram Clone',
      url: 'https://MCeponis.com/1',
      image: instagramCloneImage,
      info: 'Instagram Clone Full Firebase auth, storage, and DB'
    },
    {
      name: 'Shortest Distance GPS',
      url: 'https://MCeponis.com/3',
      image: gps,
      info: 'Sortest Distance GPS using APIs'
    },
    {
      name: 'Starbucks Clone',
      url: 'https://mantas-sb-clone.netlify.app/',
      image: starbucks,
      info: 'Outdated Starbucks React Clone'
    },
    {
      name: 'Conways Game of Life',
      url: 'https://MCeponis.com/4',
      image: cgol,
      info: 'John Conways Game of Life with React'
    },
    {
      name: 'Mandala Generator',
      url: 'https://MCeponis.com/5',
      image: mandala,
      info: 'Custom Mandala Drawing Application in React (WIP)'
    },
    {
      name: 'Motion Extraction',
      url: 'https://MCeponis.com/6',
      image: motionExtraction,
      info: 'Camera motion-extraction from concepts found <a href="https://youtu.be/NSS6yAMZF78?si=wYhCukt1q6JXAQnG" target="_blank">HERE</a>, mobile supported'
    },
    {
      name: 'Online Chat',
      url: 'https://MCeponis.com/7',
      image: chat,
      info: 'Full online authenticated chat, including AI chat bot'
    }
  ];

  const particlesInit = async (main) => {

    await loadFull(main);
  };

  const particlesLoaded = (container) => {

  };

  // Console Hello
  console.log("Hello!");

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
              value: "#E0FBFC", // Snow particles are white
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
              value: 69, // Total number of particles
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
              <a href="https://www.linkedin.com/in/mantas-%C4%8Deponis-434842173/" target="_blank" rel="noopener noreferrer" className="social-link linkedin-link">
                <FontAwesomeIcon icon={faLinkedin} />
                <span>CeponisM on LinkedIn</span>
              </a>
            </div>
          </div>
        </header>

        <div className="websites-container">
          <div className='name-heading2'>
            <h1>What Have I Built?</h1>
            <p />
            <div className='websites-container-list'>
              {websites.map((site, index) => (
                <div className="website-preview" key={site.name || index}>
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    <img src={site.image} alt={`${site.name} Preview`} className="website-image" />
                    <div className="info-pane">
                      <p className="website-title">{site.name}</p>
                      <p className="website-info" dangerouslySetInnerHTML={{ __html: site.info }}></p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="websites-container-info">
          <div className='name-heading2'>
            <h1>What Do I Do?</h1>

            <div className='websites-container-content'>
              <ul>
                <li>Create fun projects in my spare time</li>
                <p />
                <li>Write quality code that is easy to read and extend</li>
                <p />
                <li>Create and maintain documentation of everything I make</li>
                <p />
                <li>Strictly follow security best practices</li>
                <p />
                <li>Never stop learning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="websites-container">
          <div className='name-heading2'>
            <h1>What Do I Know?</h1>

            <div className='websites-container-content2'>
              <ul>
                <li><b>Javascript</b>, <b>PHP</b>, <b>Java</b>, <b>C++</b>, <b>Python</b>, Solidity and several other programming languages</li>
                <li>How to design user friendly UX with <b>React</b> and other front end technologies</li>
                <li>Experience in integrating third-party <b>APIs</b> and services</li>
                <li>Strong problem-solving skills and analytical thinking</li>
                <li>How to interpret data to make meaningful insights</li>
                <li>Excellent communication skills, both written and verbal, for effective team collaboration and client interactions</li>
                <li>How to ask a great question on Stack Overflow</li>
              </ul>
            </div>
          </div>
        </div>

        <header className="websites-container-info2">
          <div className='name-heading2'>
            <h1>Where Am I?</h1>
            <div className="google-map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611268.9670127521!2d-86.6380249552102!3d44.62662645152815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881e12b147b76f25%3A0xaad3e15fc5e80c36!2sBenzonia%20Township%2C%20MI!5e0!3m2!1sen!2sus!4v1701056081777!5m2!1sen!2sus" width="600" height="390" style={{ border: 0 }} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </header>

        <div className="websites-container">
          <div className='name-heading2'>
            <h1>What Is My Contact?</h1>

            <div className='websites-container-content2'>
              <div className='email'>
                <a href="mailto:MantasCeponis5@gmail.com">
                  <p id="email" class="text-center">MantasCeponis5@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <header className="App-header">
          <div className='name-heading'>
            <h1>Thank you for reading</h1>
            <a href="https://github.com/CeponisM/Resume-App" target="_blank" rel="noopener noreferrer" className="social-link-footer">View Source Code</a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;