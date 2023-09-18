import React, { useState } from "react";
import Meta from "../component/Meta";
import BreadCrumb from "../component/BreadCrumb";
import ProductCart from "../component/ProductCart";
import Rating from "@mui/material/Rating";

const SingleProduct = () => {
  const [value, setValue] = React.useState(2);
  const [orderedProduct, setOrderedProduct] = useState(true);

  return (
    <>
      <Meta title={"Store"} />
      <BreadCrumb title="Store" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
        <div className="description-wrapper py-5 home-wrapper-2">
          <div className="col-12">
            <h4 className="section-heading">Description</h4>
          </div>
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="bg-white p-2">
                  <h4 className="product-desc">
                    Lorem..........................................................
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="reviews-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h4 className="section-heading">Reviews</h4>
              </div>
              <div className="col-12 mt-2">
                <div className="bg-white p-3">
                  <div className="review-head d-flex align-items-center justify-content-between ">
                    <div>
                      <h6 className="mb-2 mt-2">Customer Reviews</h6>
                      <div className="d-flex align-items-center gap-10">
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                        <p className="mt-2">Based on 2 Reviews</p>
                      </div>
                    </div>
                    {orderedProduct && (
                      <div className="">
                        <a className="text-dark text-decoration-underline pr-3">
                          Write a Review
                        </a>
                      </div>
                    )}
                  </div>
                  <div>
                    <form>
                      <div className="my-3">
                        <span className="mb-5">Write a review</span>
                      </div>
                      <div className="d-flex flex-column mb-3">
                        <label className="mb-0">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter yout name"
                          className="pl-1"
                        />
                      </div>
                      <div className="d-flex flex-column mb-3">
                        <label className="mb-0">Email</label>
                        <input
                          type="email"
                          name="name"
                          placeholder="example@email.com"
                          className="pl-1"
                        />
                      </div>
                      <div className="d-flex flex-column mb-3">
                        <label className="mb-0">Review Title</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Give your review a title"
                          className="pl-1"
                        />
                      </div>
                      <div className="d-flex flex-column mb-3">
                        <label className="mb-0">Review</label>
                        <textarea
                          type="text"
                          name="name"
                          placeholder="Comment"
                          className="pl-1"
                        />
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="button">Submit Review</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <div className="customers-review">
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      <h6 className="mb-0">
                        <b>Good</b>
                      </h6>
                      <i>
                        <b>oooooa</b> on <b>Aug 29, 2023</b>{" "}
                      </i>
                      <p className="mt-2">Def! satisfied</p>
                      <div className="d-flex justify-content-end pl-3">
                        <span>Report as inappropriate</span>
                      </div>
                    </div>
                    <div className="customers-review">
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      <h6 className="mb-0">
                        <b>Good</b>
                      </h6>
                      <i>
                        <b>oooooa</b> on <b>Aug 29, 2023</b>{" "}
                      </i>
                      <p className="mt-2">
                        Great stuff. I think I will get more orders from you
                        guys
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="special-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Popular Products</h3>
              </div>
              <ProductCart />
              <ProductCart />
              <ProductCart />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
