import { Product } from "@/models/models";
import Image from "next/image";
import styles from "./productItem.module.css";
import Link from "next/link";
type ProductProps = {
  item: Product;
};

const ProductItem = ({ item }: ProductProps) => {
  return (
    <div className={styles.productCard}>
      <h1>{item.name}</h1>
      <Image
        src={`${process.env.REACT_APP_URL}/${item.image}`}
        alt={item.name}
        width={300}
        height={400}
        className={styles.itemPhoto}
      />
      <div className={styles.buttons}>
        <Link href={`/store/products/${item.id}`}>
          <button>Read more..</button>
        </Link>
        <button>Add to cart for {item.price}€</button>
      </div>
    </div>
  );
};

export default ProductItem;
