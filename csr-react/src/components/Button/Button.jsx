import { Link } from "react-router-dom";

export function Button({ label, path }) {
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <button>{label}</button>
    </Link>
  );
}
