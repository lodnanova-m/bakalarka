import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import { Header } from "./components/Header/Header";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Store } from "./Store/Store";
import { StoreItem } from "./StoreItem/StoreItem";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="app-container">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<Store />} />{" "}
            <Route path="store/:productId" element={<StoreItem />} />{" "}
          </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
