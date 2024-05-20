import React from "react";
import { Link } from "react-router-dom";

function FamousCard() {
  return (
    <div className="col-3">
      <div className="famous-card ">
        <div className="famous-content">
          <h6 className="category">BIG SCREEN</h6>
          <h5 className="title">Smart Watch Series 7</h5>
          <p className="desc">From $399 or $16.62/mo for 24mo</p>
        </div>
        <div className="card-image">
          <img src="images/laptop.jpg" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default FamousCard;
