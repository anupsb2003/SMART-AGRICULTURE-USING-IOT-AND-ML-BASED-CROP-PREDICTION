import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('./src/assests/farm.png')}
      style={styles.container}
      resizeMode="cover"
    >

      {/* Navbar */}

      <View style={styles.navbar}>
        <Text style={styles.logo}>🌿 Agro Grow</Text>

        <TouchableOpacity style={styles.startBtn}>
          <Text style={styles.startText}>Get Started →</Text>
        </TouchableOpacity>
      </View>

      {/* Hero Content */}

      <View style={styles.heroContent}>

        <Text style={styles.title}>
          Advancing Modern Agriculture
        </Text>

        <Text style={styles.subtitle}>
          IoT-powered smart agriculture combined with machine learning
          helps farmers monitor soil, weather and crop conditions
          in real time.
        </Text>

        <View style={styles.buttons}>

          <TouchableOpacity style={styles.exploreBtn}>
            <Text style={styles.btnText}>Explore Solutions →</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.learnBtn}>
            <Text style={styles.learnText}>Learn More</Text>
          </TouchableOpacity>

        </View>

      </View>

      {/* Bottom Badges */}

      <View style={styles.badges}>
        <Text style={styles.badge}>✔ Efficiency</Text>
        <Text style={styles.badge}>✔ Sustainability</Text>
        <Text style={styles.badge}>✔ Growth</Text>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  /* NAVBAR */

  navbar:{
    position:'absolute',
    top:60,
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

    backgroundColor:'white',
    padding:15,
    borderRadius:40
  },

  logo:{
    fontSize:18,
    fontWeight:'600',
    color:'#2e7d32'
  },

  startBtn:{
    backgroundColor:'#2e7d32',
    paddingHorizontal:18,
    paddingVertical:8,
    borderRadius:20
  },

  startText:{
    color:'white'
  },

  /* HERO */

  heroContent:{
    alignItems:'center',
    paddingHorizontal:30
  },

  title:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    color:'white',
    marginBottom:15
  },

  subtitle:{
    fontSize:15,
    textAlign:'center',
    color:'white',
    marginBottom:25
  },

  buttons:{
    flexDirection:'row',
    gap:15
  },

  exploreBtn:{
    backgroundColor:'#2e7d32',
    paddingVertical:12,
    paddingHorizontal:20,
    borderRadius:25
  },

  learnBtn:{
    backgroundColor:'rgba(255,255,255,0.9)',
    paddingVertical:12,
    paddingHorizontal:20,
    borderRadius:25
  },

  btnText:{
    color:'white'
  },

  learnText:{
    color:'#333'
  },

  /* BADGES */

  badges:{
    position:'absolute',
    bottom:40,
    flexDirection:'row',
    gap:10
  },

  badge:{
    backgroundColor:'rgba(0,0,0,0.6)',
    color:'white',
    paddingVertical:6,
    paddingHorizontal:12,
    borderRadius:20,
    fontSize:12
  }

});