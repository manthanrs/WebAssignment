import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/Gymkhana.jpg"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>IIT Bombay presents</p>
            <h1>Aavhan</h1>
        </div>        
    </div>
    
  );
};

export default HeroImg;