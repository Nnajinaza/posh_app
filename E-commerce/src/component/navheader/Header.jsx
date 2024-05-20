import { NavLink, Link } from "react-router-dom";
import { BsSearch, BsTelephoneFill, BsCartFill, BsPersonCircle } from "react-icons/bs";
import { Button, Grid, Input, Select } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";

function Nav() {
  return (
    <>
      <header className="bg-pink-300 border-bottom-black p-3 text-gray-500 text-base font-medium font flex justify-between">
        <div class="flex items-center"> 
          <p class="text-black">Free shipping over $1000 & Free returns</p>
        </div> 
        <div class="flex items-center"> 
          <p class="text-black flex items-center  mr-2">
            <BsTelephoneFill /> {/* Tel : {" "} */}
            <a href="tel: +234814"> +234814</a>
          </p>
        </div> 
      </header>
      <header className="bg-pink-300">
        <div className="container-xxl">
          <div className="row">
            <div className="col-1">
              <h2 className="title align-item-center justify-content-center ">
                <NavLink to="/" className="text-black">POSH</NavLink>
              </h2>
            </div>
            <div className="col-3">
              <div className="input-group mb-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control pl-2"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text bg-blue" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div></div>
            </div>
            <div className="col-3 ">
              <div className="middle-header-links d-flex align-item-left justify-content-between gap-10 ">
                <div>
                  <NavLink to="/wishlist" className="d-flex align-item-center gap-10 text-black">
                    <FaRegHeart className="fs-4" />
                    {/* <img src="/images/wishlist.svg"/> */}
                    <p>Wishlist</p>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/cart" className="d-flex align-item-center gap-10 text-black">
                    <BsCartFill fontSize={24} className="fs-3" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-black">0</span>
                    </div>
                    <p>Cart</p>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/register" className="d-flex align-item-center gap-10 text-black">
                    <BsPersonCircle className="fs-3" />
                    <p>Profile</p>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="bottom-header py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-button d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropDownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="/images/menu.svg" />
                      {/* <BsFillMenuAppFill/> */}
                      <span className="mc-5 d-inline-block">Categories</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownmenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item ">
                          Product A
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item ">
                          Product B
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item ">
                          Product C
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item">Product D</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Our Store</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
