import React, { useContext } from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { ProductContextProvider } from "./ProductContext";

function Products() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(1)
    const cart = useContext(ProductContextProvider)

    useEffect(() => {
      fetch("/api/products/")
          .then(res => res.json())
          .then(data => setProducts(data.products))
    }, [])

    const productsElement = products.map(product => (
      <div key={product.id} className="product-tile">
          <div className="product-info" >
          <img src={product.imageUrl} alt="" />
          <div className="product-details">
            <h3 >{product.name}</h3>
            <h5 className="product-quantity">Price: ${product.price}</h5>
          </div>
          </div>
          {/* <i className={`product-type ${product.type} selected`}>{product.type}</i> */}
        <Link to={`/products/${product.id}`}>
        { count 
            ? <button >{count}</button> 
            : <button >Add to Cart</button> }
          <button className="add-product">Add to Cart</button>
        </Link>
      </div>
    ))


    return (
      <div className="Products">
        <div className="product-list">
          {productsElement}
        </div>
      </div>
    );
  }
  
  export default Products;