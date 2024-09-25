import React from 'react';
import './SubscriptionOptions.css';

const SubscriptionOptions = () => {
  const handleSubmit = (e: React.FormEvent, plan: string) => {
    e.preventDefault();
    // Implement payment process here
    alert(`You have selected the ${plan} plan.`);
  };

  return (
    <div className="subscription-container">
      <div className="subscription-box" id="pay-per-view">
        <h2>Pay Per View</h2>
        <p>Watch a single Formula One match in immersive XR.</p>
        <ul>
          <li>Video Quality: 720p</li>
          <li>Access on 1 device</li>
          <li>One-time payment per match</li>
        </ul>
        <div className="price">
          <h2>9.99 SGD</h2>
          <span>per match</span>
        </div>
        <form onSubmit={(e) => handleSubmit(e, 'Pay Per View')}>
          <button type="submit" id="buy-now-pay-per-view" className="buy-now-btn">
            <b>Buy Now</b>
          </button>
        </form>
      </div>

      <div className="subscription-box" id="monthly-subscription">
        <h2>Monthly Subscription</h2>
        <p>Unlimited access to Formula One matches for the month.</p>
        <ul>
          <li>Video Quality: 1080p</li>
          <li>Access on up to 2 devices</li>
          <li>Exclusive XR camera angles</li>
        </ul>
        <div className="price">
          <h2>29.99 SGD</h2>
          <span>per month</span>
        </div>
        <form onSubmit={(e) => handleSubmit(e, 'Monthly Subscription')}>
          <button type="submit" id="buy-now-monthly" className="buy-now-btn">
            <b>Buy Now</b>
          </button>
        </form>
      </div>

      <div className="subscription-box" id="annual-subscription">
        <h2>Annual Subscription</h2>
        <p>Year-round access to all Formula One races and events in XR.</p>
        <ul>
          <li>Video Quality: 4K Ultra HD</li>
          <li>Access on up to 4 devices</li>
          <li>Exclusive behind-the-scenes content</li>
        </ul>
        <div className="price">
          <h2>299.99 SGD</h2>
          <span>per year</span>
        </div>
        <form onSubmit={(e) => handleSubmit(e, 'Annual Subscription')}>
          <button type="submit" id="buy-now-annual" className="buy-now-btn">
            <b>Buy Now</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionOptions;
