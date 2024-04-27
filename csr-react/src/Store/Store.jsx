import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { getAllProducts } from "../api";
export function Store() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      var items = await getAllProducts();
      setProducts(items || []); // Fallback to an empty array if null is returned
      console.log(items);
    };

    fetchProducts();
  }, []);

  const navigateToItem = (itemId) => {
    navigate(`/store/${itemId}`);
  };

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
            <button onClick={() => navigateToItem(item.id)}>
              Read more...
            </button>
            <button>Add to cart for {item.price}€</button>
          </div>
        </div>
      ))}
    </div>
  );
}
