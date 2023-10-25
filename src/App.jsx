import "./index.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />
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
      <section>
        <p>ci/cd demo</p>
      </section>
    </>
  );
}

export default App;
