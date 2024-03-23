import "./style.css";
import { useLocation } from "preact-iso";
export function Store() {
  const { route } = useLocation();

  const navigateToItem = (itemId) => {
    route(`/store/${itemId}`);
  };
  return <button onClick={() => navigateToItem(1)}>Click me</button>;
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
