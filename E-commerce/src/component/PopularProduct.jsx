import React from "react";
import { Link, useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { productData } from "../utils/productData";

const ProductCart = (props) => {
  let location = useLocation();
  const { grid } = props;
  const [value, setValue] = React.useState(2);

  return (
    <>
      {productData?.map((i, j) => {
        return (
          <>
            <div
              className={` ${
                location.pathname == "/products" ? `gr-${grid}` : "col-3"
              }`}
            >
              <Link
                to="/products:id"
                className="product-card position-relative"
              >
                {/* <div className="wishlist-icon positon-absolute">
                  <Link to="/wishlist">
                    <img src="images/wish.svg" alt="wish" />
                  </Link>
                </div> */}
                <div className="product-image w-100">
                  <img src={i.image} className="" alt="image" />
                  <img
              src={i.image}
              className=""
              alt="image"
            />
                </div>
                <div className="product-details d-flex flex-column gap-10 p-3">
                  <h6 className="brand">{i.brand}</h6>
                  <h5 className="product-title">{i.title}</h5>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <p className="price">{i.price}</p>
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
      })}
      ;
    </>
  );
};

export default ProductCart;
