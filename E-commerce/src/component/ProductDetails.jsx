import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams()

  useEffect(() => {
    fetch(`/api/carts/${params.id}`)
      .then(res => res.json())
      .then(data => console.log(data))
    }, [params.id])

    return (
      <div className="ProductDetails">
        <h1>This is the Product_Details page</h1>
      </div>
    );
  }
  
  export default ProductDetails;