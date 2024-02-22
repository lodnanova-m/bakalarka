import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import homePic from "../../assets/home_image.jpg";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeCard}>
        <h1>Unleash Your Fashion Beast</h1>
        <h2>Roar with confidence and style</h2>
        <p>
          Welcome to Fashion Beast, where style meets comfort and fashion
          becomes accessible to everyone.
        </p>
        <div className={styles.cardButtons}>
          <Link href={"/store"}>
            <button>Shop now</button>
          </Link>
          <Link href={"/about"}>
            <button>Learn more</button>
          </Link>
        </div>
      </div>
      <Image src={homePic} alt="home page image" className={styles.imageHome} />
    </div>
  );
};
export default Home;
