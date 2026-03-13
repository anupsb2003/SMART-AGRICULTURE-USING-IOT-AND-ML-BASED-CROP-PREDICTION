import { useEffect, useState } from "react";
import "./cropPrediction.css";

export default function CropPrediction() {

const sensorSamples = [
{ moisture: 45, temperature: 28, humidity: 60, ph: 6.5 },
{ moisture: 30, temperature: 24, humidity: 55, ph: 6.8 },
{ moisture: 50, temperature: 30, humidity: 70, ph: 6.2 },
{ moisture: 20, temperature: 22, humidity: 40, ph: 7.1 },
{ moisture: 35, temperature: 26, humidity: 50, ph: 6.7 },
{ moisture: 42, temperature: 29, humidity: 65, ph: 6.3 },
{ moisture: 38, temperature: 27, humidity: 58, ph: 6.9 },
{ moisture: 25, temperature: 23, humidity: 45, ph: 7.0 },
{ moisture: 48, temperature: 31, humidity: 72, ph: 6.1 },
{ moisture: 33, temperature: 25, humidity: 52, ph: 6.6 }
];

const [sensor, setSensor] = useState(sensorSamples[0]);
const [crop, setCrop] = useState("");
const [animate, setAnimate] = useState(false);

const predictCrop = (data) => {

let result = "Unknown";

if (data.moisture >= 40 && data.humidity >= 60 && data.ph >= 6 && data.ph <= 7)
result = "Rice 🌾";

else if (data.moisture >= 25 && data.moisture <= 35 && data.temperature <= 26)
result = "Wheat 🌾";

else if (data.temperature >= 25 && data.temperature <= 30 && data.ph >= 6.5)
result = "Maize 🌽";

else if (data.moisture >= 45 && data.humidity >= 65)
result = "Sugarcane 🌱";

else if (data.temperature <= 24 && data.ph >= 7)
result = "Barley 🌾";

setCrop(result);

};

useEffect(() => {

const changeSensor = () => {

setAnimate(false);

const randomIndex = Math.floor(Math.random()*sensorSamples.length);

const data = sensorSamples[randomIndex];

setSensor(data);

predictCrop(data);

setTimeout(()=>setAnimate(true),100);

};

changeSensor();

const interval = setInterval(changeSensor,30000);

return () => clearInterval(interval);

},[]);

return(

<section id="cropPrediction" className="cropContainer">

<h2 className="title">Crop Prediction</h2>

<div className={`sensorCard ${animate ? "fade" : ""}`}>

<h3>Live Sensor Data</h3>

<div className="row">
<span>🌱 Soil Moisture</span>
<span>{sensor.moisture}%</span>
</div>

<div className="row">
<span>🌡 Temperature</span>
<span>{sensor.temperature} °C</span>
</div>

<div className="row">
<span>💧 Humidity</span>
<span>{sensor.humidity}%</span>
</div>

<div className="row">
<span>⚗ Soil pH</span>
<span>{sensor.ph}</span>
</div>

</div>

<div className={`resultCard ${animate ? "fade" : ""}`}>

<p>Recommended Crop</p>

<h1>{crop}</h1>

</div>

</section>

);

}