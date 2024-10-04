import React, { useEffect, useState } from 'react';
import './About.css'; // Import about-specific styles

function About() {
  const [animate, setAnimate] = useState(false);

  // Function to handle the animation
  const handleAnimation = () => {
    setAnimate(false); // Reset animation
    setTimeout(() => {
      setAnimate(true); // Trigger animation after reset
    }, 50); // Small timeout to allow reset
  };

  // Re-trigger animation on click
  const handleClick = () => {
    handleAnimation();
  };

  useEffect(() => {
    handleAnimation(); // Trigger animation when component mounts
  }, []);

  return (
    <section id="about" className={`about ${animate ? 'fade-in' : ''}`} onClick={handleClick}>
      <h2>About Me</h2>
      <p>
        I am a passionate software developer currently pursuing my 3rd year in 
        Computer Science and Engineering. I have a keen interest in building 
        applications that solve real-world problems. My experience includes working 
        with various technologies such as C, C++, Python, Java, HTML, CSS, JavaScript. 
        I enjoy collaborating with teams and continuously learning new skills 
        to enhance my development capabilities.
      </p>
      <p>
        In my free time, I explore open-source projects and contribute to the 
        developer community. I believe in continuous learning and strive to stay 
        updated with the latest trends in technology. My goal is to create efficient 
        and user-friendly software solutions that make a positive impact on people's lives. 
        I'm excited to take on new challenges and grow in my career as a software developer.
      </p>
    </section>
  );
}

export default About;
