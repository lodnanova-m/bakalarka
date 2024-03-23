import { Link } from "preact-router";
import "./style.css";
export function Button({ label, path }) {
  return (
    <Link href={path}>
      <button>{label}</button>
    </Link>
  );
}
