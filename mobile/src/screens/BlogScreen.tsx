import React from 'react';
import {
View,
Text,
ScrollView,
StyleSheet
} from 'react-native';
import Navbar from '../compnents/Navbar';

export default function BlogScreen({navigation}: any){

return(

<View style={styles.container}>
<Navbar navigation={navigation} title="Agro Grow" />

<Text style={styles.title}>
Latest Agriculture Insights
</Text>

<View style={styles.blogCard}>

<Text style={styles.blogTitle}>
How IoT is Transforming Agriculture
</Text>

<Text style={styles.blogText}>
Smart sensors allow farmers to monitor soil,
weather, and crop health in real time.
</Text>

</View>

<View style={styles.blogCard}>

<Text style={styles.blogTitle}>
AI in Crop Prediction
</Text>

<Text style={styles.blogText}>
Machine learning models can predict crop
yield and help farmers make better decisions.
</Text>

</View>

<View style={styles.blogCard}>

<Text style={styles.blogTitle}>
Sustainable Smart Farming
</Text>

<Text style={styles.blogText}>
Using technology in agriculture improves
efficiency while reducing environmental impact.
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

blogCard:{
backgroundColor:'rgba(255,255,255,0.05)',
padding:20,
borderRadius:15,
marginBottom:15
},

blogTitle:{
fontSize:18,
color:'white',
marginBottom:6
},

blogText:{
color:'#ccc'
}

});