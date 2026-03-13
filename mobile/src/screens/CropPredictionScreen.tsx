import React, { useEffect, useState, useRef } from "react";
import {
View,
Text,
StyleSheet,
ScrollView,
Animated
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Navbar from "../compnents/Navbar";

export default function CropPredictionScreen({ navigation }: any) {

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

const fadeAnim = useRef(new Animated.Value(1)).current;

const predictCrop = (data:any) => {

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

Animated.sequence([
Animated.timing(fadeAnim,{toValue:0,duration:300,useNativeDriver:true}),
Animated.timing(fadeAnim,{toValue:1,duration:300,useNativeDriver:true})
]).start();

const randomIndex = Math.floor(Math.random()*sensorSamples.length);

const data = sensorSamples[randomIndex];

setSensor(data);

predictCrop(data);

};

changeSensor();

const interval = setInterval(changeSensor,30000);

return () => clearInterval(interval);

},[]);

return(

<View style={{flex:1}}>

<LinearGradient
colors={["#021b2b","#05344f","#021b2b"]}
style={{flex:1}}
>

{/* NAVBAR */}

<Navbar navigation={navigation} title="Agro Grow"/>

<ScrollView contentContainerStyle={styles.content}>

<Text style={styles.pageTitle}>
Crop Prediction
</Text>

{/* SENSOR CARD */}

<Animated.View style={[styles.sensorCard,{opacity:fadeAnim}]}>

<Text style={styles.section}>
Live Sensor Data
</Text>

<View style={styles.row}>
<Text style={styles.label}>🌱 Soil Moisture</Text>
<Text style={styles.value}>{sensor.moisture}%</Text>
</View>

<View style={styles.row}>
<Text style={styles.label}>🌡 Temperature</Text>
<Text style={styles.value}>{sensor.temperature} °C</Text>
</View>

<View style={styles.row}>
<Text style={styles.label}>💧 Humidity</Text>
<Text style={styles.value}>{sensor.humidity}%</Text>
</View>

<View style={styles.row}>
<Text style={styles.label}>⚗ Soil pH</Text>
<Text style={styles.value}>{sensor.ph}</Text>
</View>

</Animated.View>

{/* RESULT CARD */}

<Animated.View style={[styles.resultCard,{opacity:fadeAnim}]}>

<Text style={styles.resultTitle}>
Recommended Crop
</Text>

<Text style={styles.result}>
{crop}
</Text>

</Animated.View>

</ScrollView>

</LinearGradient>

</View>

);

}

const styles = StyleSheet.create({

content:{
paddingHorizontal:20,
paddingTop:110,
paddingBottom:40
},

pageTitle:{
color:"#fff",
fontSize:24,
fontWeight:"700",
marginBottom:20
},

section:{
color:"#16c3d6",
fontSize:20,
fontWeight:"700",
marginBottom:15
},

sensorCard:{
backgroundColor:"#0f2f46",
padding:22,
borderRadius:22,
marginBottom:30,

shadowColor:"#000",
shadowOpacity:0.3,
shadowRadius:10,
shadowOffset:{width:0,height:5},
elevation:6
},

row:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:14
},

label:{
color:"#d4eef6",
fontSize:16
},

value:{
color:"#fff",
fontSize:17,
fontWeight:"600"
},

resultCard:{
backgroundColor:"#0f2f46",
padding:35,
borderRadius:25,
alignItems:"center",
marginTop:10,

shadowColor:"#16c3d6",
shadowOpacity:0.5,
shadowRadius:12,
shadowOffset:{width:0,height:6},
elevation:10
},

resultTitle:{
color:"#cde6ee",
fontSize:16,
marginBottom:10
},

result:{
color:"#16c3d6",
fontSize:40,
fontWeight:"800"
}

});