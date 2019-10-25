import React from 'react';
import './Bouncer.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
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
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/store" className="nav-link">
                STORE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                IPHONE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                IPAD
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                MACBOOK
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                ACCESSORIES
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
