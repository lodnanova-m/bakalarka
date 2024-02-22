import Image from "next/image";
import styles from "./singleStoreItem.module.css";
import { Products } from "@/models/models";

export async function StorePage() {
  return (
    <div className={styles.container}>
      <Image
        src={Products[0].image}
        alt={Products[0].name}
        width={300}
        height={300}
        className={styles.itemPhoto}
      />
      <div className={styles.box}>
        <div className={styles.info}>
          <h1>{Products[0].name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
            blandit arcu. Quisque dapibus ligula sit amet magna lacinia egestas.
            Aenean sit amet libero non ex interdum faucibus. Duis nunc eros,
            mattis ac felis feugiat, lacinia egestas odio. Aliquam erat
            volutpat. In hac habitasse platea dictumst. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Vivamus dolor diam, vulputate a rhoncus et, cursus nec mi. Nunc ut
            ipsum finibus, scelerisque leo quis, mollis est. Pellentesque sed
            vehicula turpis, sed dapibus sem. Morbi nec orci metus. Integer
            efficitur aliquam odio, congue sagittis risus pulvinar eu.
          </p>
        </div>
        <button className={styles.button}>
          Add to cart for {Products[0].price}€
        </button>
      </div>
    </div>
  );
}
