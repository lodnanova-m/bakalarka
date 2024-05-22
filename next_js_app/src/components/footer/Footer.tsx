import Image from "next/image";
import styles from "./footer.module.css";
import logo from "../../../assets/logotype.png";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={logo} alt="logotype" className={styles.logotype} />
      </div>
      <div className={styles.initials}>
        <h1>Michaela Lodňanová</h1>
        <h2>525221</h2>
        <h3>Bachelor's thesis</h3>
      </div>
    </div>
  );
};
export default Footer;
