import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  return (
    <div className="bar-container">
      <div className="bar-top">
        <button>Play</button>
      </div>
      <div className="bar-bottom">
        <div className="progress-container"></div>
      </div>

    </div>
  );
};

export default ProgressBar;
