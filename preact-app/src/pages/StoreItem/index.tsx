import { useEffect, useState } from "preact/hooks";
import "./style.css";
import { environment, getProductById } from "../../api";
import { Button } from "../../components/Button/Button";
import { useLocation } from "preact-iso";

export function StoreItem() {
  const [product, setProduct] = useState(null);
  const location = useLocation(); // This is for 'preact-router'; adjust if using a different router

  useEffect(() => {
    const pathSegments = location.url.split("/");
    const productId = pathSegments[pathSegments.length - 1];
    console.log(productId);
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(productId);
      setProduct(fetchedProduct.item);
    };

    fetchProduct();
  }, [location]);

  if (!product) {
    return <div>Loading...</div>; // Or some other loading indicator
  }

  return (
    <div class="productContainer">
      <img
        src={`${environment.apiUrl}/${product.image}`}
        alt={product.name}
        class="itemPhoto"
        height={90}
      />
      <div class="box">
        <div class="info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div class="button">
            <Button
              label={`Add to cart for ${product.price}€`}
              path={"/"}
            ></Button>
          </div>
        </div>
      </div>
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
