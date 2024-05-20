import React from "react";
import { Link } from "react-router-dom";

function BlogCart() {
  return (
    <div className="blog-cart mb-3 gap-10">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="" />
      </div>
      <div className="blog-content">
        <p className="date">1 Sept 2023</p>
        <h5 className="title">A beautiful suunday morning</h5>
        <p className="desc">Lorem ipsum dolor sit amet consectetor Lorem</p>
        <Link className="button" to="">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCart;
