import React from 'react';
import './hero.scss';
import video1Webm from '../../assets/image/Comp_1.webm';
import video2Webm from '../../assets/image/Comp_2.webm';
import video3Webm from '../../assets/image/Comp_3.webm';
import video4Webm from '../../assets/image/Comp_4.webm';
import video5Webm from '../../assets/image/Comp_5.webm';
import video6Webm from '../../assets/image/Comp_6.webm';
import videoPC_Safari from '../../assets/image/bg-desktop.mp4';
import videoMobile_Safari from '../../assets/image/bg-mobi.mp4';

const videoSources = [
  video1Webm,
  video2Webm,
  video3Webm,
  video4Webm,
  video5Webm,
  video6Webm
];

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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
      {isSafari ? (
        <video
          className="video-safari"
          autoPlay
          loop
          muted
          playsInline
          style={{ backgroundColor: 'transparent' }}
        >
          <source src={isMobile ? videoMobile_Safari : videoPC_Safari} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        videoSources.map((videoSrc, index) => (
          <video
            key={index}
            className={`video video-${index + 1}`}
            autoPlay
            loop
            muted
            playsInline
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundColor: 'transparent' }}
          >
            <source src={videoSrc} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ))
      )}

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
