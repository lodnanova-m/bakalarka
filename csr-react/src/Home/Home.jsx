import "./style.css";
import homeImage from "../assets/home_image.jpg";
import { Button } from "../components/Button/Button";

export function Home() {
  return (
    <div className="home">
      <div className="homeCard">
        <h1>Unleash Your Fashion Beast</h1>
        <h2>Roar with confidence and style</h2>
        <p>
          Welcome to Fashion Beast, the ultimate destination where style meets
          comfort and fashion becomes accessible to everyone. At Fashion Beast,
          we believe that fashion is not just about wearing clothes but
          expressing your unique identity and feeling confident in your own
          skin. Our carefully curated collections are designed to cater to
          diverse tastes and occasions, ensuring that you find the perfect piece
          that speaks to you.
        </p>
        <div className="cardButtons">
          <Button label="Shop now" path="/store" />
          <Button label="Learn more about our company" path="/about" />
        </div>
      </div>
      <img src={homeImage} alt="home page image" className="imageHome" />
    </div>
  );
}

export default Home;
