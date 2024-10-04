import React, { useEffect, useState } from 'react';
import './Home.css'; // Import home-specific styles
import profilePic from '../images/profile.jpg'; // Import profile picture

function Home() {
  const [animateText, setAnimateText] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimateText(true), 100); // Delay for text animation
    const timer2 = setTimeout(() => setAnimateImage(true), 400); // Delay for image animation

    // Cleanup timers on unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className={animateText ? 'animate-text' : ''}>Hi, I'm Durga</h1>
        <h2 className={animateText ? 'animate-text' : ''}>Software Developer</h2>
        <div className="social-icons">
          {/* Social icons */}
        </div>
      </div>
      <div className="home-image">
        <img
          className={animateImage ? 'animate-image' : ''}
          src={profilePic}
          alt="Profile"
        />
      </div>
    </section>
  );
}

export default Home;
