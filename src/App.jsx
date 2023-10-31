import "./index.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Sections/Home";

function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />

        <Home />
      </section>
      <section id="Services">
        <p>section Services</p>
      </section>
      <section id="Portfolio">
        <p>section Portfolio</p>
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
