import styles from "./store.module.css";
import ProductList from "@/components/ProductList/ProductList";
import { Product } from "@/models/models";

async function getProducts() {
  const response = await fetch(`${process.env.URL}/api/products`, {
    method: "GET",
    next: { revalidate: 10 },
  });
  return response.json() as Promise<{ products: Product[] }>;
}

export default async function Store() {
  const response = await getProducts();
  return (
    <div className={styles.container}>
      <ProductList items={response.products}></ProductList>
    </div>
  );
}
