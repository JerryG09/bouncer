import React from 'react';
import './MegamenuFoot.css';
function MegamenuFoot() {
  return (
    <div className="container megafoot--wrapper">
      <div className="row">
        <div className="col-md-4 megamenufoot--box--wrapper">
          <div className="megamenufoot--box1">
            <h4 className="megamenufoot--box--top white">Iphone 6</h4>
            <p className="megamenufoot--box--p grey">
              Lorem ipsum dolor sit amet, consectetur adipisicing elitrunning
              home.
            </p>
            <h2 className="grey megamenufoot--box--price">$399</h2>
          </div>
        </div>
        <div className="col-md-4 megamenufoot--box2">
          <div className="">
            <img
              src={require('../../assets/images/Oculus-Rift-profile_grande.png')}
              className="megamenufoot--box2__image"
              alt="Oculus Rift"
            />
          </div>
          <div className="d-flex justify-content-between">
            <div className="megamenufoot--box__oculus">
              <h4>Oculus Rift</h4>
            </div>
            <div className="megamenufoot--box__price">$349</div>
          </div>
        </div>
        <div className="col-md-4 megamenufoot--box3">
          <div className="megamenufoot--box3">
            <h5 className="megamenufoot--box--top">GoPro Hero 6</h5>
            <div className="row">
              <div className="col-md-6">
                <p className="megamenufoot--box3__p">
                  Lorem ipsum dolor. Ipsam, quisquam et ut iusto.
                </p>
                <h4 className="megamenufoot--box__price">$299</h4>
              </div>
              <div className="col-md-6">
                <img
                  src={require('../../assets/images/50051823_540375.png')}
                  className="img-fluid megamenufoot--box3__image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegamenuFoot;
