import React from 'react'
import'../App.css';
import {Button} from './Button';
import {Button2} from './Button2';
import './HeroSection.css';

// This will be used to put the video (background effect)
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted/>
      <h1>Let's Explore the Universe</h1>
      <p>Get ready to fly</p>
      <div>
        <Button2 className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>
            Look through a bird's eye
        </Button2>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>
            Test Your Space Knowledge<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
