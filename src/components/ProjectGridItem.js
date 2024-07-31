import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectGridItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="project-grid-item"
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <LazyLoadImage
        src={project.image}
        alt={project.name}
        effect="blur"
        className="project-image"
      />
      <motion.div 
        className="project-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3>{project.name}</h3>
        <p>{project.info}</p>
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          Visit Project
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectGridItem;