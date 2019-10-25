import React from 'react';
import './LatestNews.css';
import bestSeller from './Bestseller_db';

function LatestNews() {
  return (
    <div className="container pt-5 pb-3">
      <h5 className="d-flex justify-content-center pb-4">LATEST NEWS</h5>
      <div className="row latestnews--wrapper">
        {bestSeller[0].latestnews.map(item => (
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-5">
                <div className="">
                  <img src={item.image} className="latestnews--image" alt="" />
                </div>
              </div>
              <div className="col-md-7 pl-4">
                <p>{item.date}</p>
                <h6 className="pb-2">{item.title}</h6>
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
