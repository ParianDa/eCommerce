import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";
import "./ProductDetails.css";

const ProductDetails = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productApi.products;

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    if (params) {
      products.forEach((product) => {
        if (product._id === params.id) setProductDetails(product);
      });
    }
    // console.log(products)
  }, [params, products]);
  console.log(productDetails);
  return (
    <div className="productDetail_container">
      {productDetails.images && (
        <img src={productDetails.images.url} alt={productDetails.title} />
      )}
      <h3>{productDetails.title}</h3>
      <span>{productDetails.price}</span>
      <p>{productDetails.description}</p>
      <p>{productDetails.sold}</p>
      <p>{productDetails.content}</p>
      <Link to="/cart" className="cart">
        Buy Now
      </Link>
    </div>
  );
};

export default ProductDetails;
