import React from 'react';
import './StoreLayout.css';

function StoreLayout() {
  return (
    <div className="container store--page--wrapper">
      <div className="row pt-5">
        <div className="col-md-3 store--side--nav">
          <div className="side--nav--container">
            <div className="store--top--side side--bottom--margin side--nav--container">
              <h5 className="side--nav--header pb-3 pt-2">ACCESSORIES</h5>
              <div className="d-flex justify-content-between">
                <p>Apple Car</p>
                <p className="side--nav--grey">2</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="side--nav--blue">Air port & wireless</p>
                <p className="side--nav--blue">48</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="">Cables & Docks</p>
                <p className="side--nav--grey">14</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Cases & Films</p>
                <p className="side--nav--grey">15</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Charging Devices</p>
                <p className="side--nav--grey">23</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Connected home</p>
                <p className="side--nav--grey">1</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Headphones</p>
                <p className="side--nav--grey">95</p>
              </div>
            </div>

            <div className="store--side-1 side--bottom--margin side--nav--container">
              <h5 className="pb-3">PRICES</h5>
              <div className="d-flex justify-content-between">
                <h6>Ranger :</h6>
                <h6>$13.99 - $25.99</h6>
              </div>
              <div className="progress--bar--side mt-4 mb-4"></div>
            </div>

            <div className="store--side-1 side--bottom--margin side--nav--container">
              <h5>COLOR</h5>
              <div className="d-flex justify-content-between pt-3 pb-3">
                <i className="fa fa-circle side--nav--icon6"></i>
                <i className="fa fa-circle side--nav--icon5"></i>
                <i className="fa fa-circle side--nav--icon4"></i>
                <i className="fa fa-circle side--nav--icon3"></i>
                <i className="fa fa-circle side--nav--icon2"></i>
                <i className="fa fa-circle side--nav--icon1"></i>
              </div>
            </div>

            <div className="store--top--side side--bottom--margin side--nav--container">
              <h5 className="side--nav--header pb-3 pt-2">BRAND</h5>
              <div className="d-flex justify-content-between">
                <p>Apple</p>
                <p className="side--nav--grey">99</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="side--nav--blue">Lg</p>
                <p className="side--nav--blue">99</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="">Samsung</p>
                <p className="side--nav--grey">99</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Siemens</p>
                <p className="side--nav--grey">99</p>
              </div>
            </div>

            <div className="store--side-1 d-flex justify-content-center pt-4">
              <p>MORE</p>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="row store--hero--wrapper">
            <div className="col-md-6 store--hero--wrapper-2 text-white d-flex flex-column justify-content-center pl-5">
              <h2 className="pb-3">iPhone 8</h2>
              <p className="padding--right--7">
                Performance and design. taken right to the edge.
              </p>
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
