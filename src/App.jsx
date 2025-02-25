import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import './index.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up the interval for adding the "active" class to bars
    const interval = 5 * 1000 / 40; // 5/16 seconds in milliseconds
    const bars = document.querySelectorAll('.bar-item');
    let currentIndex = 0;

    const addActiveClass = () => {
      if (currentIndex < bars.length) {
        // Add active class to the current bar
        bars[currentIndex].classList.add('active');
        currentIndex++;
      } else {
        // Stop the interval once all bars have the "active" class
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(addActiveClass, interval);

    // Hide loading screen after 5 seconds
    const timer = setTimeout(() => setLoading(false), 5000);

    // Cleanup interval and timer on component unmount
    return () => {
      clearInterval(intervalId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div id="loading-screen" className={`wrap-loading ${!loading ? 'hidden' : ''}`}>
        <h3 className="loading-text">LOADING...</h3>
        <div className="loading-bar">
          {Array.from({ length: 40 }).map((_, index) => (
            <div key={index} className="bar-item"></div>
          ))}
        </div>
      </div>
      <div id="main-content" className={`${!loading ? 'visible' : ''}`}>
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default App;
