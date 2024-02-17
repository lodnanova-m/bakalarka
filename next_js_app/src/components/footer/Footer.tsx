import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div className={styles.initials}>
        <h1>Michaela Lodňanová</h1>
        <h2>525221</h2>
        <h3>Bakalárska práca</h3>
      </div>
    </div>
  );
};
export default Footer;
