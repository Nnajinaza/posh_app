import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCart from "./BlogCart";
import ProductCart from "./ProductCart";
import SpecialProduct from "./SpecialProduct";
import PopularProduct from "./PopularProduct";
import FamousCard from "./FamousCard";

function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPECHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $199.00 or $41.62</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPECHARGED FOR PROS</h4>
                    <h5>Laptops Max</h5>
                    <p>From $199.00 or $41.62</p>
                    <Link className="button">BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPECHARGED FOR PROS</h4>
                    <h5>Laptops Max</h5>
                    <p>From $199.00 or $41.62</p>
                    <Link className="button">BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPECHARGED FOR PROS</h4>
                    <h5>Laptops Max</h5>
                    <p>From $199.00 or $41.62</p>
                    <Link className="button">BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPECHARGED FOR PROS</h4>
                    <h5>Laptops Max</h5>
                    <p>From $199.00 or $41.62</p>
                    <Link className="button">BUY NOW</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex  align-items-center gap-10 ">
                  <img src="images/service.png" />
                  <div>
                    <h6> Free shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-10 ">
                  <img src="images/service-02.png" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 15% off</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-10 ">
                  <img src="images/service-03.png" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-10 ">
                  <img src="images/service-04.png" />
                  <div>
                    <h6>Affordable prices</h6>
                    <p className="mb-0">Get factory default prices</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-10 ">
                  <img src="images/service-05.png" />
                  <div>
                    <h6> Secure Payments</h6>
                    <p className="mb-0"> 100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Computers & Laptops</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/laptop.jpg" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Smart Television</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" />
                </div>
                {/* <div className="d-flex align-items-center ">
                  <div>
                    <h6>Smartwatches</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/watch.jpg" className="image"/>
                </div> */}
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/speaker.jpg" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Mobiles & Tablets</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/laptop.jpg" />
                </div>
                {/* <div className="d-flex align-items-center ">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" />
                </div> */}
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Accessories</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/acc.jpg" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/speaker.jpg" />
                </div>
                <div className="d-flex gap-15 align-items-center ">
                  <div>
                    <h6>Home Appliances</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/homeapp.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </section>
      <section className="famous wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <FamousCard />
            <FamousCard />
            <FamousCard />
            <FamousCard />
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
            <ProductCart />
          </div>
          {/* <div className="row">
            <div className="col-2">
              <div className="card"></div>
            </div>
            <div className="col-2">
              <div className="card"></div>
            </div>
          </div> */}
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            {/* <SpecialProduct />
                <SpecialProduct /> */}
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCart />
            <BlogCart />
            <BlogCart />
            <BlogCart />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
