import React from 'react';
import "../Styles/AmazonAd.css"
import Flyer from './Flyer';

const AmazonAd = () => {
  return (
    <section style={{backgroundColor: ' #d5d8dc '}} className="amazon-section">
      <div className="container">
        <div className="amazon-content">
          <div className='main-image'>
            <Flyer key={3} exp="123" logo={'/Images/NewMainOne.jpg'}></Flyer>
          </div>
          <div className='Main-text'>
            <h1>Get Your Anti Barking Device Now!</h1>
            <h2>Experience peace and harmony with our effective Anti Barking Device.</h2>
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
      </div>
    </section>
  );
};

export default AmazonAd;