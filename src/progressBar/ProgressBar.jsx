import React, { useReducer } from 'react';
import './ProgressBar.css';

const initialState = {
  duration: 125368,
  currentTime: 0,
  playing: false
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'PLAY':
      return {
        ...state
      }
    case 'PAUSE': 
      return {
        ...state
      }
    default:
      return console.log('No action selected');
  }
}

const formatTime = (inputMilliSeconds) => {
  const minutes = Math.floor(inputMilliSeconds / 60000);
  const seconds = (( inputMilliSeconds % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

const ProgressBar = () => {
  return (
    <div className="bar-container">
      <div className="bar-top">
        {initialState.playing
        ? <button>Pause</button>
        : <button>Play</button>}
      </div>
      <div className="bar-bottom">
        <div className="progress-container"></div>
        <div className="progress-duration">{formatTime(initialState.duration)}</div>
      </div>

    </div>
  );
};

export default ProgressBar;
