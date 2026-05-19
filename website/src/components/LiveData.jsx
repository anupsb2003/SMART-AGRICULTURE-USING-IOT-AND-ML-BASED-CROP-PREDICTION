import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import cropDatabase from "../data/cropData";
import "./LiveData.css";

export default function LiveData() {

  const [sensor, setSensor] = useState({
    moisture: 0,
    temperature: 0,
    ph: 0,
    light: 0,
  });

  const [location, setLocation] = useState("");

  const [crop, setCrop] = useState("");

  // =====================================
  // FIREBASE LIVE DATA
  // =====================================

  useEffect(() => {

    onValue(ref(database, "SoilMoisture"), (snapshot) => {

      setSensor((prev) => ({
        ...prev,
        moisture: snapshot.val(),
      }));

    });

    onValue(ref(database, "SoilTemperature"), (snapshot) => {

      setSensor((prev) => ({
        ...prev,
        temperature: snapshot.val(),
      }));

    });

    onValue(ref(database, "SoilPH"), (snapshot) => {

      setSensor((prev) => ({
        ...prev,
        ph: snapshot.val(),
      }));

    });

    onValue(ref(database, "LightIntensity"), (snapshot) => {

      setSensor((prev) => ({
        ...prev,
        light: snapshot.val(),
      }));

    });

  }, []);

  // =====================================
  // PREDICT CROPS
  // =====================================

  const predictCrop = () => {

  const scoredCrops = [];

  cropDatabase.forEach((item) => {

    const userLocation =
      location.trim().toLowerCase();

    const locationMatch =

      item.location &&
      item.location.toLowerCase() === userLocation ||

      item.state &&
      item.state.toLowerCase() === userLocation;

    if (!locationMatch) return;

    let score = 0;

    // Moisture
    if (
      item.moisture &&
      sensor.moisture >= item.moisture[0] &&
      sensor.moisture <= item.moisture[1]
    ) {

      score++;

    }

    // Temperature
    if (
      item.temperature &&
      sensor.temperature >= item.temperature[0] &&
      sensor.temperature <= item.temperature[1]
    ) {

      score++;

    }

    // PH
    if (
      item.soilPH &&
      sensor.ph >= item.soilPH[0] &&
      sensor.ph <= item.soilPH[1]
    ) {

      score++;

    }

    scoredCrops.push({
      crops: item.crops,
      score,
    });

  });

  if (scoredCrops.length > 0) {

    scoredCrops.sort((a, b) => b.score - a.score);

    setCrop(
      scoredCrops[0].crops.join(" , ")
    );

  }

  else {

    setCrop("No Suitable Crop Found");

  }

};

  return (

    <section className="cropContainer">

      <h2 className="title">

        Smart Agriculture Dashboard

      </h2>

      {/* INPUT */}

      <div className="inputContainer">

        <input
          type="text"
          placeholder="Enter District / State"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
        />

        <button onClick={predictCrop}>

          Predict Crop

        </button>

      </div>

      {/* SENSOR DATA */}

      <div className="sensorCard">

        <h3>Live Sensor Data</h3>

        <div className="row">
          <span>🌱 Soil Moisture</span>
          <span>{sensor.moisture} VWC</span>
        </div>

        <div className="row">
          <span>🌡 Soil Temperature</span>
          <span>{sensor.temperature} °C</span>
        </div>

        <div className="row">
          <span>⚗ Soil PH Value</span>
          <span>{sensor.ph} PH</span>
        </div>

        <div className="row">
          <span>💡 Light Intensity</span>
          <span>{sensor.light} lx</span>
        </div>

      </div>

      {/* RESULT */}

      <div className="resultCard">

        <p>Recommended Crops</p>

        <h2>{crop}</h2>

      </div>

    </section>

  );

}