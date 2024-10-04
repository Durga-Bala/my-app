import React from 'react'; // Keep this import at the top
import './Skills.css'; // Import skills-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faDesktop } from '@fortawesome/free-solid-svg-icons'; // Use faFileCode for C Programming
import { faPython, faJava } from '@fortawesome/free-brands-svg-icons'; // Import Python and Java from brands

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <FontAwesomeIcon icon={faFileCode} className="skill-icon" />
          <h3>C Programming</h3>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faPython} className="skill-icon" />
          <h3>Python</h3>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faJava} className="skill-icon" />
          <h3>Java</h3>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faDesktop} className="skill-icon" />
          <h3>Web Development</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
