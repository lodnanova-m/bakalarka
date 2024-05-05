import Image from "next/image";
import styles from "./singleStoreItem.module.css";
import { Product } from "@/models/models";

async function getProductById(productId: string) {
  const response = await fetch(`${process.env.URL}/products/${productId}`);
  return response.json() as Promise<{ item: Product }>;
}

export default async function StorePage({ params }: any) {
  const response = await getProductById(params.id);
  const product = response.item;

  return (
    <div className={styles.container}>
      <Image
        src={`${process.env.URL}/${product.image}`}
        alt={product.name}
        className={styles.itemPhoto}
        width={500}
        height={700}
        sizes="(max-width: 55rem) 0px, (max-width: 1200px) 50vw, 33vw"
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
