import ProductItem from "@/components/productItem/ProductItem";
import styles from "./store.module.css";
import { Products } from "../models/models";
const Store = () => {
  return (
    <div className={styles.container}>
      <ProductItem item={Products[0]} />
      <ProductItem item={Products[1]} />
      <ProductItem item={Products[2]} />
      <ProductItem item={Products[3]} />
    </div>
  );
};

export default Store;
