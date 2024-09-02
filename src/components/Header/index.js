import React, { useState } from 'react';
import './index.css';

const Header = ({startGame, pauseGame, timer, setTimer}) => {

    const setTime = (e) => {
        if (e.target.value > 0 && e.target.value < 11) {
            setTimer(e.target.value);               
        }      
    }

  return (
    <div className='header'>
        <button onClick={(e) => startGame(e)}>Start</button>
        <button onClick={(e) => pauseGame(e)}>Pause</button>
        <button>Reset</button>
        <input value={timer} type='number' onChange={(e) => setTime(e)} placeholder='timer' />
    </div>
  )
}

export default Header