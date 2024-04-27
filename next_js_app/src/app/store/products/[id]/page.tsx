import Image from "next/image";
import styles from "./singleStoreItem.module.css";
import { Product } from "@/models/models";

async function getProductById(productId: string) {
  const response = await fetch(`${process.env.URL}/api/products/${productId}`, {
    method: "GET",
    next: { revalidate: 10 },
  });
  return response.json() as Promise<{ product: Product }>;
}

export default async function StorePage({ params }: any) {
  const response = await getProductById(params.id);
  const product = response.product;
  console.log(process.env.URL);
  return (
    <div className={styles.container}>
      <Image
        src={`${process.env.REACT_APP_URL}/${product.image}`}
        alt={product.name}
        width={300}
        height={300}
        className={styles.itemPhoto}
      />
      <div className={styles.box}>
        <div className={styles.info}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        <button className={styles.button}>
          Add to cart for {product.price}€
        </button>
      </div>
    </div>
  );
}
