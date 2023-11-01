import "./index.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Sections/Home";
import Service from "./components/Sections/Service";

function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />

        <Home />
      </section>

      <section id="Services">
        <Service type="service" />
      </section>

      <section id="Portfolio">
        <Service type="portfolio" />
      </section>

      <section id="Contact">
        <p>section Contact</p>
      </section>

      <section id="About">
        <p>section About</p>
      </section>
    </>
  );
}

export default App;
