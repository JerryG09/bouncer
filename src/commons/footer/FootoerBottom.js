import React from 'react';
import './FooterBottom.css';

function FootoerBottom() {
  return (
    <div className="container">
      <div className="row justify-content-between pb-3">
        <div className="footer--bottom--left">
          <p className="grey">
            &copy; 2018 Ecommerce theme by www.bisenbaev.com
          </p>
        </div>
        <div className="d-flex footer--bottom--right">
          <div className="footer--western--union">
            <img
              src={require('../../assets/images/western-union.png')}
              className="footer--payment--icons2"
              alt="western union"
            />
          </div>
          <div className="footer--mastercard pl-2">
            <img
              src={require('../../assets/images/mastercard.jpg')}
              className="footer--payment--icons"
              alt="mastercard"
            />
          </div>
          <div className="footer--paypal pl-2">
            <img
              src={require('../../assets/images/paypal.jpg')}
              alt="paypal"
              className="footer--payment--icons2"
            />
          </div>
          <div className="footer--visa pl-2">
            <img
              src={require('../../assets/images/visa.png')}
              alt="visa"
              className="footer--payment--icons"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FootoerBottom;
