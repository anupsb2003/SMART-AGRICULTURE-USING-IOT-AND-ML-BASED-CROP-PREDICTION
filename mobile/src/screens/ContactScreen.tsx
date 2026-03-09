import React from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet
} from 'react-native';
import Navbar from '../compnents/Navbar';
export default function ContactScreen({navigation}: any){

return(

<View style={styles.container}>
<Navbar navigation={navigation} title="Agro Grow" />

<Text style={styles.title}>
Contact Us
</Text>

<TextInput
placeholder="Your Name"
placeholderTextColor="#aaa"
style={styles.input}
/>

<TextInput
placeholder="Email"
placeholderTextColor="#aaa"
style={styles.input}
/>

<TextInput
placeholder="Message"
placeholderTextColor="#aaa"
multiline
style={[styles.input,{height:120}]}
/>

<TouchableOpacity style={styles.button}>

<Text style={styles.buttonText}>
Send Message
</Text>

</TouchableOpacity>

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
marginBottom:20,
textAlign:'center'
},

input:{
backgroundColor:'rgba(255,255,255,0.05)',
borderRadius:12,
padding:15,
marginBottom:15,
color:'white'
},

button:{
backgroundColor:'#2e7d32',
padding:15,
borderRadius:20,
alignItems:'center'
},

buttonText:{
color:'white',
fontWeight:'600'
}

});