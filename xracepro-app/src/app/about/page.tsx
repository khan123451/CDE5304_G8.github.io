"use client";

import NavBar from '../navbar';
import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <NavBar />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-description">
            We're a team of passionate XR developers and Formula 1 fans, bringing you a revolutionary way to experience the thrill of racing.
          </p>
        </div>
        <div className="hero-image">
          <img src="/images/formula_xr.jpg" alt="XR Racing Experience" />
        </div>
      </section>

      {/* Our Mission */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At XRacePro, we believe that Formula 1 deserves more than just watching—it deserves full immersion. 
            We are transforming the way fans interact with their favorite sport using XR technology.
          </p>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="features-section">
        <h2>Why Choose XR for Formula 1?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Immersive Viewing</h3>
            <p>Step into the driver’s seat and experience Formula 1 races like never before—up close, personal, and interactive.</p>
          </div>
          <div className="feature-card">
            <h3>360° Engagement</h3>
            <p>Feel the speed and intensity of the race, view real-time stats, and engage with the race environment in 360°.</p>
          </div>
          <div className="feature-card">
            <h3>Customizable Experience</h3>
            <p>Tailor your Formula 1 experience, whether you're a casual fan or a seasoned pro. Customize your viewing angles and more.</p>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team-member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Lead XR Developer</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Formula 1 Enthusiast</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Feel the Speed?</h2>
        <p>Join the future of Formula 1 viewing with XR. It’s time to take your seat in the cockpit!</p>
        <button className="cta-button">Get Started</button>
      </section>

      <style jsx>{`
        .about-container {
          font-family: 'Arial', sans-serif;
          color: #333;
        }
        .hero-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 50px;
          background-color: #000;
          color: #fff;
        }
        .hero-title {
          font-size: 3rem;
        }
        .hero-description {
          font-size: 1.5rem;
          max-width: 500px;
        }
        .hero-image img {
          width: 600px;
          border-radius: 10px;
        }
        .mission-section {
          padding: 50px;
          background-color: #f4f4f4;
        }
        .mission-section h2 {
          font-size: 2rem;
        }
        .features-section {
          padding: 50px;
          background-color: #fff;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .feature-card {
          padding: 20px;
          background-color: #f4f4f4;
          border-radius: 8px;
          text-align: center;
        }
        .team-section {
          padding: 50px;
          background-color: #f4f4f4;
        }
        .team-grid {
          display: flex;
          justify-content: space-between;
        }
        .team-member {
          text-align: center;
        }
        .team-member img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
        }
        .cta-section {
          padding: 50px;
          background-color: #000;
          color: #fff;
          text-align: center;
        }
        .cta-button {
          padding: 10px 20px;
          background-color: #ff0000;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .cta-button:hover {
          background-color: #ff4d4d;
        }
      `}</style>
    </div>
  );
};

export default About;
