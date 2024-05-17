import React, { useState } from 'react';
import './index.scss';

const PopUp = ({ project, onClose }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(onClose, 500); // Match the transition duration
  };

  if (!project) return null;

  return (
    <div className={`popup-overlay ${fadeOut ? 'fade-out' : ''}`} onClick={handleClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button style={{ fontFamily: 'Coolvetica' }} onClick={handleClose} className="close-button">X</button>
        <h2>{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} className="main-image" />
        <div className="popup-details">
          {project.details} {/* Render the JSX content */}
        </div>
      </div>
    </div>
  );
};

export default PopUp;