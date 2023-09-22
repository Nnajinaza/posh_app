import React from "react";
import Meta from "../component/Meta";
import BreadCrumb from "../component/BreadCrumb";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Container from "../component/Container";

function Checkout() {
  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title="Checkout" />
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">POSH</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" className="text-dark total-price ">
                        Cart{" "}
                      </Link>
                    </li>
                    {/* &nbsp; / &nbsp; */}
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Information
                    </li>
                    {/* &nbsp; / &nbsp; */}
                    <li className="breadcrumb-item total-price active">Shipping</li>
                    {/* &nbsp; / &nbsp; */}
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact-Information</h4>
                <p className="user-details">Nnaji Naza</p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select className="form-select">
                      <option value="" className="">
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="w-100 ">
                    <select className="form-select"></select>
                  </div>
                  <div className="d-flex gap-10 w-100">
                    <div className="w-100">
                      <input
                        type="text"
                        className="form-control w-100"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="w-100">
                      <input
                        type="text"
                        className="form-control w-100"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Address"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Suite"
                    />
                  </div>
                  <div className="d-flex gap-10 w-100">
                    <div className=" w-100">
                      <input
                        type="text"
                        className="form-control w-100"
                        placeholder="City"
                      />
                    </div>
                    <div className="w-100">
                      <select className="form-control form-select w-100">
                        <option value="" selected disabled>
                          Select State
                        </option>
                      </select>
                    </div>
                    <div className=" w-100">
                      <input
                        type="text"
                        className="form-control w-100"
                        placeholder="Zipcode"
                      />
                    </div>
                  </div>

                  <div className="w-100">
                    <div className="d-flex justify-content-between text-align-center">
                      <Link to="/cart" className="text-dark align-items-center">
                        {" "}
                        <MdArrowBack mt /> Return to cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue to shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        className="badge bg-secondary text-white rounded-circle p-1 position-absolute"
                        style={{ top: "-8px", right: "4px" }}
                      >
                        1
                      </span>
                      <img
                        src="images/watch.jpg"
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <h5 className="title">Watch</h5>
                      <p className="total-price"> s / hcdhcdshjd </p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$ 100</h5>
                  </div>
                </div>
              </div>
              {/* <div className="border-bottom py-4"></div> */}
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">SubTotal</p>
                <p className="total-price">$ 1000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom">
                <p className="mb-0">Shipping</p>
                <p className="mb-0">$ 100</p>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4>Total</h4>
                <h4>$ 11000</h4>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
}

export default Checkout;
