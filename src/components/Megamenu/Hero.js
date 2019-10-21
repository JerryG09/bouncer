import React from 'react';
import './Hero.css';
function Hero() {
  return (
    <div className="container-fluid hero--wrapper">
      <div
        className="container d-flex align-items-center"
        style={{ height: '100%' }}
      >
        <div className="row align-items-center">
          <div className="col-md-1">
            <i className="fa fa-chevron-left"></i>
          </div>
          <div className="col-md-3">
            <div className="h3">iPhone X</div>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <h3>MORE</h3>
          </div>
          <div className="col-md-7">
            <img
              src={require('../../assets/images/Mask-Group-1.png')}
              alt="Mask Group 1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-1 d-flex justify-content-end">
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
