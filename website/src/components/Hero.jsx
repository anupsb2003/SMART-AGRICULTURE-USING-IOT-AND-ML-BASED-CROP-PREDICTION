import "./Hero.css";
import Navbar from "./Navbar";
import farm from "../assets/farm.jpg";

export default function Hero() {
  return (
    <section className="hero">

      <img src={farm} className="heroImage" />

      {/* Navbar inside hero */}
      <Navbar />

      <div className="heroContent">

        <h1>
          Advancing Modern Agriculture
          <br />
          with Biotechnology
        </h1>

        <p>
          Biotechnology enables smarter, sustainable agriculture
          by improving crop yields and boosting resistance.
        </p>

        <div className="buttons">

          <button className="exploreBtn">
            Explore Our Solutions →
          </button>

          <button className="learnBtn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}