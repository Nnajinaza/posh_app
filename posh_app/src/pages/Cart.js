import { React, useEffect, useState } from "react";
import Meta from "../component/Meta";
import BreadCrumb from "../component/BreadCrumb";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../component/Container";

function Cart() {
  // const handleDelete = (e) => {
  //   if (count >= 1) {
  //     setCount((count) => count - 1);
  //   } else {
  //     alert("Does not exist in the cart");
  //   }
  //   addToLocalStorage(product);
  // };

  // useEffect(() => {
  //   fetch(`/api/products/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data.products));
  // }, [params.id]);

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex align-content-center justify-content-between py-3">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data d-flex align-items-center justify-content-between py-3">
                <div className="cart-col-1 d-flex align-items-center gap-30">
                  <div className="w-25">
                    <img src="images/watch.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="w-75">
                    <h5 className="title">Product name</h5>
                    <p className="color">p color</p>
                    <p className="size">p size</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ 100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center">
                  <div>
                    <input
                      type="number"
                      style={{ width: "80%", paddingInlineStart: "5px" }}
                      min={0}
                      placeholder="1"
                    />
                  </div>
                  <div>
                    {" "}
                    <MdDelete size={26} />
                  </div>
                </div>
                <div className="cart-col-4">Total</div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                {" "}
                <Link className="button" to="/product">
                  Continue to Shopping{" "}
                </Link>
                <div className="d-flex flex-column align-items-baseline">
                  <h4>SubTotal: $100</h4>
                  <p>Texas and shipping calculated at checkout</p>
                  <Link to="/checkout" className="button">Checkout</Link>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
}
export default Cart;
