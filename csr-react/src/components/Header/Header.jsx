import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import logotype from "../../assets/logotype.png";
import icon from "../../assets/images/menu_hamburger.svg";
import "./style.css";

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header>
      <nav className="navbarContainer">
        <a href="/" className="header">
          <img src={logo} alt="logo" className="logo" />
          <img src={logotype} alt="logotype" className="logotype" />
        </a>
        <div>
          <div className="links">
            <a
              href="/"
              className={currentPath === "/" ? "active" : "linkButton"}
            >
              Home
            </a>
            <a
              href="/about"
              className={currentPath === "/about" ? "active" : "linkButton"}
            >
              About
            </a>
            <a
              href="/store"
              className={currentPath === "/store" ? "active" : "linkButton"}
            >
              Store
            </a>
            <a
              href="/contact"
              className={currentPath === "/contact" ? "active" : "linkButton"}
            >
              Contact
            </a>
          </div>
          <div className="mobileLinks">
            <a href="/" className="linkButton">
              Home
            </a>
            <a href="/about" className="linkButton">
              About
            </a>
            <a href="/store" className="linkButton">
              Store
            </a>
            <a href="/contact" className="linkButton">
              Contact
            </a>
          </div>
          <button className="menuButton">
            <img src={icon} alt="hamburger menu icon" width="30" height="30" />
          </button>
        </div>
      </nav>
    </header>
  );
}
