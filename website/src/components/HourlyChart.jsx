import { Line } from "react-chartjs-2";
import {
Chart as ChartJS,
LineElement,
CategoryScale,
LinearScale,
PointElement,
Tooltip,
Legend
} from "chart.js";

ChartJS.register(
LineElement,
CategoryScale,
LinearScale,
PointElement,
Tooltip,
Legend
);

export default function HourlyChart({ hourly }) {

if(!hourly || hourly.length === 0) return null;

const data = {

labels: hourly.map(h =>
new Date(h.dt*1000).getHours()+":00"
),

datasets:[
{
label:"Temperature (°C)",

data: hourly.map(h=>h.temp),

borderColor:"#ffb300",

backgroundColor:"rgba(255,179,0,0.2)",

tension:0.45,

pointRadius:0,

pointHoverRadius:6,

pointBackgroundColor:"#ffb300",

borderWidth:3
}
]

};

const options={

responsive:true,

interaction:{
mode:"index",
intersect:false
},

plugins:{
legend:{display:false},
tooltip:{enabled:true}
},

scales:{

x:{
title:{display:true,text:"Time"},
ticks:{color:"#fff"}
},

y:{
title:{display:true,text:"Temperature (°C)"},
ticks:{color:"#fff"}
}

},

onHover:(event,chartElement)=>{
event.native.target.style.cursor =
chartElement.length ? "pointer" : "default";
}

};

return (
<div style={{height:"260px"}}>
<Line data={data} options={options}/>
</div>
);
}