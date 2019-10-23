import React from 'react';
import './ProductLayout.css';

function ProductLayout() {
  return (
    <div className="container">
      <div className="row product--page--wrapper">
        <div className="col-md-9 product--details-wrapper">
          <div className="product--details--container">hi</div>
        </div>
        <div className="col-md-3 product--details--side">
          <div className="d-flex flex-column details--side--container">
            <h5>BEST SELLER</h5>
            <div className="card-deck">
              <div className="card">
                <img
                  src={require('../../assets/images/50061505_575246-1.png')}
                  alt=""
                />
                {/* <div className="product--box--line"></div> */}
                <div className="product--side--footer pr-3 pl-3">
                  <p>Apple MAcbook Pro</p>
                  <div className="d-flex justify-content-center text-center pt-3">
                    <i className="material-icons star--color">star</i>
                    <i className="material-icons star--color">star</i>
                    <i className="material-icons star--color">star</i>
                    <i className="material-icons star--color">star</i>
                    <i className="material-icons star--grey">star</i>
                  </div>
                  <h6 className="pt-3">
                    <span className="pr-3">$499</span>{' '}
                    <span className="">$599</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductLayout;
