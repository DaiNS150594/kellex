import React from 'react';
import './hero.scss';
import video1Webm from '../../assets/image/Comp_1.webm';
import video2Webm from '../../assets/image/Comp_2.webm';
import video3Webm from '../../assets/image/Comp_3.webm';
import video4Webm from '../../assets/image/Comp_4.webm';
import video5Webm from '../../assets/image/Comp_5.webm';
import video6Webm from '../../assets/image/Comp_6.webm';
import video1Mov from '../../assets/image/Comp_1.mov';
import video2Mov from '../../assets/image/Comp_2.mov';
import video3Mov from '../../assets/image/Comp_3.mov';
import video4Mov from '../../assets/image/Comp_4.mov';
import video5Mov from '../../assets/image/Comp_5.mov';
import video6Mov from '../../assets/image/Comp_6.mov';

const videoSources = [
  { webm: video1Webm, mov: video1Mov },
  { webm: video2Webm, mov: video2Mov },
  { webm: video3Webm, mov: video3Mov },
  { webm: video4Webm, mov: video4Mov },
  { webm: video5Webm, mov: video5Mov },
  { webm: video6Webm, mov: video6Mov }
];

const Hero = () => {
  const handleMouseMove = (e) => {
    const { currentTarget: video } = e;
    const rect = video.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    video.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
  };

  return (
    <div className="hero">
      {videoSources.map((videoSrc, index) => (
        <video
          key={index}
          className={`video video-${index + 1}`}
          autoPlay
          loop
          muted
          playsInline
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <source src={videoSrc.mov} type="video/quicktime" />
          <source src={videoSrc.webm} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      ))}

      <div className="wrap-hero">
        <h1 className="ml16">From Heritage to Modernity:</h1>
        <div className="text-hero ml12">Redefining Architecture</div>
        <a className="btnHero hover-border-5" href="#contact-us">
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Hero;
