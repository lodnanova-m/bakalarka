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
          Welcome to Fashion Beast, the ultimate destination where style meets
          comfort and fashion becomes accessible to everyone. At Fashion Beast,
          we believe that fashion is not just about wearing clothes but
          expressing your unique identity and feeling confident in your own
          skin. Our carefully curated collections are designed to cater to
          diverse tastes and occasions, ensuring that you find the perfect piece
          that speaks to you.
        </p>
        <div className={styles.cardButtons}>
          <Link href={"/store"}>
            <button>Shop now</button>
          </Link>
          <Link href={"/about"}>
            <button>Learn more about our company</button>
          </Link>
        </div>
      </div>
      <Image src={homePic} alt="home page image" className={styles.imageHome} />
    </div>
  );
};
export default Home;
