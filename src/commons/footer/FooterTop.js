import React from 'react';
import './FooterTop.css';

function FooterTop() {
  return (
    <div className="container pt-3">
      <div className="row pb-4">
        <div className="col-md-4 pl-0">
          <h4 className="footerTop--bouncer pb-3">BOUNCER</h4>
          <p className="pr-5 footer--line-height">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quos
            vero optio, odio sed, magni iusto cumque maiores aperiam odit velit
            repellat est, ad esse.
          </p>
        </div>
        <div className="col-md-4 pl-0">
          <h5 className="footer--header pb-3">Follow Us</h5>
          <p className="pr-5 footer--line-height">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus animi aliquid dicta?
          </p>
        </div>
        <div className="col-md-4 pl-0">
          <h5 className="footer--header pb-3">Contact Us</h5>
          <p className="footer--line-height">
            My Company, 4578 Mamora Road, Glasgow
          </p>
          <p className="footer--line-height">D04 89GR</p>
          <p className="footer--line-height">Call us now: 0123-456-789</p>
          <p className="footer--line-height">Email: support@whatever.com</p>
        </div>
      </div>

      <div className="horizontal--line p-0"></div>

      <div className="row pt-4">
        <div className="col-md-2 pl-0">
          <h4 className="footer--header pb-3">Information</h4>
          <div className="info--content">
            <p className="pb-1">About Us</p>
            <p className="pb-1">Information</p>
            <p className="pb-1">Privacy</p>
            <p className="pb-1">Terms and Condition</p>
          </div>
        </div>
        <div className="col-md-2 pl-0">
          <h4 className="footer--header pb-3">Services</h4>
          <div className="info--content">
            <p className="pb-1">About Us</p>
            <p className="pb-1">Information</p>
            <p className="pb-1">Privacy</p>
            <p className="pb-1">Terms and Condition</p>
          </div>
        </div>
        <div className="col-md-2 pl-0">
          <h4 className="footer--header pb-3">Extras</h4>
          <div className="info--content">
            <p className="pb-1">About Us</p>
            <p className="pb-1">Information</p>
            <p className="pb-1">Privacy</p>
            <p className="pb-1">Terms and Condition</p>
          </div>
        </div>
        <div className="col-md-2 pl-0">
          <h4 className="footer--header pb-3">My Account</h4>
          <div className="info--content">
            <p className="pb-1">About Us</p>
            <p className="pb-1">Information</p>
            <p className="pb-1">Privacy</p>
            <p className="pb-1">Terms and Condition</p>
          </div>
        </div>
        <div className="col-md-2 pl-0">
          <h4 className="footer--header pb-3">Useful Links</h4>
          <div className="info--content">
            <p className="pb-1">About Us</p>
            <p className="pb-1">Information</p>
            <p className="pb-1">Privacy</p>
            <p className="pb-1">Terms and Condition</p>
          </div>
        </div>
        <div className="col-md-2 pl-0">
          <h4 className="footer--header pb-3">Our Offers</h4>
          <div className="info--content">
            <p className="pb-1">About Us</p>
            <p className="pb-1">Information</p>
            <p className="pb-1">Privacy</p>
            <p className="pb-1">Terms and Condition</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
