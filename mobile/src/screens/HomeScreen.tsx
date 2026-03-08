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

{/* DARK OVERLAY */}
<View style={styles.overlay}>

{/* NAVBAR */}
<Navbar navigation={navigation} title="Agro Grow" />

{/* HERO CONTENT */}

<View style={styles.hero}>

<Text style={styles.title}>
Smart Agriculture
</Text>

<Text style={styles.title}>
Powered by <Text style={styles.highlight}>AI & IoT</Text>
</Text>

<Text style={styles.subtitle}>
Monitor soil moisture, weather patterns, and crop health
in real-time using intelligent sensors and AI-powered
analytics to maximize agricultural productivity.
</Text>

<View style={styles.buttons}>

<TouchableOpacity style={styles.exploreBtn}>
<Text style={styles.exploreText}>
Explore Solutions
</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.learnBtn}>
<Text style={styles.learnText}>
Learn More
</Text>
</TouchableOpacity>

</View>

</View>

</View>

</ImageBackground>

)

}

const styles = StyleSheet.create({

container:{
flex:1
},

/* IMAGE OVERLAY */

overlay:{
flex:1,
backgroundColor:'rgba(1, 10, 14, 0.55)'
},

/* HERO SECTION */

hero:{
flex:1,
justifyContent:'center',
alignItems:'center',
paddingHorizontal:30
},

title:{
fontSize:36,
fontWeight:'700',
color:'#ffffff',
textAlign:'center'
},

highlight:{
color:'#23d4e2'
},

subtitle:{
color:'#e6f3f7',
marginTop:15,
textAlign:'center',
fontSize:15,
lineHeight:22
},

/* BUTTONS */

buttons:{
flexDirection:'row',
marginTop:30
},

exploreBtn:{
backgroundColor:'#22c9da',
paddingVertical:14,
paddingHorizontal:28,
borderRadius:30,
marginRight:15
},

exploreText:{
color:'#00161f',
fontWeight:'600'
},

learnBtn:{
borderWidth:2,
borderColor:'#ffffff',
paddingVertical:14,
paddingHorizontal:28,
borderRadius:30
},

learnText:{
color:'#ffffff',
fontWeight:'600'
}

});