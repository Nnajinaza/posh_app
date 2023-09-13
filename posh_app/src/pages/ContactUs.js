import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";

const ContactUs = () => {
  return (
    <>
      <Meta title={"Store"} />
      <BreadCrumb title="Store" />
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
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div>
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div>
                                    <input type="tel" className="form-control" placeholder="Tel:"/>
                                </div>
                                <div>
                                    <textarea className="form-control w-100" placeholder="Comment" cols={30} rows={3}/>
                                </div>
                                <div>
                                    <button className="button border-0">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <h3 className="contact-title"></h3>
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
