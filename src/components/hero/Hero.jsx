import React from 'react';
import './hero.scss';
import video1 from '../../assets/image/Comp_1.webm';
import video2 from '../../assets/image/Comp_2.webm';
import video3 from '../../assets/image/Comp_3.webm';
import video4 from '../../assets/image/Comp_4.webm';
import video5 from '../../assets/image/Comp_5.webm';
import video6 from '../../assets/image/Comp_6.webm';

const videos = [video1, video2, video3, video4, video5, video6];

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
      {videos.map((videoSrc, index) => (
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
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}

      <div className="wrap-hero">
        <h1 className="ml16">From Heritage to Modernity:</h1>
        <div className="text-hero ml12">Redefining Architecture</div>
        <a className="btnHero hover-border-5" href="#contact-us">
          Contact us
          <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <g filter="url(#filter0_d_88_3)">
              <path d="M18.671 10.9832L8.63001 21.0243L6.9801 19.3744L17.0211 9.33333H8.17106V7H21.0044V19.8333H18.671V10.9832Z" fill="#BFF5FF"/>
            </g>
            <defs>
              <filter id="filter0_d_88_3" x="-4" y="-4" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.9 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_3"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_3" result="shape"/>
              </filter>
            </defs>
          </svg>
          <svg className='iconHover' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <g filter="url(#filter0_d_39_15)">
              <path d="M18.6709 10.9832L8.62989 21.0243L6.97998 19.3744L17.021 9.33333H8.17094V7H21.0042V19.8333H18.6709V10.9832Z" fill="white"/>
            </g>
            <defs>
              <filter id="filter0_d_39_15" x="-4" y="-4" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.9 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_15"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_15" result="shape"/>
              </filter>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
