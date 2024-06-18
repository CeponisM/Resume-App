import React, { useState } from 'react';
import bcmcImage from './projects/bcmc.jpg';
import gauditImage from './projects/gaudit.jpg';
import instagramCloneImage from './projects/instagram_clone.jpg';
import game from './projects/game.jpg';
import gps from './projects/gps.jpg';
import starbucks from './projects/starbucks.jpg';
import cgol from './projects/cgol.jpg';
import mandala from './projects/mandala.jpg';
import chat from './projects/chat.jpg';
import motionExtraction from './projects/motionExtraction.jpg';
import waitlistFrontend from './projects/waitlist.jpg';
import ctiaSECcert from './certifications/ctiaSECcert.jpg';
import isc2CCcert from './certifications/isc2CCcert.jpg';
import dod101Codingcert from './certifications/dod101Codingcert.jpg';
import dod101CritIPPVcert from './certifications/dod101CritIPPVcert.jpg';
import dod101ReverseEPVcert from './certifications/dod101ReverseEPVcert.jpg';
import ciscoCBROPScert from './courses/ciscoCBROPScert.jpg';
import serverRack from './homelab/serverRack.jpg';
import servers from './homelab/servers.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import Particles from 'react-tsparticles';
//import { loadFull } from "tsparticles";
import { ThemeProvider } from './ThemeContext';
import DarkModeToggle from './DarkModeToggle';
import { CSSTransition } from 'react-transition-group';
import { ReactTyped } from "react-typed";

import './App.css';

function App() {
  // Modal selection
  const [selectedImg, setSelectedImg] = useState(null);

  // Projects list
  const websites = [
    {
      name: 'Waitlist frontend',
      url: 'https://MCeponis.com/8',
      image: waitlistFrontend,
      info: 'Practice waitlist frontend with custom pad example'
    },
    {
      name: 'BCMC.World',
      url: 'https://BCMC.World/',
      image: bcmcImage,
      info: 'Interactive Website, GPU Intensive'
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
      info: 'Outdated Starbucks React Clone (Missing images)'
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
      info: 'Camera motion-extraction from concepts found <a href="https://youtu.be/NSS6yAMZF78?si=wYhCukt1q6JXAQnG" target="_blank">HERE</a>, mobile supported (or webcam required)'
    },
    {
      name: 'Online Chat',
      url: 'https://MCeponis.com/7',
      image: chat,
      info: 'Full online authenticated chat, including GPT AI chat bot'
    }
  ];

  // certification list
  const certificates = [
    {
      name: 'CompTIA Security+',
      image: ctiaSECcert,
      info: 'CompTIA Security+ ce 701'
    },
    {
      name: 'ISC2 CC',
      image: isc2CCcert,
      info: 'ISC2 Certified in Cybersecurity'
    },
    {
      name: 'DOD 101 Coding',
      image: dod101Codingcert,
      info: 'DOD 101 Coding Public Version'
    },
    {
      name: 'DOD 101 Critical Infrastructure',
      image: dod101CritIPPVcert,
      info: '101 Critical Infrastructure Protection for the Public'
    },
    {
      name: 'DOD 101 Reverse Engineering',
      image: dod101ReverseEPVcert,
      info: '101 Reverse Engineering for the Public'
    }
  ];

  // courses list
  // const courses = [
  //   {
  //     name: 'Cisco CBROPS',
  //     image: ciscoCBROPScert,
  //     info: 'Understanding Cisco Cybersecurity Operations Fundamentals (CBROPS)'
  //   }
  // ];

  // courses list
  const homelab = [
    {
      name: 'Full 48u Rack',
      image: serverRack,
      info: 'In-progress 48u server rack'
    },
    {
      name: 'Servers',
      image: servers,
      info: 'HP DL380P, Dell PowerEdge T620, NetApp DS4246 Storage 16-Bay'
    }
  ];

  // const particlesInit = async (main) => {

  //   await loadFull(main);
  // };

  // const particlesLoaded = (container) => {

  // };

  // Console Hello
  console.log("Hi and welcome to my website!");

  return (
    <ThemeProvider>
      <div>
        <div className="App">
          {/* SNOW winter effect */}
          {/* <Particles
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
      /> */}
          <div className="content">
            <header className="App-header">
              <DarkModeToggle />
              <div className='name-heading'>
                <h2>
                  <ReactTyped
                    strings={["Mantas Čeponis"]}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar=">"
                    showCursor={true}
                  />
                </h2>
                <div className="social-links">
                  {/* Github Social Link */}
                  <a href="https://github.com/CeponisM" target="_blank" rel="noopener noreferrer" className="social-link github-link">
                    <FontAwesomeIcon icon={faGithub} />
                    <span>CeponisM on GitHub</span>
                  </a>

                  {/* Linkedin Social Link */}
                  <a href="https://www.linkedin.com/in/mantas-%C4%8Deponis-434842173/" target="_blank" rel="noopener noreferrer" className="social-link linkedin-link">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>CeponisM on LinkedIn</span>
                  </a>
                </div>
              </div>
            </header>

            <div className="websites-container">
              <div className='name-heading2'>
                <h1>
                  <ReactTyped strings={["What Have I Built?"]} typeSpeed={123} loop />
                </h1>
                <p />

                {/* Website projects list */}
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
                <h1>
                  <ReactTyped strings={["What Do I Do?"]} typeSpeed={69} loop />
                </h1>

                <div className='websites-container-content'>
                  <ul>
                    <li>Learn as much as I can, and then some more</li>
                    <p />
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
                <h1>
                  <ReactTyped strings={["What Do I Know?"]} typeSpeed={102} loop />
                </h1>

                <div className='websites-container-content2'>
                  <ul>
                    <li><b>Javascript</b>, <b>PHP</b>, <b>Java</b>, <b>C++</b>, <b>Python</b>, <b>Solidity</b> and several other programming languages</li>
                    <li>How to design user friendly UX with <b>React</b> and other front end technologies</li>
                    <li>Experience in integrating third-party <b>APIs</b> and services</li>
                    <li><b>Cybersecurity</b> best practices</li>
                    <li>Strong problem-solving skills and analytical thinking</li>
                    <li>Virtualization experience with <b>VMware vSphere ESXi</b>, <b>Proxmox VE</b> on Dell and HP enterprise servers</li>
                    <li>Excellent communication skills, both written and verbal, for effective team collaboration and client interactions</li>
                    <li>How to ask a great question on Stack Overflow</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications list */}
            <header className="websites-container-info2">
              <div className='name-heading2'>
                <h1>
                  <ReactTyped strings={["What Certificates Do I Have?"]} typeSpeed={39} loop />
                </h1>
                <p />
                <div className='websites-container-list'>
                  {certificates.map((site, index) => (
                    <div className="website-preview" key={site.name || index}>
                      <img src={site.image} alt={`${site.name} Preview`} className="website-image" onClick={() => setSelectedImg(site.image)} />
                      <div className="info-pane">
                        <p className="website-title">{site.name}</p>
                        <p className="website-info" dangerouslySetInnerHTML={{ __html: site.info }}></p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='websites-container-content-addition'>
                  *Currently Studying for CompTIA Cybersecurity Analyst (CYSA) Certification
                </div>
              </div>
            </header>

            {/* 
            {/* Courses list
            <div className="websites-container">
              <div className='name-heading2'>
                <h1>What Additional Courses have I completed?</h1>
                <p />
                <div className='websites-container-list'>
                  {courses.map((site, index) => (
                    <div className="website-preview" key={site.name || index}>
                      <img src={site.image} alt={`${site.name} Preview`} className="website-image" onClick={() => setSelectedImg(site.image)} />
                      <div className="info-pane">
                        <p className="website-title">{site.name}</p>
                        <p className="website-info" dangerouslySetInnerHTML={{ __html: site.info }}></p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Modal for selected certification or course
                <CSSTransition
                  in={selectedImg !== null}
                  timeout={300}
                  classNames="overlay"
                  unmountOnExit
                  onEnter={() => document.body.style.overflow = 'hidden'}
                  onExited={() => document.body.style.overflow = 'auto'}
                >
                  <div className="overlay" onClick={() => setSelectedImg(null)}>
                    <img src={selectedImg} alt="Enlarged preview" className="enlarged-image" />
                  </div>
                </CSSTransition>

              </div>
            </div> */}

            {/* Courses list */}
            <div className="websites-container">
              <div className='name-heading2'>
                <h1>
                  <ReactTyped strings={["Want to see my Home Lab?"]} typeSpeed={89} loop />
                </h1>
                <p />
                <div className='websites-container-list'>
                  {homelab.map((site, index) => (
                    <div className="website-preview" key={site.name || index}>
                      <img src={site.image} alt={`${site.name} Preview`} className="website-image" onClick={() => setSelectedImg(site.image)} />
                      <div className="info-pane">
                        <p className="website-title">{site.name}</p>
                        <p className="website-info" dangerouslySetInnerHTML={{ __html: site.info }}></p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Modal for selected certification or course */}
                <CSSTransition
                  in={selectedImg !== null}
                  timeout={300}
                  classNames="overlay"
                  unmountOnExit
                  onEnter={() => document.body.style.overflow = 'hidden'}
                  onExited={() => document.body.style.overflow = 'auto'}
                >
                  <div className="overlay" onClick={() => setSelectedImg(null)}>
                    <img src={selectedImg} alt="Enlarged preview" className="enlarged-image" />
                  </div>
                </CSSTransition>

              </div>
              <center>
                  <div className='websites-container-content-addition'>The homelab is an in-progress build, currently running VMware vSphere 8 Evaluation. The 16-Bay JBOD is currently used mainly for TrueNAS network storage and VM storage.</div>
              </center>
            </div>

            {/* Location map display */}
            <header className="websites-container-info2">
              <div className='name-heading2'>
                <h1>
                  <ReactTyped strings={["Where Am I?"]} typeSpeed={89} loop />
                </h1>
                <div className="google-map-container">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95257.95377701832!2d-88.2442836843529!3d41.74616814647547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5761e216cd07%3A0x87df9c2c7f203052!2sNaperville%2C%20IL!5e0!3m2!1sen!2sus!4v1705541028433!5m2!1sen!2sus" width="600" height="390" style={{ border: 0 }} title="GMap" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </header>

            {/* Contact information */}
            <div className="websites-container">
              <div className='name-heading2'>
                <h1>
                  <ReactTyped strings={["What Is My Contact?"]} typeSpeed={33} loop />
                </h1>

                <div className='websites-container-content2'>
                  <div className='email'>
                    <a href="mailto:Hire@MCeponis.com">
                      <center><p id="email" class="text-center">Hire@MCeponis.com</p></center>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="App-header">
              <div className='name-heading'>
                <h1>Thank you for reading</h1>
                <a href="https://github.com/CeponisM/Resume-App" target="_blank" rel="noopener noreferrer" className="social-link-footer">View Source Code</a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
