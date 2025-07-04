import React, { useState, useEffect, useMemo, memo, useCallback } from 'react';
//Project Images
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
import imgSocial from './projects/img-social.jpg';
import imgMagic from './projects/imgMagic.gif';
import windowInstallation from './projects/windowInstallation.jpg';
import ceponisGutters from './projects/ceponisGutters.jpg';
import noiseRemoval from './projects/noiseRemoval.jpg';
import playlistApp from './projects/playlistApp.jpg';
import vulnScanner from './projects/vulnScanner.jpg';job-pipeline.jpg
import jobPipeline from './projects/job-pipeline.jpg';
//Certifications
import ctiaSECcert from './certifications/ctiaSECcert.jpg';
import ctiaNETcert from './certifications/ctiaNETcert.jpg';
import ctiaCYSAcert from './certifications/ctiaCYSAcert.jpg';
import isc2CCcert from './certifications/isc2CCcert.jpg';
import dod101Codingcert from './certifications/dod101Codingcert.jpg';
import dod101CritIPPVcert from './certifications/dod101CritIPPVcert.jpg';
import dod101ReverseEPVcert from './certifications/dod101ReverseEPVcert.jpg';
import ciscoCBROPScert from './courses/ciscoCBROPScert.jpg';
import ciscoPRNEcourse from './courses/ciscoPRNEcourse.jpg';
import w3React from './certifications/ReactW3Schools.jpg';
//Homelab
import server1 from './homelab/1-min.jpg';
import server2 from './homelab/2-min.jpg';
import server3 from './homelab/3-min.jpg';
import serverC2960 from './homelab/Catalyst 2960-x Series-min.jpg';
import serverDL360 from './homelab/DL360-min.jpg';
import serverDL380 from './homelab/DL380p-min.jpg';
import serverDS4246 from './homelab/DS4246-min.jpg';
import serverPE1950 from './homelab/PE1950-min.jpg';
import serverR5500 from './homelab/R5500-min.jpg';
import servert620 from './homelab/t620-min.jpg';
//Sidebar
import SidebarIndex from './components/Sidebar/SidebarIndex.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTableCellsLarge, faList, faSearch, faBugSlash } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from './ThemeContext';
import DarkModeToggle from './components/DarkModeToggle';
import ProjectListItem from './components/ProjectListItem';
import { CSSTransition } from 'react-transition-group';
import { ReactTyped } from "react-typed";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SkillsSection from './components/skills/SkillsSection';
import AboutSection from './components/about/AboutSection';
import { debounce } from 'lodash';
import LazyLoad from 'react-lazyload';

import './App.css';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [layoutStyle, setLayoutStyle] = useState('list');
  const [searchExpanded, setSearchExpanded] = useState(true);
  const MemoizedProjectListItem = React.memo(ProjectListItem);
  const debouncedSetSearchTerm = debounce((value) => setSearchTerm(value), 300);
  const handleLayoutToggle = useCallback((style) => setLayoutStyle(style), []);
  const handleImageClick = useCallback((image) => setSelectedImg(image), []);

  // Projects
  const websites = [
    {
      name: '2D Img to 2.5D',
      url: 'https://MCeponis.com/10',
      githubUrl: 'https://github.com/CeponisM/img-depth-magic',
      image: imgMagic,
      info: 'Turn 2D Image into 2.5D parallax effect, using home-server hosted depth-map conversions',
      extendedInfo: `Users are required to sign-up and log-in using gmail or user/password combination through firebase authentication to prevent abuse of server.
      User can then submit a standard photo that is uploaded to my home servers for image depthmap conversion using depth_anything_v2 'vitb' ONNX model and returns it to the app.
      The depthmap is then used within a shader with the original image to add depth to the image similiar to the Depthy or DepthFlow apps considered "2D to 2.5D parallax conversion".
      Settings can be modified from the menu to adjust the depth style which is displayed within a Three.js scene.`,
      improvements: [
        'Clean up UI, improve sign-in/sign-up pages',
        'Broken setting exlusion/fixes'
      ]
    },
    {
      name: 'Online Chat',
      url: 'https://MCeponis.com/7',
      githubUrl: 'https://github.com/CeponisM/ceponis-chat',
      image: chat,
      info: 'Full online authenticated chat, including GPT-AI chat bot',
      extendedInfo: `Authenticated user chat that displays all online users in the chat. The goal for this app was to implament a chat bot that could respond the the user (found in user list as "AI chat").
      User may talk to other users within the chat, chats are saved for future reference if users attempt to communicate again using firestore database.
      AI chat uses the OpenAI API for interacting with the user, and all is displayed within the chat.`,
      improvements: [
        'Styling display fixes that make the app more functional on all device aspect ratios and resolutions'
      ]
    },
    {
      name: 'VSCO style Social Media',
      url: 'https://MCeponis.com/9',
      githubUrl: 'https://github.com/CeponisM/Img-Social-Media',
      image: imgSocial,
      info: 'Functionally Similar VSCO Social Media App',
      extendedInfo: `Image social media app where users can create a profile for posts and find other users via search.
      Posts are a sequence of images taken via camera that are stitched together and played back as a loop at user selected interval.
      The loop is able to be edited with multiple filters and settings for changing the aesthetic and can then be posted to the users profile.
      Users are able to follow each other and are able to see newest posts from followed users in their feed.
      All posts support descriptions, likes, commenting, comment likes, and comment replies.
      Notifications are displayed when users interact with posts or comments.`,
      improvements: [
        'Post editing option expansion and cleanup of interfaces'
      ]
    },
    {
      name: 'Waitlist Frontend',
      url: 'https://MCeponis.com/8',
      githubUrl: 'https://github.com/CeponisM/practice-project',
      image: waitlistFrontend,
      info: 'Practice waitlist frontend with custom pad example',
      extendedInfo: `A simple front-end practice project for signing up to a waiting list application.
      Custom mock pad display of what the app could look like with reactive styling.
      Distinct styling and Dark/light mode implementation for user chosen styling.`,
      improvements: [
        'Styling updates for better visual appeal',
        'Improvement of performance on non-virtualized website instances'
      ]
    },
    {
      name: 'Visual Youtube Showcase',
      url: 'https://BCMC.World/',
      image: bcmcImage,
      info: 'Interactive Music Label Website, Memory/GPU Intensive',
      extendedInfo: `Display of music to showcase artists and their song using information pulled from firestore database.
      Moving background using blend mode with mouse/tilt interactivity for responsive display.
      Admin panel linked to firebase firestore for adding and retrieving artists and content that show on the website.
      Linked to a simple wordpress woocommerce merchendise website.`,
      improvements: [
        'Performance improvements'
      ]
    },
    {
      name: 'Smart Contract Auditing',
      url: 'https://GAudit.org',
      image: gauditImage,
      info: 'Solidity Smart-Contract Auditing',
      extendedInfo: `Display website for solidity smart contract audits. Distinct styling of homepage with most recent audits displayed.
      Audits have PDF documents and some of the information from the PDF along with rankings is displayed on the respective audit page.
      Audits completed with tool assisted and manual code review`,
      improvements: []
    },
    {
      name: 'Game App Concept',
      url: 'https://MCeponis.com/2',
      image: game,
      info: 'Web-App React Game (WIP)',
      extendedInfo: `Top-down game built using react, user starts as a default character and is able to move around the area with mouse/touch.
      User has skills, inventory, equipped items, health/stamina, and pets. Items can be picked up around the map and used to interact with the environment such as chopping trees or mining ores.
      Npc with dialogue for quest is added and provide rewards for completion. Shop system for buying and selling with currency implamented.
      Wolves that attack the user randomly spawn and user is able to attack the wolves. XP points are used for leveling up the skills.
      Minimap implementation with zoom and minimap expansion added. Users can see other online users around the map when they are online.
      Movement keeps the player in the center of screen while the whole scene and everything is moved depending on where the user chooses to go.`,
      improvements: [
        'Custom sprites and image implementations',
        'Performance improvements',
        'Completion of unfinished features'
      ]
    },
    {
      name: 'Instagram Clone',
      url: 'https://MCeponis.com/1',
      githubUrl: 'https://github.com/CeponisM/react-photo-social',
      image: instagramCloneImage,
      info: 'Instagram Clone Full Firebase auth, storage, and DB',
      extendedInfo: `Instagram style application where user is able to upload a photo, edit the photo, add caption, and post to a feed.
      Uses firebase auth, storage, and firestore for the different app features.
      Post like and comment implementation, with ability to delete own posts.`,
      improvements: [
        'Profile implementation with user following',
        'Improved styling to increase appeal'
      ]
    },
    {
      name: 'Shortest Distance GPS',
      url: 'https://MCeponis.com/3',
      githubUrl: 'https://github.com/CeponisM/react-gps',
      image: gps,
      info: 'Sortest Distance GPS using APIs',
      extendedInfo: `Uses open street map to display a map, and uses API called FindDrivingRoute from rapidAPI using a start and end address.
      The API returns a route that is shortest distance between the two addresses and this is mapped within the map.
      Multiple routes can be added to the map from different addresses and all are displayed with start/end points including the distance from the points.`,
      improvements: []
    },
    {
      name: 'Starbucks Clone',
      url: 'https://mantas-sb-clone.netlify.app/',
      image: starbucks,
      info: 'Outdated Starbucks React Clone (Missing images)',
      extendedInfo: `Outdated Starbucks website clone that replicated the old Starbucks website. Some assets have become unavaliable since the clone
      site creation and therefore the website is missing assets. Old project that I do not plan to renew. Made for educational purposes only.`,
      improvements: [
        'Dynamic page updates for mobile and other aspect ratios'
      ]
    },
    {
      name: 'Conways Game of Life',
      url: 'https://MCeponis.com/4',
      githubUrl: 'https://github.com/CeponisM/react-gol',
      image: cgol,
      info: 'John Conways Game of Life with React',
      extendedInfo: `John Conways Game of Life that allows the user to set a grid size and select starting boxes.
      Dragging for selecting multiple boxes is supported, and the user is able to start and end the game whenever chosen.
      Boxes may be selected while the game is still running so user can observe changes made as the game progresses.`,
      improvements: []
    },
    {
      name: 'Mandala Generator',
      url: 'https://MCeponis.com/5',
      githubUrl: 'https://github.com/CeponisM/react-mandala',
      image: mandala,
      info: 'Custom Mandala Drawing Application in React (WIP)',
      extendedInfo: `Custom manadala application that starts from two points that move outwards until they hit a circular wall then bounce back depending on user defined settings.
      Presets are implemented so user can view examples of the apps function, and all settings can be changed to the users liking.
      Many various settings are implemented that change how the mandala is created and displayed to the user.`,
      improvements: [
        'Styling and setting improvements including better descriptions'
      ]
    },
    {
      name: 'Motion Extraction',
      url: 'https://MCeponis.com/6',
      githubUrl: 'https://github.com/CeponisM/motion-extraction',
      image: motionExtraction,
      info: 'Camera motion-extraction from concepts found <a href="https://youtu.be/NSS6yAMZF78?si=wYhCukt1q6JXAQnG" target="_blank">HERE</a>, using mobile camera or webcam',
      extendedInfo: `Camera motion-extraction using a concept found <a href="https://youtu.be/NSS6yAMZF78?si=wYhCukt1q6JXAQnG" target="_blank">HERE</a>. The app uses a camera that displays
      twice with a set delay, the second display is inverted and set at half transparency causing the effect. Watch the video mention to see
      exactly what can be done with the motion extraction, quite a cool concept I wanted to replicate within a simple app.`,
      improvements: [
        'Better styling and display improvements',
        'Improved adjustability of second display for testing different effects'
      ]
    },
    {
      name: 'Noise Removal',
      url: 'https://MCeponis.com/14',
      githubUrl: 'https://github.com/CeponisM/noise-extraction',
      image: noiseRemoval,
      info: 'Uses microphone audio to cancel-out background noise',
      extendedInfo: `Attempt of audio extraction using similiar methods inspired by my motion extraction application.
      Background noise is recorded to create a profile of the noise for use in active audio playback.`,
      improvements: [
        'Additional audio adjustment controls for unique physical settings',
        'Readme creation'
      ]
    },
    {
      name: 'Window Installation',
      url: 'https://mediumblue-barracuda-773204.hostingersite.com/',
      image: windowInstallation,
      info: 'Wordpress website using default template for Window Installation servicing company (non-production)',
      extendedInfo: `Wordpress website using default template for window/roofing installation and servicing company offering raffle
      for entry into list for customer acquisition. Not currently in production or used by employee change of work.`,
      improvements: [
      ]
    },
    {
      name: 'Ceponis Gutters',
      url: 'https://CeponisGutters.com/',
      image: ceponisGutters,
      info: 'Single page ReactJS service company website',
      extendedInfo: `Simple one page ReactJS website with contact details, service details, estimation price tool,
      seasonal reminder sign-up, area map, contact buttons, in simple 3 tone color scheme. SEO friendly (sitemaps, robots.txt),
      old browser fallback support, dynamic and responsive for all devices.`,
      improvements: [
        'Finish background video that plays beneath the "hero" section',
        'Change contact buttons to add-contact buttons (make only work for mobile)',
        'Correct the service-area map to show a radius instead of a single town'
      ]
    },
    {
      name: 'Playlist Application',
      url: 'https://MCeponis.com/15',
      githubUrl: 'https://github.com/CeponisM/playlist-app',
      image: playlistApp,
      info: 'Make playlists in one page from multiple websites',
      extendedInfo: `Create playlist from multiple sources such as Youtube, SoundCloud, Spotify, Yandex, and local files.
      Uses zustand state management, framer-motion animations, debouncing using lodash, created in react as the core framework.`,
      improvements: [
        'Fix the dynamic aspect changes of the application to better accommodate different devices.'
      ]
    },
    {
      name: 'Vulnerability Scanner',
      url: 'https://github.com/CeponisM/vulnerability_scanner',
      githubUrl: 'https://github.com/CeponisM/vulnerability_scanner',
      image: vulnScanner,
      info: 'Web Application Vulnerability Scanner',
      extendedInfo: `A Node.js-based automated vulnerability scanner for bug bounty hunting and security testing.
      Supports concurrent testing, customizable payloads, detailed JSON reporting, and console output with action-specific trigger information.`,
      improvements: [
        'Additional checks for false-positives'
      ]
    },
    {
      name: 'Job-app Pipeline',
      url: 'https://MCeponis.com/16',
      githubUrl: 'https://github.com/CeponisM/ml-pipeline',
      image: jobPipeline,
      info: 'Job board scraper, keyword analyzer, automated coverletter writer',
      extendedInfo: `A job scraper used to analyze current jobs on the market. Uses modules that are used together in a pipeline style canvas.
      Example pipline would be start>url-list>scraper>database>keyword-analysis>cover-letter-writer. All information from the scraper is pulled into the database, 
      the keyword analyzer uses the database to analyze all listings for most used keywords such as technologies and displays in a informative dashboard.
      The resume writer allows for linking a LLM api key (chat-gpt, claude, grok, gemini) for use in writing a cover letter in a selected style/length for a 
      specific selected job from the database allowing the user to input their information such as resume, name, and additional information.`,
      improvements: [
        'Automation of resume writing to go along with the cover letter module',
        'Extraction of urls into database by scraper fixes',
        'Cover Letter writer multiple job selections and final output module to consolidate'
      ]
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
      name: 'CompTIA Network+',
      image: ctiaNETcert,
      info: 'CompTIA Network+ ce'
    },
    {
      name: 'CompTIA CYSA+',
      image: ctiaCYSAcert,
      info: 'CompTIA Cybersecurity Analyst+ CS0-003'
    },
    {
      name: 'ISC2 CC',
      image: isc2CCcert,
      info: 'ISC2 Certified in Cybersecurity'
    },
    {
      name: 'Cisco CBROPS',
      image: ciscoCBROPScert,
      info: 'Understanding Cisco Cybersecurity Operations Fundamentals (CBROPS) Course'
    },
    {
      name: 'Cisco PRNE',
      image: ciscoPRNEcourse,
      info: 'Implementing and Operating Cisco Enterprise Network Core Technologies (PRNE) Course'
    },
    {
      name: 'W3 Certified React Developer',
      image: w3React,
      info: 'W3Schools Professional Level Certified React Developer'
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
    },
    {
      name: 'DOD 101 Coding',
      image: dod101Codingcert,
      info: 'DOD 101 Coding Public Version'
    },
  ];

  // courses list
  // const courses = [
  //   {
  //     name: 'Cisco CBROPS',
  //     image: ciscoCBROPScert,
  //     info: 'Understanding Cisco Cybersecurity Operations Fundamentals (CBROPS)'
  //   }
  // ];

  // Homelab main images
  const homelabMain = [
    {
      name: '48u Rack Bottom',
      image: server1,
      info: ''
    },
    {
      name: '48u Rack Middle',
      image: server2,
      info: ''
    },
    {
      name: '48u Rack Top',
      image: server3,
      info: ''
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const filteredProjects = useMemo(() => {
    return websites.filter(website =>
      website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      website.info.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, websites]);

  useEffect(() => {
    const serverItems = document.querySelectorAll('.server-list li');

    serverItems.forEach(item => {
      const img = document.createElement('img');
      img.src = item.dataset.image;
      img.className = 'server-image';
      item.appendChild(img);

      item.addEventListener('mouseenter', () => {
        img.style.opacity = '1';
      });

      item.addEventListener('mouseleave', () => {
        img.style.opacity = '0';
      });
    });
  }, []);

  // Typed headings

  const TypedName = memo(() => (
    <ReactTyped
      strings={["Mantas Čeponis"]}
      typeSpeed={100}
      backSpeed={20}
      loop
      cursorChar=">"
      showCursor={true}
    />
  ));

  const TypedWhatIDo = memo(() => (
    <ReactTyped
      strings={["What Do I Do?"]}
      typeSpeed={69}
      loop
      showCursor={true}
    />
  ));

  const TypedWhatIKnow = memo(() => (
    <ReactTyped
      strings={["What Do I Know?"]}
      typeSpeed={102}
      loop
      showCursor={true}
    />
  ));

  const TypedWhereAmI = memo(() => (
    <ReactTyped
      strings={["Where Am I?"]}
      typeSpeed={89}
      loop
      showCursor={true}
    />
  ));

  const TypedContact = memo(() => (
    <ReactTyped
      strings={["What Is My Contact?"]}
      typeSpeed={33}
      loop
      showCursor={true}
    />
  ));

  // const particlesInit = async (main) => {
  //   await loadFull(main);
  // };
  // const particlesLoaded = (container) => {
  // };

  // Console Hello

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
                  <TypedName />
                </h2>
                <div className="social-links">
                  {/* Linkedin Social Link */}
                  <a href="https://www.linkedin.com/in/mantas-%C4%8Deponis-434842173/" target="_blank" rel="noopener noreferrer" className="social-link linkedin-link">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>LinkedIn</span>
                  </a>

                  {/* BugCrowd Link */}
                  <a href="https://bugcrowd.com/MCeponis" target="_blank" rel="noopener noreferrer" className="social-link bugcrowd-link">
                    <FontAwesomeIcon icon={faBugSlash} />
                    <span>BugCrowd</span>
                  </a>

                  {/* Github Link */}
                  <a href="https://github.com/CeponisM" target="_blank" rel="noopener noreferrer" className="social-link github-link">
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </header>

            <div className="websites-container">
              <div className='name-heading2'>
                <h1>
                  What Have I Built?
                </h1>
                <div className="layout-toggle-container">
                  <button
                    onClick={() => handleLayoutToggle('grid')}
                    className={`project-toggle ${layoutStyle === 'grid' ? 'active' : ''}`}
                    aria-label="Grid View"
                  >
                    <FontAwesomeIcon icon={faTableCellsLarge} size="lg" />
                  </button>
                  <button
                    onClick={() => setLayoutStyle('list')}
                    className={`project-toggle ${layoutStyle === 'list' ? 'active' : ''}`}
                    aria-label="List View"
                  >
                    <FontAwesomeIcon icon={faList} size="lg" />
                  </button>
                  <div className='layout-container-space' />

                  <div className="search-container">
                    <button className="search-icon" onClick={() => setSearchExpanded(!searchExpanded)}>
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                    {searchExpanded && (
                      <input
                        type="text"
                        placeholder="Search projects..."
                        onChange={(e) => debouncedSetSearchTerm(e.target.value)}
                        className="search-input"
                      />
                    )}
                  </div>
                </div>
                {layoutStyle === 'grid' ? (
                  <div className='websites-container-list'>
                    {filteredProjects.map((site, index) => (
                      <div className="website-preview" key={site.name || index}>
                        <a href={site.url} target="_blank" rel="noopener noreferrer">
                          <LazyLoadImage src={site.image} alt={`${site.name} Preview`} clasrc={site.image} className="website-image" />
                          <div className="info-pane">
                            <p className="website-title">{site.name}</p>
                            <p className="website-info" dangerouslySetInnerHTML={{ __html: site.info }}></p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='websites-container-list-detailed'>
                    {filteredProjects.map((site) => (
                      <MemoizedProjectListItem project={site} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Certifications list */}
            <header className="websites-container-info2">
              <div className='name-heading2'>
                <h1>
                  What Certificates Do I Have?
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
                  <b>Java</b>, <b>C++</b> Credentials: 12/18/2020 College of Dupage
                  <p />
                  *Currently Studying for CompTIA Pentest+ Certification
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

            {/* Homelab */}
            <div className="websites-container">
              <div className='name-heading2'>
                <h1>
                  Want to see my Home Lab?
                </h1>
                <p />
                <div className='websites-container-list'>
                  {homelabMain.map((site, index) => (
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
                <div className='websites-container-content'>
                  <ul className="server-list">
                    {[
                      { name: "HP DL380P Gen8", image: serverDL380, link: "https://www.hpe.com/psnow/doc/c04123238" },
                      { name: "HP Proliant DL360 Gen9", image: serverDL360, link: "https://www.hp.com/hpinfo/newsroom/press_kits/2014/ComputeEra/HP_ProLiantDL360Gen9Server_DataSheet.pdf" },
                      { name: "Dell PowerEdge T620", image: servert620, link: "https://i.dell.com/sites/doccontent/shared-content/data-sheets/en/Documents/dell-poweredge-t620-technical-guide.pdf" },
                      { name: "Dell Precision WorkStation R5500 (5X)", image: serverR5500, link: "https://i.dell.com/sites/content/shared-content/data-sheets/en/Documents/precision-r5500-spec-sheet.pdf" },
                      { name: "Dell PowerEdge 1950", image: serverPE1950, link: "https://dl.dell.com/manuals/all-products/esuprt_ser_stor_net/esuprt_poweredge/poweredge-1950_user's%20guide_en-us.pdf" },
                      { name: "NetApp DS4246 Storage 16-Bay", image: serverDS4246, link: "https://www.netapp.com/media/19959-ds-3096.pdf" },
                      { name: "Cisco Catalyst WS-C2960X-48TD", image: serverC2960, link: "https://www.cisco.com/c/en/us/products/collateral/switches/catalyst-2960-x-series-switches/datasheet_c78-728232.html" },
                    ].map((server, index) => (
                      <li key={index} data-image={server.image}>
                        <a
                          href={server.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link-footer">
                          {server.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='websites-container-content-addition'>
                  The homelab is an in-progress build to expand my knowledge of servers, networking, cybersecurity, virtualization, and IT. The 16-Bay JBOD is used for TrueNAS network and VM storage.
                </div>
              </center>
            </div>

            <div className="websites-container-info">
              <div className='name-heading2'>
                <h1>
                  <TypedWhatIDo />
                </h1>
                <div className="split-container">
                  <div className="left-column">
                    <AboutSection />
                  </div>
                  <div className="right-column">
                    <div className='websites-container-content'>
                      <ul>
                        <li>Build enterprise-grade applications with security-first architecture</li>
                        <li>Audit smart contracts and identify critical vulnerabilities in DeFi protocols</li>
                        <li>Automate security testing with custom vulnerability scanners</li>
                        <li>Manage enterprise server infrastructure for cybersecurity labs</li>
                        <li>Contribute to open-source projects and mentor emerging developers</li>
                        <li>Apply machine learning to solve real-world business challenges</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Knowledge and Skills Section */}
            <div className="websites-container">
              <div className='name-heading2'>
                <h1>
                  <TypedWhatIKnow />
                </h1>
                <div className="split-container">
                  <div className="left-column">
                    <SkillsSection />
                  </div>
                  <div className="right-column">
                    <div className='websites-container-content2'>
                      <ul>
                        <li><b>Full-stack mastery</b>: <b>React</b>, <b>TypeScript</b>, <b>Python</b>, <b>Solidity</b> - from frontend to blockchain</li>
                        <li><b>Security expertise</b>: Penetration testing, vulnerability assessment, threat analysis</li>
                        <li><b>Enterprise infrastructure</b>: <b>VMware ESXi</b>, <b>Proxmox VE</b>, <b>Docker</b> on Dell PowerEdge & HP servers</li>
                        <li><b>Blockchain security</b>: Smart contract auditing, honeypot detection, multi-chain analysis</li>
                        <li><b>Machine learning</b>: <b>TensorFlow</b>, <b>scikit-learn</b> for predictive analytics and automation</li>
                        <li><b>API integration</b>: <b>REST</b>, <b>WebSocket</b>, <b>GraphQL</b> for seamless third-party connections</li>
                        <li><b>DevOps proficiency</b>: <b>Docker</b>, containerization, and automated deployment pipelines</li>
                        <li><b>Business communication</b>: Technical documentation and stakeholder presentations that drive decisions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="App-header">
              <div className='name-heading'>
                <h1>Thank you for reading</h1>
                <center><p id="email" className="text-center"><a href="mailto:Hire@MCeponis.com" className="email-link">Hire@MCeponis.com</a></p></center>
                <a href="https://github.com/CeponisM/Resume-App" target="_blank" rel="noopener noreferrer" className="social-link-footer"><FontAwesomeIcon icon={faGithub} /> View Website Source Code</a>
              </div>
            </footer>
          </div>
        </div>
        <SidebarIndex />
      </div >
    </ThemeProvider >
  );
}

export default App;
