import React from 'react';
import {
View,
Text,
StyleSheet,
ScrollView
} from 'react-native';
import Navbar from '../compnents/Navbar';
export default function SolutionsScreen({ navigation }: any){

return(

<View style={styles.container}>
<Navbar navigation={navigation} title="Agro Grow" />
<Text style={styles.title}>
Smart Agriculture Solutions
</Text>

<View style={styles.card}>

<Text style={styles.cardTitle}>
🌱 Soil Monitoring
</Text>

<Text style={styles.cardText}>
Track soil moisture, nutrients, and temperature
using IoT sensors to improve crop productivity.
</Text>

</View>

<View style={styles.card}>

<Text style={styles.cardTitle}>
☁ Weather Monitoring
</Text>

<Text style={styles.cardText}>
Real-time weather monitoring helps farmers
make smarter irrigation and harvesting decisions.
</Text>

</View>

<View style={styles.card}>

<Text style={styles.cardTitle}>
📡 IoT Sensors
</Text>

<Text style={styles.cardText}>
Connected IoT sensors provide continuous
data about crop health and environmental changes.
</Text>

</View>

<View style={styles.card}>

<Text style={styles.cardTitle}>
📊 AI Analytics
</Text>

<Text style={styles.cardText}>
Machine learning analyzes farm data to predict
crop yield and optimize farming practices.
</Text>

</View>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:'#071a2a',
padding:20,
justifyContent:'center'
},

title:{
fontSize:28,
fontWeight:'bold',
color:'white',
marginBottom:20
},

card:{
backgroundColor:'rgba(255,255,255,0.05)',
padding:20,
borderRadius:15,
marginBottom:15
},

cardTitle:{
fontSize:18,
color:'white',
marginBottom:8
},

cardText:{
color:'#ccc'
}

});