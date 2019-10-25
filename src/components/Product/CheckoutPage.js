import React from 'react';
import InputForm from '../Utils/InputForm';

function CheckoutPage() {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="d-flex">
          <div className="col-md-6">
            <h6>Product</h6>
          </div>
          <div className="col-md-2">
            <h6>PRICE</h6>
          </div>
          <div className="col-md-2">
            <h6>QTY</h6>
          </div>
          <div className="col-md-2">
            <h6>UNIT PRICE</h6>
          </div>
        </div>
        <div className="checkoutpage-divider"></div>
        <div className="d-flex">
          <div className="col-md-2">
            <img src={require('../../assets/images/c04297141@2x.png')} alt="" />
          </div>
          <div className="col-md-6">
            <p>Philips Hue 7W BR30 Connected Downlight Lamp</p>
          </div>
          <div className="col-md-2">$998</div>
          <div className="col-md-2">
            <button>
              <span>-</span>2<span>+</span>
            </button>
          </div>
          <div className="col-md-2">$499</div>
        </div>
        <div className="checkoutpage-divider"></div>
        <div className="d-flex">
          <div className="col-md-2">
            <img
              src={require('../../assets/images/50061505_575246-1@2x.png')}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <p>Philips Hue 7W BR30 Connected Downlight Lamp</p>
          </div>
          <div className="col-md-2">$998</div>
          <div className="col-md-2">
            <button>
              <span>-</span>2<span>+</span>
            </button>
          </div>
          <div className="col-md-2">$499</div>
        </div>

        <div className="d-flex">
          <div className="col-md-4">
            <InputForm />
          </div>
          <div className="col-md-4 offset-4">
            <div className="d-flex justify-content-between">
              <p>Subtotal</p>
              <p>$998</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Shipping fee</p>
              <p>$20</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Coupon</p>
              <p>No</p>
            </div>
          </div>
          <div className="checkoutpage-divider"></div>

          <div className="d-flex justify-content-between">
            <h3>TOTAL</h3>
            <h3>$118</h3>
          </div>

          <button>Check out</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
