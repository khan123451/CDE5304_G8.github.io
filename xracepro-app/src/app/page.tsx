"use client"; // Add this at the very top of the file

import React, { useState } from 'react';
import { ModelViewer } from '../components/model-viewer';
import SubscriptionOptions from '../components/subscription-options';
import NavBar from './navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation regex
    const emailRegex = /\S+@\S+\.\S+/;

    if (emailRegex.test(email)) {
      setPopupMessage('Thank you for your interest! We will contact you soon.');
    } else {
      setPopupMessage('Please enter a valid email address.');
    }

    // Reset the email input
    setEmail('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const closePopup = () => {
    setPopupMessage('');
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>
            XRace<span className={styles.highlight}>Pro</span>: Your Next Tool for Formula One Game Watching
          </h1>
          <p className={styles.subheading}>
            Experience Formula One racing like never before with <strong>XRacePro</strong>. Dive into the action with extended reality!
          </p>
          <br />
          <br />
          <br />
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <div className={styles.modelViewerContainer}>
        <ModelViewer />
      </div>

      {popupMessage && (
        <>
          <div className={styles.popup}>
            <p>{popupMessage}</p>
            <button onClick={closePopup} className={styles.closeButton}>
              Close
            </button>
          </div>
          <div className={styles.popupBackground} onClick={closePopup}></div>
        </>
      )}

      <SubscriptionOptions />
    </div>
  );
}
