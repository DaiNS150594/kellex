import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import './index.css';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader">
      <div className="progress-circle" style={{
        background: `conic-gradient(#00bfff ${progress}%, #222 ${progress}%)`
      }}>
        <span>{progress}%</span>
        <div className="progress-mask"></div>
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : <><Header /><Hero /></>}
    </>
  );
};

export default App;
