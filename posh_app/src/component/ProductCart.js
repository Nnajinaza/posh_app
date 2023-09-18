import React from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const ProductCart = (props) => {
  let location = useLocation();
  const {grid} = props;
  const [value, setValue] = React.useState(2);

  return (
    <>
    <div className={` ${location.pathname  == "/products" ? `gr-${grid}` : "col-2"}`}>
      <Link to="/products:id" className="product-card position-relative">
        <div className="wishlist-icon positon-absolute">
          <Link>
            <img src="images/wish.svg" alt="wish"/>
          </Link>
        </div>
        <div className="product-image">
          <img src="images/headphone.jpg" className="img-fluid" alt="image" />
          <img src="images/headphones-2.avif" className="img-fluid" alt="image" />
        </div>
        <div className="product-details d-flex flex-column gap-10">
          <h6 className="brand">Havel</h6>
          <h5 className="product-title">The title of the product goes here</h5>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="compare" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname  == "/products" ? `gr-${grid}` : "col-2"}`}>
      <Link className="product-card position-relative">
        <div className="wishlist-icon positon-absolute">
          <Link>
            <img src="images/wish.svg" alt="wish"/>
          </Link>
        </div>
        <div className="product-image">
          <img src="images/headphone.jpg" className="img-fluid" alt="image" />
          <img src="images/headphones-2.avif" className="img-fluid" alt="image" />
        </div>
        <div className="product-details d-flex flex-column gap-10">
          <h6 className="brand">Havel</h6>
          <h5 className="product-title">The title of the product goes here</h5>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="compare" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default ProductCart;
