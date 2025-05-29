import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectListItem = ({ project }) => {
  return (
    <motion.div
      className="project-list-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <h2 className="project-title">{project.name}</h2>
      <div className="project-content">
        <div className="project-content-left">
          <LazyLoadImage
            src={project.image}
            alt={project.name}
            effect="blur"
            className="project-image"
          />
          <p />
          <div className="project-buttons">
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Project
            </motion.a>
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Code
              </motion.a>
            )}
          </div>
        </div>
        <div className='project-content-right'>
          <div className="project-info">
            <p dangerouslySetInnerHTML={{ __html: project.extendedInfo }}></p>
          </div>
          <motion.div
            className="project-improvements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {project.improvements[0] ? <h3>Planned Improvements:</h3> : ''}
            <ul>
              {project.improvements.map((improvement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {improvement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectListItem;
