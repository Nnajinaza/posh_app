import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToLocalStorage } from "./LocalStorage";
 
function Cart() {
  const params = useParams()
  const [product, setProduct] = useState(null)
  const [count, setCount] = useState(1)

  const handleDelete = (e) => {
      if (count >= 1) {
        setCount((count) => count - 1)
      }
      else {
        alert("Does not exist in the cart")

      }
      addToLocalStorage(product)
  }


  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then(res => res.json())
      .then(data => setProduct(data.products))
    }, [params.id])
 
    return (
      <div className="ProductDetails">
        { product ? (
        <div>
            <img src={product.imageUrl} alt=""/>
            <h3>{product.name}</h3>
            <h3>{product.price * count}</h3>
            <button onClick={handleDelete}>-</button>
            { count 
            ? <button >{count}</button> 
            : <button >Add to Cart</button> }
            <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
        ) : <h2>Loadiing</h2>}
      </div>
    );
  }
export default Cart;