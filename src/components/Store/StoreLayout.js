import React from 'react';
import './StoreLayout.css';

function StoreLayout() {
  return (
    <div className="container">
      <div className="row store--wrapper pt-5">
        <div className="col-md-3">Accesories</div>
        <div className="col-md-9">
          <div className="row store--hero--wrapper">
            <div className="col-md-6 text-white d-flex flex-column justify-content-center pl-5">
              <h2 className="pb-3">iPhone 8</h2>
              <p className="padding--right--7">Performance and design. taken right to the edge.</p>
              <div className="shop--now--border">
                <h5 className="pt-3">SHOP NOW</h5>
              </div>
            </div>
            <div className="col-md-6 hero--iphone--8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreLayout;
