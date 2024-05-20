import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCart from "../component/BlogCart";
import ProductCart from "../component/ProductCart";
import SpecialProduct from "../component/SpecialProduct";
import Meta from "../component/Meta";
import Container from "../component/Container";
import { services } from "../utils/Data";

function Home() {
  return (
    <>
      <Meta title={"Home"} />
      <Container class1="home-wrapper-1 py-1">
        {" "}
        <div className="row">
          <div className="col-12">
            <div className="main-banner position-relative ">
              <img
                src="images/main-backdrop.jpg"
                className="img-fluid rounded-3"
              />
              {/* <div className="main-banner-content position-absolute">
                <h4>SUPECHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From $199.00 or $41.62</p>
                <Link className="button">BUY NOW</Link>
              </div> */}
            </div>
          </div>
          {/* <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img
                  src="images/backdrop-1.jpg"
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
                  src="images/backdrop-2.jpg"
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
                  src="images/backdrop-3.jpg"
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
                  src="images/backdrop-4.jpg"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPECHARGED FOR PROS</h4>
                  <h5>Laptops Max</h5>
                  <p>From $199.00 or $41.62</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex  align-items-center gap-10 ">
                    <img src={i.image} />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
              ;
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap align-items-center justify-content-between">
              <div className="d-flex align-items-center ">
                <div className="small-banner-content position-absolute">
                  <h6>Shoes</h6>
                  <p>10 items</p>
                </div>
                <img src="images/backdrop-4.jpg" className="img-fluid"/>
              </div>
              <div className="d-flex align-items-center ">
                <div className="small-banner-content position-absolute">
                  <h6>Watch</h6>
                  <p>10 items</p>
                </div>
                <img src="images/backdrop-5.jpg" className="img-fluid"/>
              </div>
              <div className="d-flex align-items-center ">
                <div className="small-banner-content position-absolute">
                  <h6>Glasses</h6>
                  <p>10 items</p>
                </div>
                <img src="images/glass.jpg" className="img-fluid"/>
              </div>
              <div className="d-flex align-items-center ">
                <div className="small-banner-content position-absolute">
                  <h6>Facecap</h6>
                  <p>10 items</p>
                </div>
                <img src="images/facecap.jpg" className="img-fluid"/>
              </div>
              {/* <div className="d-flex align-items-center ">
                <div>
                  <h6>Mobiles & Tablets</h6>
                  <p>10 items</p>
                </div>
                <img src="images/laptop.jpg" />
              </div>
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
            </div>*/}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCart />
        </div>
      </Container>
      <Container class1="famous wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative text-white">
              <img
                src="images/frame-01.webp"
                className="img-fluid"
                alt="frame"
              />
              <div className="famous-details position-absolute">
                <h5>BIG SCREEN</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative text-white h-30">
              <img
                src="images/main-shoe.jpg"
                className="img-fluid h-30"
                alt="frame"
              />
              <div className="famous-details position-absolute">
                <h5>BOOTS</h5>
                <h6>Black boots</h6>
                {/* <p>27-inch 5K Retina display</p> */}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative text-dark">
              <img
                src="images/sweater.jpg"
                className="img-fluid"
                alt="frame"
              />
              <div className="famous-details position-absolute">
                <h5>SWEATER</h5>
                <h6>cashmere</h6>
                {/* <p>From $399 or $16.62/mo. for 24mo.*</p> */}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative text-white">
              <img
                src="images/leather-jacket.jpg"
                className="img-fluid"
                alt="frame"
              />
              <div className="famous-details position-absolute ">
                <h5>JACKET</h5>
                {/* <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24mo.*</p> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCart />
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="marquee-wrapper py-5 home-wrapper-2">
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
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="col-4">
            <div className="d-flex gap-15 p-3">
              <BlogCart />
              <BlogCart />
              <BlogCart />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
