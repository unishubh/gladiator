import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { theme, config } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'




const SliderLabel = (props) => {
    const [editing,Isediting]=useState(false);
    

    return (

        <View style={styles.measure}>
            <Text style={styles.caption}> {props.label}</Text>
            
            <View style={{flexDirection:'row'}}>
                
                {props.caption==="Rs."?<Text style={{marginTop:5}}>Rs. </Text>:null}
            <TextInput
            value={`${props.value}`}
            keyboardType={'numeric'}
            numeric
            
            
            onChangeText={ text=>{
                var num = isNaN(parseInt(text)) ? 1: parseInt(text);
                num=num>=props.max?props.max:num;
                props.onChange(parseInt(num))}}/>
        {props.caption!="Rs."?<Text style={{marginTop:5}}>{props.caption} </Text>:null}
                  <Icon name="pencil" size={20} color={theme.colors.tertiary} style={{marginLeft:theme.sizes.base}}></Icon>

            
            </View>
           
        </View>


    );
};

const styles = StyleSheet.create({

    caption: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: theme.sizes.font
    },
    measure: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: theme.sizes.base*0.5,
        marginLeft: theme.sizes.base,
        marginTop: theme.sizes.base
    }

});
export { SliderLabel };
