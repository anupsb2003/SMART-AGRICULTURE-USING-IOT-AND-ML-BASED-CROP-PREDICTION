import { useEffect, useState } from "react";
import axios from "axios";
import HourlyChart from "../components/HourlyChart";
import "./weatherDashboard.css";

export default function WeatherDashboard() {

  const API = import.meta.env.VITE_WEATHER_API;

  const [weather, setWeather] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [time, setTime] = useState(new Date());


  /* LIVE CLOCK */

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);



  /* LOAD WEATHER */

  const loadWeather = async (city) => {

    try {

      const current = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`
      );

      setWeather(current.data);

      const lat = current.data.coord.lat;
      const lon = current.data.coord.lon;

      const forecast = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&timezone=auto`
      );


      const times = forecast.data.hourly.time;
      const temps = forecast.data.hourly.temperature_2m;

      const now = new Date();


      /* Convert API data */

      const hourlyData = times.map((t, i) => ({
        dt: new Date(t).getTime() / 1000,
        temp: temps[i]
      }));


      /* Find index of current hour */

      const currentIndex = times.findIndex(t => {

        const d = new Date(t);

        return (
          d.getHours() === now.getHours() &&
          d.getDate() === now.getDate()
        );

      });


      /* Last 24 hours ending now */

      let start = currentIndex - 23;

      if (start < 0) start = 0;

      const last24 = hourlyData.slice(start, currentIndex + 1);

      setHourly(last24);

    } catch (err) {

      console.log(err);

    }

  };


  /* INITIAL LOAD + AUTO UPDATE EVERY HOUR */

  useEffect(() => {

    loadWeather("Bangalore");

    const interval = setInterval(() => {

      loadWeather("Bangalore");

    }, 3600000); // 1 hour

    return () => clearInterval(interval);

  }, []);



  if (!weather) return null;



  return (

    <div className="dashboard">

      <div className="main">

        {/* HEADER */}

        <div className="weatherHeader">

          <h2 className="sectionTitle">
            Weather Overview
          </h2>

          <div className="locationTime">

            <span className="cityName">
              {weather.name}
            </span>

            <span className="separator">|</span>

            <span className="liveTime">
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
              })}
            </span>

          </div>

        </div>



        {/* OVERVIEW GRID */}

        <div className="overviewGrid">


          {/* Temperature */}

          <div className="card temperatureCard">

            <div className="weatherIcon">☁</div>

            <h1>{Math.round(weather.main.temp)}°C</h1>

            <p>{weather.weather[0].description}</p>

            <span>{weather.name}</span>

          </div>


          {/* Air Quality */}

          <div className="card airCard">

            <div className="airCircle">14</div>

            <p>Good air quality</p>

          </div>


          {/* Chart */}

          <div className="card chartCard">

            <HourlyChart hourly={hourly} />

          </div>

        </div>



        {/* HIGHLIGHTS */}

        <h3 className="sectionTitle">Today's Highlight</h3>

        <div className="highlightGrid">

          <div className="card highlight">
            <p>Wind</p>
            <h2>{weather.wind.speed} km/h</h2>
          </div>

          <div className="card highlight">
            <p>Humidity</p>
            <h2>{weather.main.humidity}%</h2>
          </div>

          <div className="card highlight">
            <p>Pressure</p>
            <h2>{weather.main.pressure}</h2>
          </div>

          <div className="card highlight">
            <p>Visibility</p>
            <h2>{weather.visibility / 1000} km</h2>
          </div>

          <div className="card notificationCard">

            <h4>GET AUTOMATIC ALERTS FOR WEATHER CHANGES</h4>

            <button className="notifyBtn">
              Turn on notifications
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}