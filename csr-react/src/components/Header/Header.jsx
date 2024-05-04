import { Link, useLocation } from "react-router-dom";
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
        <Link to="/" className="header">
          <img src={logo} alt="logo" className="logo" />
          <img src={logotype} alt="logotype" className="logotype" />
        </Link>
        <div>
          <div className="links">
            <Link
              to="/"
              className={currentPath === "/" ? "active" : "linkButton"}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={currentPath === "/about" ? "active" : "linkButton"}
            >
              About
            </Link>
            <Link
              to="/store"
              className={currentPath === "/store" ? "active" : "linkButton"}
            >
              Store
            </Link>
            <Link
              to="/contact"
              className={currentPath === "/contact" ? "active" : "linkButton"}
            >
              Contact
            </Link>
          </div>
          <div className="mobileLinks">
            <Link to="/" className="linkButton">
              Home
            </Link>
            <Link to="/about" className="linkButton">
              About
            </Link>
            <Link to="/store" className="linkButton">
              Store
            </Link>
            <Link to="/contact" className="linkButton">
              Contact
            </Link>
          </div>
          <button className="menuButton">
            <img src={icon} alt="hamburger menu icon" width="30" height="30" />
          </button>
        </div>
      </nav>
    </header>
  );
}
