import { Link } from "react-router-dom";
import logotype from "../../assets/logotype.png";
import "./style.css";
export function Footer() {
  return (
    <footer class="footer">
      <Link to="/">
        <img src={logotype} alt="logotype" class="logotype" />
      </Link>
      <div class="initials">
        <h1>Michaela Lodňanová</h1>
        <h2>525221</h2>
        <h3>Bakalárska práca</h3>
      </div>
    </footer>
  );
}
