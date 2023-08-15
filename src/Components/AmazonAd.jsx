import React from 'react';
import "../Styles/AmazonAd.css"
const AmazonAd = () => {
  return (
    <section className="amazon-section">
      <div className="container">
        <div className="amazon-content">
          <h2>Get Your Anti Barking Device Now!</h2>
          <p>Experience peace and harmony with our effective Anti Barking Device.</p>
          <ul>
            <li>Amazon Prime Shipping: Free shipping + 2 day delivery all throughout Canada</li>
            <li>Exclusive 15% Launch Sale Coupon until August 31st</li>
            <li>Certified and Approved Effectiveness to Deter Barks</li>
            <li>Full Refund/Product Replacement Guarantee!</li>
          </ul>
          <a
            href="https://amzn.to/3QAbAmC"
            target="_blank"
            rel="noopener noreferrer"
            className="amazon-link"
          >
            Buy Now on Amazon
          </a>
        </div>
      </div>
    </section>
  );
};

export default AmazonAd;