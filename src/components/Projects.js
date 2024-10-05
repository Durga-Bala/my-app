import React from 'react';
import './Projects.css'; // Import projects-specific styles
import hospitalManagementImg from '../images/hospital.png'; 
import restaurantWebsiteImg from '../images/food.png'; 
import ebookManagementImg from '../images/book.png'; 
import shipmentTrackingImg from '../images/shipment.jpg'; 
import carBookingImg from '../images/car.jpg'; 
import fruitsManagementImg from '../images/fruit.jpg'; 

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {/* Hospital Management System */}
        <div className="project">
          <div className="project-image-container">
            <img src={hospitalManagementImg} alt="Hospital Management System" className="project-image" />
            <div className="project-details">
              <h3>Hospital Management System</h3>
              <p>A comprehensive management system for hospitals to handle patient data, staff, and appointments efficiently.</p>
              <a href="#view-hospital-management" className="view-project-button">Project Code</a>
              <a href="/hospital-management-details" className="details-button">Show Project</a>
            </div>
          </div>
        </div>

        {/* Restaurant Website */}
        <div className="project">
          <div className="project-image-container">
            <img src={restaurantWebsiteImg} alt="Restaurant Website" className="project-image" />
            <div className="project-details">
              <h3>Restaurant Website</h3>
              <p>A dynamic website for a restaurant featuring menu display, online reservation, and more.</p>
              <a 
                href="https://github.com/Durga-Bala/Restaurant-Webpage.git"
                target="_blank" 
                rel="noopener noreferrer"
                className="view-project-button"
                >
                  View Code
              </a>
              <a href="http://127.0.0.1:3001/index.html"
              target="_blank" 
              rel="noopener noreferrer" 
              className="details-button">Show Project</a>
            </div>
          </div>
        </div>

        {/* E-Book Management */}
        <div className="project">
          <div className="project-image-container">
            <img src={ebookManagementImg} alt="E-Book Management" className="project-image" />
            <div className="project-details">
              <h3>E-Book Management</h3>
              <p>An application to manage e-books with features for shopping, reading, and adding to cart.</p>
              <a 
                href="https://github.com/Durga-Bala/Book-Shopping-Website.git"
                target="_blank" 
                rel="noopener noreferrer"
                className="view-project-button"
                >
                  View Code
              </a>
              <a href="/ebook-management-details" className="details-button">Project Details</a>
            </div>
          </div>
        </div>

        {/* Shipment Tracking using Blockchain */}
        <div className="project">
          <div className="project-image-container">
            <img src={shipmentTrackingImg} alt="Shipment Tracking" className="project-image" />
            <div className="project-details">
              <h3>Shipment Tracking using Blockchain</h3>
              <p>A secure system using blockchain technology to track shipments and verify data integrity.</p>
              <a href="#view-shipment-tracking" className="view-project-button">View Code</a>
              <a href="/shipment-tracking-details" className="details-button">Show Project</a>
            </div>
          </div>
        </div>

        {/* Car Booking Management */}
        <div className="project">
          <div className="project-image-container">
            <img src={carBookingImg} alt="Car Booking Management" className="project-image" />
            <div className="project-details">
              <h3>Car Booking Management</h3>
              <p>An online platform for booking cars with features like availability check and booking confirmation.</p>
              <a href="#view-car-booking" className="view-project-button">View Code</a>
              <a href="/car-booking-details" className="details-button">Show Project</a>
            </div>
          </div>
        </div>

        {/* Fruits Management using C */}
        <div className="project">
          <div className="project-image-container">
            <img src={fruitsManagementImg} alt="Fruits Management" className="project-image" />
            <div className="project-details">
              <h3>Fruits Management using C</h3>
              <p>A C-based application to manage fruits stock with options for adding, deleting, and updating entries.</p>
              <a href="#view-fruits-management" className="view-project-button">View Code</a>
              <a href="/fruits-management-details" className="details-button">Show Project</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
