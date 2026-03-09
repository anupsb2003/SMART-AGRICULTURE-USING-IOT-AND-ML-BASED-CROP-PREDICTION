import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../compnents/Navbar';
export default function AboutScreen({ navigation }: any){

return(

<View style={styles.container}>
<Navbar navigation={navigation} title="Agro Grow" />

<Text style={styles.title}>
About Smart Agriculture
</Text>

<Text style={styles.text}>
Our platform uses IoT sensors and AI to monitor
crop health, soil moisture, and weather conditions
for better farming decisions.
</Text>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:'#071a2a',
justifyContent:'center',
alignItems:'center',
padding:30
},

title:{
fontSize:26,
fontWeight:'bold',
marginBottom:20,
color: '#fff'
},

text:{
textAlign:'center',
color:'#ffff',
}

});