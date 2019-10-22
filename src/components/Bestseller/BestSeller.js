import React from 'react';
import './Bestseller.css';
import bestSeller from './Bestseller_db';

function BestSeller() {
  return (
    <div className="container pb-5">
      <div className="d-flex justify-content-center">
        <h4 className="bestseller--header">BEST SELLER </h4>
      </div>
      <div className="d-flex justify-content-center pt-4">
        <div className="bestseller--nav__active">
          <h4>All</h4>
        </div>
        <div className="pl-4 pr-4">
          <h4>Mac</h4>
        </div>
        <div className="">
          <h4>iPhone</h4>
        </div>
        <div className="pl-4 pr-4">
          <h4>iPad</h4>
        </div>
        <div className="">
          <h4>iPod</h4>
        </div>
        <div className="pl-4">
          <h4>Accessories</h4>
        </div>
      </div>
      <div className="row bestseller--box pt-2">
        {bestSeller[0].bestSellerItems.map(item => (
          <div className="col-md-3 card-deck">
            <div className="card pt-3 mt-5">
              <div className="d-flex justify-content-start">
                {console.log(item)}
              </div>
              <img src={item.image} className="card-img-top" alt="" />
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h4 className="card-title bestseller--box__name">
                  {item.name}
                </h4>
                <div className="d-flex justify-content-center text-center pt-3">
                  <i className="material-icons star--color">star</i>
                  <i className="material-icons star--color">star</i>
                  <i className="material-icons star--color">star</i>
                  <i className="material-icons star--color">star</i>
                  <i className="material-icons star--grey">star</i>
                </div>
                <h6 className="pt-3">
                  <span className="pr-3">{item.price}</span>  <span>{item.price}</span>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// {items.map(element=>
//   <div className="col-md-3 card-deck">
//       <div className="card">
//           <div className="d-flex-justify-content-start">
//             {element.label.length!=0?<span class="badge badge-bg">{element.label}</span>:<span>{element.label}</span> }
//           </div>

//           <img className="card-img-top" src={element.image.macbook} alt=""/>
//           <div className="card-body">
//               <h4 className="card-title">{element.name}</h4>
//               <p className="card-text">Text</p>
//           </div>
//       </div>

//   </div>
// )}

export default BestSeller;
