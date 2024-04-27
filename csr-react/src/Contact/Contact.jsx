import contactImage from "../assets/dress.jpg";
import "./style.css";

export function Contact() {
  return (
    <div className="contact">
      <div className="imageContainer">
        <img src={contactImage} alt="dress picture" className="image" />
      </div>
      <div className="formContainer">
        <form className="form">
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
