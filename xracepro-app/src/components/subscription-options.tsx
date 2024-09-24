import React, { useState } from 'react';
import './SubscriptionOptions.css'; // Make sure to create this CSS file

const SubscriptionOptions = () => {
  const [popupMessage, setPopupMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPopupMessage('Please enter a valid email address.');
  };

  return (
    <div className="subscription-container">
      <div className="subscription-box">
        <h2>Pay Per View</h2>
        <p>Watch a single Formula One match in immersive XR.</p>
        <ul>
          <li>Video Quality: 720p</li>
          <li>Access on 1 device</li>
          <li>One-time payment per match</li>
          <li>Price: <h2>9.99 SGD</h2> per match</li>
          <li>
          <form onSubmit={handleSubmit} className="pay-per-view">
            <button color="red" className="pay-per-view-btn">
            <b>Buy Now</b>
            </button>
          </form>
          </li>
        </ul>
      </div>

      <div className="subscription-box">
        <h2>Monthly Subscription</h2>
        <p>Unlimited access to Formula One matches for the month.</p>
        <ul>
          <li>Video Quality: 1080p</li>
          <li>Access on up to 2 devices</li>
          <li>Exclusive XR camera angles</li>
          <li>Price: <h2>29.99 SGD</h2> per month</li>
          <li>
          <form onSubmit={handleSubmit} className="monthly-view">
            <button color="red" className="monthly-view-btn">
            <b>Buy Now</b>
            </button>
          </form>
          </li>
        </ul>
      </div>

      <div className="subscription-box">
        <h2>Annual Subscription</h2>
        <p>Year-round access to all Formula One races and events in XR.</p>
        <ul>
          <li>Video Quality: 4K Ultra HD</li>
          <li>Access on up to 4 devices</li>
          <li>Exclusive behind-the-scenes content</li>
          <li>Price: <h2>299.99 SGD</h2> per year</li>
          <li>
          <form onSubmit={handleSubmit} className="monthly-view">
            <button color="red" className="monthly-view-btn">
              <b>Buy Now</b>
            </button>
          </form>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionOptions;
