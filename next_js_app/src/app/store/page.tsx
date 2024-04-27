import styles from "./store.module.css";
import ProductList from "@/components/ProductList/ProductList";
import { Product } from "@/models/models";

async function getProducts() {
  console.log(process.env.URL);
  const response = await fetch(`${process.env.URL}/products`, {
    next: { revalidate: 10 },
  });
  if (response.status !== 200) {
    return null;
  }
  return response.json() as Promise<{ items: Product[] }>;
}

export default async function Store() {
  const response = await getProducts();
  if (!response) {
    return <div>Failed to load products</div>;
  }
  return (
    <div className={styles.container}>
      <ProductList items={response.items}></ProductList>
    </div>
  );
}
