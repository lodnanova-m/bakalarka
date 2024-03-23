import "./style.css";
export function Button({ label, path }) {
  return <a href={path}>{label}</a>;
}
