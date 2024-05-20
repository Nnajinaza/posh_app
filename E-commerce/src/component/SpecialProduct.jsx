import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const SpecialProduct = () => {
  const now = 5;
  const [value, setValue] = useState(2);
  return (
    <div className="col-6">
      <div className="special-product-card mb-3">
        <div className="d-flex justify-content-between">
          <div className="special-product-image">
            <img src="images/watch.jpg" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Haweiii</h5>
            <h6 className="title">
              Samsung Galaxy Note10+ Mobile Phone; Sim...
            </h6>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <p className="price">
              <span className="red-p">$100.00</span> {"  "}
              <strike>$200.00</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5</b> days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-danger">1</span>
                {":"}
                <span className="badge rounded-circle p-2 bg-danger">1</span>
                {":"}
                <span className="badge rounded-circle p-2 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count">
              <p className="">Products: 5</p>
              <BorderLinearProgress variant="determinate" value={20} />
            </div>
            <Link className='button mt-3' to=''>ADD TO CART</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
