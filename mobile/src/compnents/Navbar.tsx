import React from "react";
import { 
View, 
Text, 
StyleSheet, 
TouchableOpacity,
SafeAreaView     // ADDED
} from "react-native";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  navigation: any;
  title: string;
};

export default function Navbar({ navigation, title }: Props) {

  return (

    <SafeAreaView style={styles.safeArea}>   {/* ADDED */}

      <View style={styles.navbar}>

        <TouchableOpacity 
          onPress={() => navigation.openDrawer()}
          style={styles.menuBtn}   // ADDED
        >
          <MaterialIcons name="menu" size={30} color="#ffffff" />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        <View style={{ width: 26 }} />

      </View>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

safeArea:{                // ADDED
position:'absolute',
top:0,
left:0,
right:0,
zIndex:100
},

navbar:{
height:70,                // CHANGED (removed top:40)
backgroundColor:'transparent',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
paddingHorizontal:20
},

menuBtn:{                 // ADDED
padding:5
},

title:{
color:'white',
fontSize:20,
fontWeight:'700',         // CHANGED
letterSpacing:1           // ADDED
}

});