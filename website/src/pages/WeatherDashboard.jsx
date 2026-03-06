import { useEffect, useState } from "react";
import axios from "axios";
import HourlyChart from "../components/HourlyChart";
import "./weatherDashboard.css";

export default function WeatherDashboard() {

  const API = import.meta.env.VITE_WEATHER_API;

  const [city, setCity] = useState("Bangalore");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [hourly, setHourly] = useState([]);

  useEffect(() => {
    loadWeather("Bangalore");
  }, []);


  const loadWeather = async (cityName) => {

    try {

      /* CURRENT WEATHER (OpenWeather) */

      const current = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API}`
      );

      setWeather(current.data);

      const lat = current.data.coord.lat;
      const lon = current.data.coord.lon;


      /* OPEN-METEO FORECAST */

      const forecastData = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&timezone=auto`
      );


      /* 7 DAY FORECAST */

      const daily = forecastData.data.daily;

      const dailyForecast = daily.time.map((date, i) => ({
        date: date,
        max: daily.temperature_2m_max[i],
        min: daily.temperature_2m_min[i]
      }));

      setForecast(dailyForecast);


      /* HOURLY GRAPH (CURRENT TIME ±12 HOURS) */

      /* HOURLY GRAPH (FULL 24 HOURS FROM CURRENT TIME) */

const hourlyTimes = forecastData.data.hourly.time;
const hourlyTemps = forecastData.data.hourly.temperature_2m;

const hourlyData = hourlyTimes.map((time,i)=>({
  dt: new Date(time).getTime()/1000,
  temp: hourlyTemps[i]
}));

/* find current hour */

const now = new Date();

const currentIndex = hourlyTimes.findIndex(t=>{
  const d = new Date(t);
  return d.getHours() === now.getHours() &&
         d.getDate() === now.getDate();
});

/* take current + next 23 hours */

let start = currentIndex;
let end = currentIndex + 24;

if(end > hourlyData.length){
  end = hourlyData.length;
  start = end - 24;
}

setHourly(hourlyData.slice(start,end));

    } catch (err) {

      console.log(err);
      alert("City not found");

    }

  };


  const searchCity = () => {
    if (city.trim() !== "") {
      loadWeather(city);
    }
  };


  const getIcon = (type) => {

    if (type === "Rain") return "🌧";
    if (type === "Clouds") return "☁";
    if (type === "Clear") return "☀";
    if (type === "Thunderstorm") return "⛈";
    if (type === "Snow") return "❄";

    return "🌤";

  };


  if (!weather) return null;

  return (

    <div className="dashboard">

      {/* HEADER */}

      <div className="header">

        <div className="location">
          📍 {weather.name}, {weather.sys.country}
        </div>

        <div className="searchBar">

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city..."
          />

          <button onClick={searchCity}>
            Search
          </button>

        </div>

      </div>


      {/* WEATHER CARD */}

      <div className="weatherCard">

        {/* LEFT */}

        <div className="left">

          <h1 className="temp">
            {Math.round(weather.main.temp)}°C
          </h1>

          <h2 className="condition">
            {weather.weather[0].description}
          </h2>

          <div className="stats">

            <div>
              <p>Wind</p>
              <h3>{weather.wind.speed} km/h</h3>
            </div>

            <div>
              <p>Humidity</p>
              <h3>{weather.main.humidity}%</h3>
            </div>

          </div>

        </div>


        {/* CENTER ICON */}

        <div className="centerIcon">

          <div className="cloud">
            {getIcon(weather.weather[0].main)}
          </div>

          {weather.weather[0].main === "Thunderstorm" &&
            <div className="lightning">⚡</div>
          }

        </div>


        {/* FORECAST PANEL */}

        <div className="forecast">

          {forecast.map((day, i) => {

            const date = new Date(day.date);

            return (

              <div key={i} className="day">

                <span>
                  {date.toLocaleDateString("en-US", { weekday: "long" })}
                </span>

                <span>
                  {Math.round((day.max + day.min) / 2)}°
                </span>

              </div>

            )

          })}

        </div>

      </div>


      {/* CURRENT TIME */}

      <div style={{color:"#fff", marginTop:"20px"}}>
        Current Time: {new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}
      </div>


      {/* HOURLY GRAPH */}

      <div className="chart">

        <HourlyChart hourly={hourly} />

      </div>

    </div>

  )

}