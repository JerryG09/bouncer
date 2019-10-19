import React from 'react';
import './Bouncer.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      {/* <a href="#" className="navbar-brand"></a> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <a href="#" className="nav-link">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              STORE
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              IPHONE
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              IPAD
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              MACBOOK
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              ACCESSORIES
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
