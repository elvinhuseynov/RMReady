// src/App.tsx
import { useState, useEffect } from 'react';
import './App.css';

const GRID_SIZE = 3;            // 3×3 grid
const TOTAL_TIME = 30;          // game length in seconds
const MOLE_INTERVAL = 800;      // how often a new “mole” appears (ms)

export const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isPlaying, setIsPlaying] = useState(false);

  // Game loop: spawn “mole” and count down timer
  useEffect(() => {
    let moleTimer
    let countdown

    if (isPlaying) {
      moleTimer = setInterval(() => {
        setActiveIndex(Math.floor(Math.random() * GRID_SIZE * GRID_SIZE));
      }, MOLE_INTERVAL);

      countdown = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(moleTimer);
            clearInterval(countdown);
            setIsPlaying(false);
            setActiveIndex(null);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(moleTimer);
      clearInterval(countdown);
    };
  }, [isPlaying]);

  const handleBoxClick = (idx) => {
    if (!isPlaying) return;
    if (idx === activeIndex) {
      setScore(s => s + 1);
      setActiveIndex(null);
    }
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(TOTAL_TIME);
    setIsPlaying(true);
  };

  return (
    <div className="App">
      {!isPlaying ? (
    <>
        <button className="start-btn" onClick={startGame}>
          Start Game
        </button>
        <span>Score: {score}</span>
        </>
      ) : (
        <>
          <div className="info">
            <span>Time: {timeLeft}s</span>
            <span>Score: {score}</span>
          </div>

          <div className="grid">
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
              <div
                key={i}
                className={`box ${i === activeIndex ? 'active' : ''}`}
                onClick={() => handleBoxClick(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
