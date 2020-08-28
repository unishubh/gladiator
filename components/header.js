import React from "react";
import { TextInput, View, StyleSheet,Image,Dimensions,Text } from "react-native";
import Slider from "react-native-slider";
import { theme, config } from "../constants";
import { SliderLabel } from "./SliderLabel";
import { SliderComp } from "./slider";
import Accordian from "./accordian";
import data from "../data/sip.json";
const { width,height } = Dimensions.get("window");


const Header = (props) => {
  return (
      <View>
          <Image
      source={require ('../assets/banner.png')}
      style={styles.banner}/>
    <View style={{alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'}}>
        <Text style={styles.text}> {props.text} </Text>
      <Image
      source={require ('../assets/headerimage.png')}
      style={styles.image}/>
         
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    image:{
        width:width/2.5,
        height:90,
       
        
        resizeMode:'contain',
       
    },
    banner:{
        width:width,
        height:300,
    },
    text:{
        color:theme.colors.tertiary,
        fontWeight:'bold',
        fontSize:theme.sizes.font*2,
        marginTop:-height/5
    }
});
export { Header };
