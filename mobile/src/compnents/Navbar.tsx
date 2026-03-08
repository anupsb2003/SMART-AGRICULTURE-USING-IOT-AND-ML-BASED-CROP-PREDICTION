import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  navigation: any;
  title: string;
};

export default function Navbar({ navigation, title }: Props) {
  return (
    <View style={styles.navbar}>

      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialIcons name="menu" size={30} color="#ffffff" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={{ width: 26 }} />

    </View>
  );
}
const styles = StyleSheet.create({

navbar:{
position:'absolute',
top:40,
left:0,
right:0,
height:70,
backgroundColor:'transparent',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
paddingHorizontal:20
},

title:{
color:'white',
fontSize:20,
fontWeight:'600'
}

});