import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { getAllProducts } from "../api";
import { Button } from "../components/Button/Button";
export function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      var items = await getAllProducts();
      setProducts(items || []); // Fallback to an empty array if null is returned
    };

    fetchProducts();
  }, []);

  return (
    <div className="storeContainer">
      {products.map((item, index) => (
        <div key={index} className="productCard">
          <h1>{item.name}</h1>
          <img
            src={`${process.env.REACT_APP_URL}/${item.image}`}
            alt={item.name}
            className="itemPhoto"
          />
          <div className="buttons">
            <Button label={"Read more..."} path={`/store/${item.id}`}></Button>
            <button>Add to cart for {item.price}€</button>
          </div>
        </div>
      ))}
    </div>
  );
}
