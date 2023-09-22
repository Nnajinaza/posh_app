import React, { useState } from "react";
import Meta from "../component/Meta";
import BreadCrumb from "../component/BreadCrumb";
import ProductCart from "../component/ProductCart";
import Rating from "@mui/material/Rating";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { GrFavorite } from "react-icons/gr";
// import watch from ""

const SingleProduct = () => {
  const [value, setValue] = React.useState(2);
  const props = {
    width: 400,
    height: 200,
    zoomWidth: 500,
    img: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fatlas-content-cdn.pixelsquid.com%2Fstock-images%2Fmen-s-wrist-watch-3y10XB1-600.jpg&tbnid=9aQihEOlr346-M&vet=12ahUKEwiytafk4bmBAxVCmycCHc7fCXwQMygBegQIARA1..i&imgrefurl=https%3A%2F%2Fwww.pixelsquid.com%2Fpng%2Fmen-s-wrist-watch-1130471173537142587&docid=V2RyWTL83nnIuM&w=600&h=600&q=watch%20pictures%20for%20males%20.png&ved=2ahUKEwiytafk4bmBAxVCmycCHc7fCXwQMygBegQIARA1",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);

  return (
    <>
      <Meta title={"Store"} />
      <BreadCrumb title="Store" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl p-3 bg-white">
          <div className="row ">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
                <div className="other-product-images d-flex align-items-center justify-contents-center gap-15">
                  <div>
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Kids headphones bulk</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    <p className="mb-0 t-review">(2 reviews)</p>
                  </div>
                  <a href="#review" className="review-btn">
                    Write a review
                  </a>
                </div>
                <div className="border-bottom">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type:</h3>
                    <p className="product-data">Haweui</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>
                    <p className="product-data">Haweui</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category:</h3>
                    <p className="product-data">
                      airpods, computers, headpones, smart-watches, speakers
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data">Headphones, oppo, speaker</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability:</h3>
                    <p className="product-data">In stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex flex-wrap gap-10">
                      <span className="badge border  bg-white border-1 text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border  bg-white border-1 text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border  bg-white border-1 text-dark border-secondary">
                        X
                      </span>
                      <span className="badge border bg-white border-1 text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border  bg-white border-1 text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3>
                  </div>
                  <div className="d-flex gap-15 flex-row mt-2 mb-3 align-items-center">
                    <h3 className="product-heading mt-1">Quantity:</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        style={{
                          width: "70px",
                          height: "20px",
                          padding: "3px",
                        }}
                        min={1}
                        max={10}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        Add to cart
                      </button>
                      <button className="button border-0" type="submit">
                        Buy it now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex gap-15 align-items-center">
                    <div>
                      <a href="" className="">
                        <TbGitCompare className="me-2" /> Compare Products
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <GrFavorite /> Add to wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Shipping & Returns</h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders! We ship
                      all US domestic orders within 5-10 business days!
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Materials</h3>
                    <p className="product-data">
                      Running Shoes cushions your stride with soft foam to keep
                      you running in comfort. Lightweight knit material wraps
                      your foot in breathable support, while a minimalist design
                      fits in just about anywhere your day takes you.
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Care Instructions</h3>
                    <p className="product-data">
                      Use a soft damp cloth and a drop of mild soap to remove
                      any haze. Air dry.
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Share</h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders! We ship
                      all US domestic orders within 5-10 business days!
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                <h4 className="section-heading" id="review">
                  Reviews
                </h4>
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
                  <div id="review">
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
