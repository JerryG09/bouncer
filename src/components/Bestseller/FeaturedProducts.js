import React from 'react';
import './FeaturedProducts.css';
import bestSeller from '../../data/data';
import Stars from '../utils/Stars';
function FeaturedProducts() {
  return (
    <div className="container pt-5 pb-3">
      <h5 className="d-flex justify-content-center pb-4">FEATURED PRODUCTS</h5>
      <div className="row">
        {bestSeller[0].featuredProducts.map(item => (
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-5">
                <div className="">
                  <img
                    src={item.image}
                    className="featured--products--image"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-7 pl-4">
                <h6 style={{ height: '2.5rem' }}>{item.title}</h6>
                <Stars />
                <h6 className="pt-2">
                  <span className="text-danger">$499</span>
                  <strike className="ml-3 grey">$599</strike>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
