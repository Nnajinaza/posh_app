import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import { Rating } from "@mui/material";
import ProductCart from "../component/ProductCart";

const OurStore = () => {
  const [value, setValue] = React.useState(2);
  const [grid, setGrid] = React.useState(12);

  return (
    <>
      <Meta title={"Store"} />
      <BreadCrumb title="Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h6 className="sbtitle">Availability</h6>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In stock
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                      checked
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of stock
                    </label>
                  </div>
                </div>
                <div>
                  <h5 className="subtitle">Price</h5>
                  <div className="d-flex align-items-center">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        placeholder="From"
                        id="floatingInput"
                        // className="form-control"
                        style={{
                          height: "35px",
                          width: "80%",
                          paddingInlineStart: "5px",
                        }}
                      />
                      <label htmlFor="floatingInput" />
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        placeholder="To"
                        id="floatingInput1"
                        // className="form-control"
                        style={{
                          height: "35px",
                          width: "80%",
                          paddingInlineStart: "5px",
                        }}
                      />
                      <label htmlFor="floatingInput1" />
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="subtitle">Colors</h6>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h6 className="subtitle">Size</h6>
                  <div>
                    <div className="form-check align-items-center justify-content-between">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="color-2"
                      >
                        S (2)
                      </label>
                    </div>
                    <div className="form-check align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphones
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Oppo
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Speaker
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Tablet
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Vivo
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50 mt-3">
                      <h5>
                        {" "}
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <b>$ 30</b>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50 mt-3">
                      <h5>
                        {" "}
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <b>$ 30</b>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d:block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select
                      name="sort_by"
                      className="form-control form-select"
                      id="SortBy"
                      aria-describedby="ally-refresh-page-messsage"
                    >
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">A - Z</option>
                      <option value="title-descending">Z - A</option>
                      <option value="price-ascending">low to high</option>
                      <option value="price-descending">high to low</option>
                      <option value="created-ascending">Old to new</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts">21 products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        src="images/gr1.svg"
                        className="img-fluid d-block"
                        onClick={() => {
                          setGrid(12);
                        }}
                        alt="grid"
                      />
                      <img
                        src="images/gr2.svg"
                        className="img-fluid d-block"
                        onClick={() => {
                          setGrid(12);
                        }}
                        alt="grid"
                      />
                      <img
                        src="images/gr3.svg"
                        className="img-fluid d-block"
                        onClick={() => {
                          setGrid(12);
                        }}
                        alt="grid"
                      />
                      <img
                        src="images/gr4.svg"
                        className="img-fluid d-block"
                        onClick={() => {
                          setGrid(3);
                        }}
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
                  <div className="products-list pb-5">
                    <div className="d-flex gap-15">
                      <ProductCart grid={grid} />
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
