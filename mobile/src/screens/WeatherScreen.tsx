import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";

import axios from "axios";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import Navbar from "../compnents/Navbar";
const screenWidth = Dimensions.get("window").width;

const API = "14d8d59bb9260e8cdda6f2d053921ce4";

export default function WeatherScreen({ navigation }: any) {

    const [city, setCity] = useState("Bangalore");
    const [weather, setWeather] = useState<any>(null);
    const [hourly, setHourly] = useState<any[]>([]);
    const [time, setTime] = useState(new Date());


    /* LIVE CLOCK */

    useEffect(() => {

        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);

    }, []);


    /* LOAD WEATHER */

    const loadWeather = async (cityName: string) => {

        try {

            const current = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API}`
            );

            setWeather(current.data);

            const lat = current.data.coord.lat;
            const lon = current.data.coord.lon;


            /* HOURLY DATA */

            const forecast = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&timezone=auto`
            );

            const times = forecast.data.hourly.time;
            const temps = forecast.data.hourly.temperature_2m;

            const now = new Date();

            const hourlyData = times.map((t: any, i: number) => ({

                time: new Date(t),
                temp: temps[i]

            }));


            const currentIndex = hourlyData.findIndex((h: any) => {

                return (
                    h.time.getHours() === now.getHours() &&
                    h.time.getDate() === now.getDate()
                )

            });


            let start = currentIndex - 23;

            if (start < 0) start = 0;

            const last24 = hourlyData.slice(start, currentIndex + 1);

            setHourly(last24);

        } catch (err) {

            console.log(err);

        }

    };


    /* INITIAL LOAD */

    useEffect(() => {

        loadWeather(city);

        const interval = setInterval(() => {

            loadWeather(city);

        }, 3600000);

        return () => clearInterval(interval);

    }, [city]);


    const searchCity = () => {

        if (city.trim() !== "") {

            loadWeather(city);

        }

    };


    if (!weather) return null;


    return (

        <View style={styles.container}>
            <Navbar navigation={navigation} title="Agro Grow" />

            {/* HEADER */}

            <View style={styles.header}>

                <View style={styles.searchBar}>

                    <TextInput
                        style={styles.input}
                        value={city}
                        onChangeText={setCity}
                    />

                    <TouchableOpacity
                        style={styles.searchBtn}
                        onPress={searchCity}
                    >
                        <Text style={{ color: "#021411",  fontWeight: "600" }}>
                            Search
                        </Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.time}>
                    {weather.name} | {time.toLocaleTimeString()}
                </Text>

            </View>


            {/* TEMPERATURE CARD */}

            <View style={styles.cardRow}>

                <View style={styles.card}>

                    <Text style={styles.temp}>
                        {Math.round(weather.main.temp)}°C
                    </Text>

                    <Text style={styles.desc}>
                        {weather.weather[0].description}
                    </Text>

                    <Text style={styles.city}>
                        {weather.name}
                    </Text>

                </View>


                <View style={styles.card}>

                    <Text style={styles.air}>
                        14
                    </Text>

                    <Text style={styles.desc}>
                        Good air quality
                    </Text>

                </View>

            </View>


            {/* CHART */}
            <View style={styles.chartCard}>

                <LineChart
                    data={{
                        labels: hourly
                            .filter((_, i) => i % 3 === 0) // show label every 3 hours
                            .map(h => h.time.getHours() + ":00"),

                        datasets: [
                            {
                                data: hourly.map(h => h.temp),
                                strokeWidth: 3
                            }
                        ]
                    }}

                    width={screenWidth - 60}
                    height={230}

                    withDots
                    withInnerLines
                    withOuterLines={false}

                    chartConfig={{
                        backgroundGradientFrom: "#0f2f46",
                        backgroundGradientTo: "#0f2f46",

                        decimalPlaces: 0,

                        color: (opacity = 1) => `rgba(255, 196, 0, ${opacity})`,

                        labelColor: () => "#9ec9d9",

                        propsForDots: {
                            r: "4",
                            strokeWidth: "2",
                            stroke: "#ffc400"
                        },

                        propsForBackgroundLines: {
                            stroke: "#1b4259",
                            strokeDasharray: "5"
                        },

                        fillShadowGradient: "#ffc400",
                        fillShadowGradientOpacity: 0.25
                    }}

                    bezier

                    style={{
                        borderRadius: 20
                    }}

                />

            </View>


            {/* HIGHLIGHTS */}

            <Text style={styles.section}>
                Today's Highlight
            </Text>

            <View style={styles.highlightRow}>

                <View style={styles.highlightCard}>
                    <Text style={styles.text}>Wind</Text>
                    <Text style={styles.text}>{weather.wind.speed} km/h</Text>
                </View>

                <View style={styles.highlightCard}>
                    <Text style={styles.text}>Humidity</Text>
                    <Text style={styles.text}>{weather.main.humidity}%</Text>
                </View>

            </View>


            <View style={styles.highlightRow}>

                <View style={styles.highlightCard}>
                    <Text style={styles.text}>Pressure</Text>
                    <Text style={styles.text}>{weather.main.pressure}</Text>
                </View>

                <View style={styles.highlightCard}>
                    <Text style={styles.text}>Visibility</Text>
                    <Text style={styles.text}>{weather.visibility / 1000} km</Text>
                </View>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#021b2b",
        padding: 20,
        justifyContent: "center"
    },

    header: {
        margin: 20
    },

    title: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "600"
    },

    searchBar: {
        flexDirection: "row",
        backgroundColor: "#11384f",
        borderRadius: 25,
        marginTop: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },

    input: {
        flex: 1,
        color: "#fff"
    },

    searchBtn: {
        backgroundColor: "#16c3d6",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20
    },

    time: {
        color: "#16c3d6",
        marginTop: 10,
        alignSelf: "flex-end",
  textAlign: "right"
    },

    cardRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },

    card: {
        backgroundColor: "#0f2f46",
        width: "48%",
        padding: 20,
        borderRadius: 20
    },

    temp: {
        fontSize: 32,
        color: "#fff"
    },

    desc: {
        color: "#ccc"
    },

    city: {
        color: "#ccc"
    },
    air: {
        fontSize: 32,
        color: "#fff"
    },
    chartCard: {
        backgroundColor: "#0f2f46",
        borderRadius: 20,
        padding: 10,
        marginBottom: 20
    },

    section: {
        color: "#fff",
        fontSize: 18
    },

    highlightRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },

    highlightCard: {
        backgroundColor: "#0f2f46",
        width: "48%",
        padding: 20,
        borderRadius: 20
    },
    text: {
        color: '#ffff',
        fontWeight: '600'
    }

});