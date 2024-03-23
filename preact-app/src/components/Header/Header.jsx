import { useLocation } from "preact-iso";
import logo from "../../assets/logo.png";
import logotype from "../../assets/logotype.png";
import icon from "../../assets/images/menu_hamburger.svg";
import "./style.css";
export function Header() {
  const { url } = useLocation();
  return (
    <header>
      <nav class="navbarContainer">
        <a href="/" class="header">
          <img src={logo} alt="logo" class="logo" />
          <img src={logotype} alt="logotype" class="logotype" />
        </a>
        <div>
          <div class="links">
            <a href="/" class={url === '/' ? "active" : "linkButton"}>
              Home
            </a>
            <a href="/about" class={url === '/about' ? "active" : "linkButton"}>
              About
            </a>
            <a href="/store" class={url === '/store' ? "active" : "linkButton"}>
              Store
            </a>
            <a href="/contact" class={url === '/contact' ? "active" : "linkButton"}>
              Contact
            </a>
          </div>
          <div class="mobileLinks">
            <a href="/" class="linkButton">
              Home
            </a>
            <a href="/about" class="linkButton">
              About
            </a>
            <a href="/store" class="linkButton">
              Store
            </a>
            <a href="/contact" class="linkButton">
              Contact
            </a>
          </div>
          <button class="menuButton">
            <img src={icon} alt="hamburger menu icon" width="30" height="30" />
          </button>
        </div>
      </nav>
    </header>
  );
}
