import React from 'react';
import './Rectangle1.css';

function Rectangle1() {
  return (
    <div className="container-fluid rectangle1--wrapper">
      <div className="container rectangle1--container">
        <div className="row rectangle1--container">
          <div className="col-md-6 d-flex flex-column justify-content-center text-white ">
            <h3>iPhone 6 plus</h3>
            <p>Performance and design. Taken right to the edge</p>
            <h6>SHOP NOW</h6>
          </div>
          <div className="col-md-6">
            <img
              src={require('../../assets/images/iPhone6s_discover_desktop_08_iOS9-1.png')}
              className="rectangle1--img"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rectangle1;
