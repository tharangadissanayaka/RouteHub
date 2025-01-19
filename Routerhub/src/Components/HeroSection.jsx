import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import heroVideo from './hero.mp4';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={heroVideo} autoPlay loop muted aria-label="Hero Background Video">
        Your browser does not support the video tag. Please update your browser.
      </video>
      <h1>Welcome to RouterHub</h1>
      <p>Discover the world, one adventure at a time</p>
      <div className="hero-btns">
        <Button 
        className="btn1" 
        buttonStyle="btn--outline" 
        buttonSize="btn--large" 
        linkTo="/register"
        >
          Get Started
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;