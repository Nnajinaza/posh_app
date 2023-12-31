import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import BlogCart from "../component/BlogCart";
import Container from "../component/Container";

const Blog = () => {
  return (
    <>
      <Meta title={"Blog"} />
      <BreadCrumb title="Blog" />
      <Container class1="blog-wrapper home-wrapper py-5">
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
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6 mb-3">
                  <BlogCart />
                </div>
                <div className="col-6 mb-3">
                  <BlogCart />
                </div>
                <div className="col-6 b-3">
                  <BlogCart />
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Blog;
