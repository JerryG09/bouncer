import React from 'react'
import './Rectangle2.css'
import bestSeller from './Bestseller_db'

const Rectangle2 = () => {
  return (
    <div className="container">
      <div className="row rectangle2--wrapper">
        {bestSeller[0].pitch.map(item => (
          <div className="col-md-4 d-flex flex-column justify-content-center">
            <div className="">
              <i className="fa fa-shipping"></i>
            </div>
            <h5>{item.title}</h5>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rectangle2
