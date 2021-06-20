import React, { useReducer, useEffect } from 'react';
import './ProgressBar.css';

const initialState = {
  duration: 10,
  currentTime: 0,
  playing: false
}

const reducer = (state, action) => {
  console.log('reducer', action, state.currentTime);
  switch(action.type) {
    case 'ADD_SONG': 
      return {
        ...state,
        currentSong: action.song
      }
    case 'SET_CURRENT_TIME': 
    if (state.currentTime + 1 > state.duration) {
      return {
        ...state,
        playing: false,
      }
    }
      return {
        ...state,
        currentTime: state.currentTime + 1
      }
    case 'PLAY':
      return {
        ...state,
        playing: true
      }
    case 'PAUSE': 
      return {
        ...state,
        playing: false
      }
    default:
      return console.log('No action selected');
  }
}

// const formatTime = (inputMilliSeconds) => {
//   const minutes = Math.floor(inputMilliSeconds / 60000);
//   const seconds = (( inputMilliSeconds % 60000) / 1000).toFixed(0);
//   return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
// }

const ProgressBar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleProgress = (currentTime, duration) => 750 * (currentTime / duration);

  useEffect(() => {
    let timer;
    if (state.playing) {
      timer = setTimeout(() => {
        dispatch({ type: 'SET_CURRENT_TIME' })
      }, 1000);
    }
    return () => clearTimeout(timer);
  });

  if (state === undefined) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="bar-container">
      <div className="bar-top">
        {state.playing
        ? <button onClick={() => dispatch({ type: 'PAUSE' })}>Pause</button>
        : <button onClick={() => dispatch({ type: 'PLAY' })}>Play</button>}
      </div>
      <div className="bar-bottom">
        <div className="progress-container">
          <div
          className="bar"
          style={{
            width: handleProgress(state.currentTime, state.duration)
          }}
          />
        </div>
        <div className="progress-duration">{state.duration}</div>
      </div>

    </div>
  );
};

export default ProgressBar;
