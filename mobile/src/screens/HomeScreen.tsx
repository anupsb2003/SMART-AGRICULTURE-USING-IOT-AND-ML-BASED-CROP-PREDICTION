import React from 'react';
import {
View,
Text,
StyleSheet,
ImageBackground,
TouchableOpacity
} from 'react-native';

import Navbar from '../compnents/Navbar';

export default function HomeScreen({ navigation }: any){

return(

<ImageBackground
source={require('../assests/farm.png')}
style={styles.container}
resizeMode="cover"
>

{/* NAVBAR */}
<Navbar navigation={navigation} title="Agro Grow" />

{/* HERO CONTENT */}

<View style={styles.hero}>

<Text style={styles.title}>
Advancing Modern Agriculture
</Text>

<Text style={styles.subtitle}>
IoT powered smart farming helps farmers monitor
soil, weather and crops in real time.
</Text>

<View style={styles.buttons}>

<TouchableOpacity style={styles.exploreBtn}>
<Text style={styles.btnText}>
Explore Solutions →
</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.learnBtn}>
<Text style={styles.learnText}>
Learn More
</Text>
</TouchableOpacity>

</View>

</View>

</ImageBackground>

)

}
const styles = StyleSheet.create({

container:{
flex:1
},

hero:{
flex:1,
justifyContent:'center',
alignItems:'center',
padding:30
},

title:{
fontSize:32,
fontWeight:'bold',
color:'white',
textAlign:'center'
},

subtitle:{
color:'white',
marginTop:10,
textAlign:'center'
},

buttons:{
flexDirection:'row',
marginTop:20
},

exploreBtn:{
backgroundColor:'#2e7d32',
padding:12,
borderRadius:20,
marginRight:10
},

learnBtn:{
backgroundColor:'white',
padding:12,
borderRadius:20
},

btnText:{
color:'white'
},

learnText:{
color:'#333'
}

});