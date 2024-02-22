import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import logotype from "../../../assets/logotype.png";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} alt="logo" className={styles.icon} />
        <Image src={logotype} alt="logotype" className={styles.logotype} />
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};
export default Navbar;
