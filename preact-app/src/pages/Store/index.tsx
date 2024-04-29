import { useEffect, useState } from "preact/hooks";
import "./style.css";
import { useLocation } from "preact-iso";
import { environment, getAllProducts } from "../../api";

export function Store() {
  const { route } = useLocation();

  const navigateToItem = (itemId) => {
    route(`/store/${itemId}`);
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);
  return (
    <div class="storeContainer">
      {products.map((item, index) => (
        <div key={index} class="productCard">
          <h1>{item.name}</h1>
          <img
            src={`${environment.apiUrl}/${item.image}`}
            alt={item.name}
            class="itemPhoto"
          />
          <div class="buttons">
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

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
