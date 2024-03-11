import React from 'react';
import './Phrases.css';

const Phrases = () => {
  return (
    <div className="phrase-container">
      <div className="phrase-item">
        <i className="fas fa-palette"></i>
        <span className="phrase">Avant-Garde Mavericks</span>
      </div>
      <div className="phrase-item">
        <i className="fas fa-brush"></i>
        <span className="phrase">Emblazoned Artistry</span>
      </div>
      <div className="phrase-item">
        <i className="fas fa-eye"></i>
        <span className="phrase">Transcendent Visualizations</span>
      </div>
    </div>
  );
};

export default Phrases;