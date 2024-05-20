import React from "react";
import Container from "../component/Container";
import CustomInput from "../component/CustomInput";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <Meta title={" SignUp"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="name" placeholder="First Name" />
                <CustomInput type="text" name="name" placeholder="Last Name" />
                <CustomInput type="email" name="name" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="name"
                  placeholder="Password"
                />
                <Link to="/forgotpassword">Forgot Password</Link>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <Link to="/" className="button border-0 text-white">Sign Up</Link>
                  <Link to="/login" className="button border-0 text-white">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SignUp;
