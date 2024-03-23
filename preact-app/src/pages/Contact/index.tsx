import { h } from "preact";
import contactImage from "../../assets/dress.jpg";
import "./style.css";
export function Contact() {
  return (
    <div class="contact">
      <div class="imageContainer">
        <img src={contactImage} alt="dress picture" class="image" />
      </div>
      <div class="formContainer">
        <form class="form">
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea cols={30} rows={10} placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
