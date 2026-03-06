import "./Home.css";
import farm from "../assets/farm.png";
import WeatherDashboard from "./WeatherDashboard";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Solutions from "../components/Solutions";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>

      {/* HOME SECTION */}
      <section
        id="home"
        className="home"
        style={{ backgroundImage: `url(${farm})` }}
      >

        <Navbar />

        <div className="heroContent">

          <h1>
            Advancing Modern Agriculture
            <br />
            with IoT sensors.
          </h1>

          <p>
            IoT-powered agriculture combined with machine learning
            helps monitor soil, weather, and crop conditions
            in real time for smarter farming.
          </p>

        </div>

      </section>
      <WeatherDashboard />
      
      <About />
      <Solutions />
      <Blog />
      <Contact />

    </div>
  );
}