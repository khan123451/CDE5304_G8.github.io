"use client";

import NavBar from '../navbar';
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <NavBar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Experience Formula 1 Like Never Before</h1>
          <p className="hero-description">
            Dive into the world of high-speed racing with our cutting-edge XR technology. Feel the adrenaline rush as you become part of the action.
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
            At XRacePro, our mission is to revolutionize the way fans engage with Formula 1 racing. By harnessing the power of XR, we aim to create immersive experiences that bring you closer to the thrill, the speed, and the excitement of the race track.
          </p>
          <p>
            We believe that watching a race should be more than a passive experience. With our technology, you can feel the roar of the engines, the heat of the competition, and the pulse of the race—all from the comfort of your own space.
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
            <p>Tailor your Formula 1 experience, whether you are a casual fan or a seasoned pro. Customize your viewing angles and more.</p>
          </div>
          <div className="feature-card">
            <h3>Live Interactions</h3>
            <p>Interact with other fans in real-time, share your excitement, and be part of a global community.</p>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team-member2.jpg" alt="Jane Smith" />
            <h3>Zou Kai</h3>
            <p>Formula 1 Analyst</p>
            <p>Jane&apos;s deep understanding of Formula 1 brings authenticity and insight to our XR experiences.</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member1.jpg" alt="John Doe" />
            <h3>Zheng Zikang</h3>
            <p>Lead XR Developer</p>
            <p>With over a decade of experience in XR development, John leads our technical team to push the boundaries of immersive technology.</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member1.jpg" alt="Alex Johnson" />
            <h3>Feng Weiyi</h3>
            <p>Creative Director</p>
            <p>Alex crafts the visual storytelling that makes our XR experiences truly unforgettable.</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member2.jpg" alt="Maria Garcia" />
            <h3>Cheng Wei</h3>
            <p>UX/UI Designer</p>
            <p>Maria ensures that our platforms are intuitive and engaging, providing seamless user experiences.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Feel the Speed?</h2>
        <p>Join the future of Formula 1 viewing with XR. It’s time to take your seat in the cockpit!</p>
        <button className="cta-button">Get Started</button>
      </section>

      <style jsx>{`
        /* Container Styles */
        .about-container {
          font-family: 'Arial', sans-serif;
          color: #333;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          padding: 50px;
          background-image: url('/images/hero-bg.jpg');
          background-size: cover;
          background-position: center;
          color: #fff;
          animation: fadeIn 2s ease-in;
        }
        .hero-content {
          flex: 1;
          min-width: 300px;
          margin-right: 20px;
        }
        .hero-title {
          font-size: 3rem;
          margin-bottom: 20px;
          animation: slideInLeft 1s ease-in-out;
        }
        .hero-description {
          font-size: 1.5rem;
          max-width: 500px;
        }
        .hero-image {
          flex: 1;
          min-width: 300px;
          animation: slideInRight 1s ease-in-out;
        }
        .hero-image img {
          width: 100%;
          border-radius: 10px;
        }

        /* Mission Section */
        .mission-section {
          padding: 50px;
          background-color: #f9f9f9;
        }
        .mission-section h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .mission-content p {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Features Section */
        .features-section {
          padding: 50px;
          background-color: #fff;
        }
        .features-section h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 40px;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        .feature-card {
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .feature-card h3 {
          font-size: 1.8rem;
          margin-bottom: 15px;
        }
        .feature-card p {
          font-size: 1rem;
          line-height: 1.5;
        }

        /* Team Section */
        .team-section {
          padding: 50px;
          background-color: #f9f9f9;
        }
        .team-section h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 40px;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }
        .team-member {
          text-align: center;
        }
        .team-member img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-bottom: 15px;
          transition: transform 0.3s;
        }
        .team-member img:hover {
          transform: scale(1.1);
        }
        .team-member h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .team-member p {
          font-size: 1rem;
          line-height: 1.4;
        }

        /* CTA Section */
        .cta-section {
          padding: 50px;
          background-color: #000;
          color: #fff;
          text-align: center;
        }
        .cta-section h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .cta-section p {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }
        .cta-button {
          padding: 15px 30px;
          background-color: #ff0000;
          color: #fff;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .cta-button:hover {
          background-color: #e60000;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-50%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(50%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
          }
          .hero-content, .hero-image {
            margin: 0;
          }
          .features-grid, .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
