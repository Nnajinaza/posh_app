import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import { FaAddressCard, FaInbox, FaInfo, FaMailBulk, FaPhone, FaTimesCircle } from "react-icons/fa";
import { Input } from "@mui/material";

const ContactUs = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="12">
              <iframe></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15 ">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"                       
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Tel:"
                      />
                    </div>
                    <div>
                      <textarea
                        className="form-control w-100"
                        placeholder="Comment"
                        cols={30}
                        rows={3}
                      />
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaAddressCard /> <address className="mb-0">Surulere, Lagos, Nigeria</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaInbox /> <a href="tel: +234142148005">+234142148005</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaMailBulk /> <a href="mailto:nnajinaza@gmail.com">nnajinaza@gmail.com</a >
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaInfo /> <p className="mb-0">Monday - Friday 8AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
