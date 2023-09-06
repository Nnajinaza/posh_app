import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";


function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-10 align-items-center justify-content-center">
                <img src="images/newsletter.png" />
                <h4 className="text-white ">Sign Up for Newsletter</h4>
              </div>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text id-basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="row">
            <div className="col-3 justify-content-between align-items-center py-11 text-white">
                <h4>Contact Us</h4>
                <div>
                    <address >
                        Jinadu street, Ijeshatedo,<br/> Surulere, Lagos
                    </address>
                    <a href="tel: +234 8142148005" className="text-white">Tel: +234 8142148005</a>
                    <a href="mailto:nnajinaza@gmail.com" className="mt-2 d-block text-white">nnajinaza@gmail.com</a>
                    <div className="social-icons d-flex align-items gap-30 mt-3">
                        <a href="" > <BsWhatsapp className="fs-4"/></a>
                        <a href=""> <BsFacebook className="fs-4"/></a>
                        <a href=""> <BsInstagram className="fs-4"/></a>
                        <a href=""> <BsTwitter className="fs-4"/></a>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <h4 className="text-white">Information</h4>
                <div className="footer-link d-flex flex-column justify-content-between">
                    <Link className="text-white mb-1">Privacy Policy</Link>
                    <Link className="text-white mb-1">Refund</Link>
                    <Link className="text-white mb-1">Shopping Policy</Link>
                    <Link className="text-white mb-1">Terms & Conditions </Link>
                    <Link className="text-white mb-1">Blog</Link>
                </div>
            </div>
            <div className="col-3">
                <h4 className="text-white">Accounts</h4>
                <div className="footer-link d-flex flex-column">
                    <Link className="text-white mb-1">About Us</Link>
                    <Link className="text-white mb-1">Faq</Link>
                    <Link className="text-white mb-1">Contact</Link>
                </div>
            </div>
            <div className="col-2">
                <h4 className="text-white"> Quicklinks</h4>
                <div className="footer-link d-flex flex-column">
                    <Link className="text-white mb-1">Accessories</Link>
                    <Link className="text-white mb-1">Laptop</Link>
                    <Link className="text-white mb-1">Headphones</Link>
                    <Link className="text-white mb-1">Smart watches</Link>
                    <Link className="text-white mb-1">Tablets</Link>
                </div>
            </div>
        </div>

      </footer>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                {" "}
                &copy; {new Date().getFullYear()} Powered by Naza
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
