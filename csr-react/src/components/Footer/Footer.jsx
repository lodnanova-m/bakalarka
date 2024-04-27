import logotype from "../../assets/logotype.png";
import "./style.css";
export function Footer() {
  return (
    <footer class="footer">
      <div>
        <img src={logotype} alt="logotype" class="logotype" />
      </div>
      <div class="initials">
        <h1>Michaela Lodňanová</h1>
        <h2>525221</h2>
        <h3>Bakalárska práca</h3>
      </div>
    </footer>
  );
}
