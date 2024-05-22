import { NavLink, Link } from "react-router-dom";
import { BsSearch, BsTelephoneFill, BsCartFill, BsPersonCircle } from "react-icons/bs";
import { Button, Grid, Input, Select } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";

function Nav() {
  return (
    <>
      <header className="bg-pink-100 border-bottom-black py-2 px-4 text-gray-500 text-sm font-medium flex justify-between">
        <div class="flex items-center"> 
          <p class="text-black">Free shipping over $1000 & Free returns</p>
        </div> 
        <div class="flex items-center"> 
          <p class="text-black flex items-center mr-2">
            <BsTelephoneFill /> {/* Tel : {" "} */}
            <a href="tel: +234814"> +234814</a>
          </p>
        </div> 
      </header>
      <header className="bg-pink-100 items-center">
        <div className="flex align-middle py-2 px-4 justify-between items-center">
              <div className="flex align-middle items-center gap-4">
              <h2 className="items-center justify-between ">
                <NavLink to="/" className="text-black text-center text-lg font-semibold from-neutral-800 to-lime-700">POSH</NavLink>
              </h2>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control pl-2 h-6 align-middle justify-between rounded-md"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  />
                <span className="input-group-text mt-[-2px] h-3 ml-[-38px]" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
                  </div>
              <div className="middle-header-links flex align-item-left justify-content-between gap-5 ">
                <div>
                  <NavLink to="/wishlist" className="flex items-center gap-1 text-black">
                    <FaRegHeart className="fs-4" />
                    <p>Wishlist</p>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/cart" className="flex items-center gap-1 text-black">
                    <BsCartFill fontSize={18} className="fs-3" />
                    {/* <div className="flex flex-column">
                      <span className="badge bg-white p-2 h-4 text-xs text-balance ">0</span>
                    </div> */}
                    <p>Cart</p>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/register" className="flex items-center gap-1 text-black">
                    <BsPersonCircle className="fs-3" />
                    <p>Profile</p>
                  </NavLink>
                </div>
              </div>
        </div>
      </header>
      <header className="bg-pink-300 justify-between">
              <div className="menu-button flex items-center gap-30 justify-between py-2 px-4">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-2 flex items-center"
                      type="button"
                      id="dropDownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img className="h-5" src="/images/menu.svg" />
                      {/* <BsFillMenuAppFill/> */}
                      <span className="mc-5 d-inline-block">Categories</span>
                    </button>
                    {/* <ul
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
                    </ul> */}
                  </div>
                </div>
                <div className="menu-links">
                  <div className="flex items-center gap-2 uppercase text-sm font-medium">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Our Store</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
      </header>
    </>
  );
}

export default Nav;
