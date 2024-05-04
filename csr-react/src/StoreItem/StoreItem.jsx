import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { getProductById } from "../api";
import { Button } from "../components/Button/Button";

export function StoreItem() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams(); // Assuming the route parameter is named 'productId'

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(productId);

      if (fetchedProduct) {
        setProduct(fetchedProduct.item);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; // Loading indicator
  }

  return (
    <div className="productContainer">
      <img
        src={`${process.env.REACT_APP_URL}/${product.image}`}
        alt={product.name}
        className="itemPhoto"
      />
      <div className="box">
        <div className="info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        <div className="button">
          <Button label={`Add to cart for ${product.price}€`} path={"/store"} />
        </div>
      </div>
    </div>
  );
}
