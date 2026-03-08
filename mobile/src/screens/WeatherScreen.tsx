import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import WeatherDashboard from '../components/WeatherDashboard';
import Navbar from '../compnents/Navbar';
export default function WeatherScreen({navigation}: any){

return(

<View style={styles.container}>
<Navbar navigation={navigation} title="Agro Grow" />

{/* <WeatherDashboard /> */}
<Text style={{color:'#fff', fontSize:18, marginTop:20}}>Weather Dashboard</Text>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:'#071a2a',
padding:20,
justifyContent:'center'
}

});