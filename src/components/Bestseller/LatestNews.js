import React from 'react';
import './LatestNews.css';
import bestSeller from './Bestseller_db';

function LatestNews() {
  return (
    <div className="container">
      <h3 className="d-flex justify-content-center">LATEST NEWS</h3>
      <div className="row rectangle2--wrapper">
        {bestSeller[0].latestnews.map(item => (
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-4">
                <div className="">
                  <img src={item.image} className="latestnews--image" alt="" />
                </div>
              </div>
              <div className="col-md-6 pl-4">
                <p>{item.date}</p>
                <h5>{item.title}</h5>
                <p>{item.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestNews;
