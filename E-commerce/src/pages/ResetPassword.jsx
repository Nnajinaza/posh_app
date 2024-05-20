import React from "react";
import Container from "../component/Container";
import CustomInput from "../component/CustomInput";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="password" name="name" placeholder="New Password" />
                <CustomInput type="password" name="name" placeholder="Confirm Password" />
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <Link to="/login" className="button border-0 text-white">Reset Password</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ResetPassword;
