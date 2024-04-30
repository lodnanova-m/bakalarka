import styles from "./store.module.css";
import ProductList from "@/components/ProductList/ProductList";
import { Product } from "@/models/models";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store | Fashion Store",
  description: "Fashion store products",
};

async function getProducts() {
  const response = await fetch(`${process.env.URL}/products`, {
    next: { revalidate: 1000 },
  });
  if (response.status !== 200) {
    console.error(response);
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
