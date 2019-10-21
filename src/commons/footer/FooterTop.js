import React from 'react';
import './FooterTop.css';

function FooterTop() {
  return (
    <div className="container">
      <div class="row">
        <div className="col-md-4">
          <h4 className="footerTop--bouncer">BOUNCER</h4>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quos
            vero optio, odio sed, magni iusto cumque maiores aperiam odit velit
            repellat est, ad esse.
          </h4>
        </div>
        <div className="col-md-4">
          <h5>Follow Us</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus animi aliquid dicta?
          </p>
        </div>
        <div className="col-md-4">
          <h5>Contact Us</h5>
          <p>My Company, 4578 Mamora Road, Glasgow</p>
          <p>D04 89GR</p>
          <p>Call us now: 0123-456-789</p>
          <p>Email: support@whatever.com</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-2">
          <h4>Information</h4>
          <div className="info--content">
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy</p>
            <p>Terms and Condition</p>
          </div>
        </div>
        <div className="col-md-2">
          <h4>Service</h4>
          <div className="info--content">
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy</p>
            <p>Terms and Condition</p>
          </div>
        </div>
        <div className="col-md-2">
          <h4>Extras</h4>
          <div className="info--content">
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy</p>
            <p>Terms and Condition</p>
          </div>
        </div>
        <div className="col-md-2">
          <h4>My Account</h4>
          <div className="info--content">
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy</p>
            <p>Terms and Condition</p>
          </div>
        </div>
        <div className="col-md-2">
          <h4>Useful Links</h4>
          <div className="info--content">
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy</p>
            <p>Terms and Condition</p>
          </div>
        </div>
        <div className="col-md-2">
          <h4>Our Offers</h4>
          <div className="info--content">
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy</p>
            <p>Terms and Condition</p>
          </div>
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="footer--bottom--left">
          <p> 2018 Ecommerce theme by www.bisenbaev.com</p>
        </div>
        <div className="footer--bottom--right">
          <div className="footer--western--union"></div>
          <div className="footer--mastercard"></div>
          <div className="footer--paypal"></div>
          <div className="footer--visa"></div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
