import React from 'react';
import './HeaderTop.css';
function HeaderTop() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-between header--selection">
          <div className="">
            <select id="">
              <option value="English">EN</option>
            </select>
            <select id="">
              <option value="dollars">USD</option>
            </select>
          </div>

          <div className="d-flex">
            <div className="d-flex justify-content-center align-items-center">
              <i className="material-icons">person_outline</i>
              <h6 className="d-line">My profile</h6>
            </div>
            <div className="d-flex justify-content-center align-items-center ml-3">
              <i className="material-icons">shopping_basket</i>
              <h6>
                0 item <span className="grey">$0.00</span>
              </h6>
            </div>
            <div className="d-flex justify-content-center align-items-center ml-3">
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
