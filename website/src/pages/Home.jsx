import "./Home.css";
import farm from "../assets/farm.png";

export default function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${farm})` }}
    >
      
      {/* Navbar */}
      <div className="navbar">

        <div className="logo">
          🌿 Agro Grow
        </div>

        <div className="menu">
          <a>Home</a>
          <a>About</a>
          <a>Solutions</a>
          <a>Blog</a>
          <a>Contact Us</a>
        </div>

        <button className="startBtn">
          Get Started →
        </button>

      </div>


      {/* Hero Content */}
      <div className="heroContent">

        <h1>
          Advancing Modern Agriculture
          <br />
          with IoT sensors.
        </h1>

        <p>
IoT-powered agriculture combined with machine learning helps monitor soil,
weather, and crop conditions in real time, enabling smarter farming and
higher yields.
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

    </div>
  );
}