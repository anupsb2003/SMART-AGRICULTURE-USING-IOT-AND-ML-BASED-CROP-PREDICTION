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

    <div className="homePage">


      {/* HERO SECTION */}

      <section
        id="home"
        className="heroSection"
        style={{ backgroundImage: `url(${farm})` }}
      >

        <Navbar />

        <div className="heroContent">

          <h1>
            Smart Agriculture <br />
            Powered by <span>AI & IoT</span>
          </h1>

          <p>
            Monitor soil moisture, weather patterns, and crop health
            in real-time using intelligent sensors and AI-powered
            analytics to maximize agricultural productivity.
          </p>

          <div className="heroButtons">

            <button className="primaryBtn">
              Explore Solutions
            </button>

            <button className="secondaryBtn">
              Learn More
            </button>

          </div>

        </div>

      </section>



      {/* STATS SECTION */}

      <section className="statsSection">

        <div className="statCard">
          <h2>98%</h2>
          <p>Crop Monitoring Accuracy</p>
        </div>

        <div className="statCard">
          <h2>500+</h2>
          <p>Farms Connected</p>
        </div>

        <div className="statCard">
          <h2>24/7</h2>
          <p>Real-Time Monitoring</p>
        </div>

        <div className="statCard">
          <h2>35%</h2>
          <p>Water Usage Reduced</p>
        </div>

      </section>



      {/* WEATHER DASHBOARD */}

      <section className="weatherSection">

        <h2 className="sectionHeading">
          Live Farm Weather Monitoring
        </h2>

        <p className="sectionSub">
          Real-time weather insights help farmers make
          smarter irrigation and crop management decisions.
        </p>

        <WeatherDashboard />

      </section>



      {/* FEATURES SECTION */}

      <section className="featuresSection">

        <h2 className="sectionHeading">
          Smart Agriculture Features
        </h2>

        <div className="featureGrid">

          <div className="featureCard">
            🌱
            <h3>Soil Monitoring</h3>
            <p>
              Track soil moisture, nutrients, and temperature
              to optimize crop growth conditions.
            </p>
          </div>

          <div className="featureCard">
            ☁️
            <h3>Weather Prediction</h3>
            <p>
              AI-powered weather forecasting helps farmers
              plan irrigation and harvest cycles effectively.
            </p>
          </div>

          <div className="featureCard">
            📡
            <h3>IoT Sensors</h3>
            <p>
              Smart sensors collect real-time field data
              and transmit it directly to your dashboard.
            </p>
          </div>

          <div className="featureCard">
            📊
            <h3>AI Analytics</h3>
            <p>
              Machine learning analyzes crop and weather
              patterns for predictive agriculture insights.
            </p>
          </div>

        </div>

      </section>



      {/* EXISTING COMPONENTS */}

      <About />
      <Solutions />
      <Blog />
      <Contact />


    </div>

  );

}