import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme, config } from '../constants'

const SliderLabel = (props) => {


    return (

        <View style={styles.measure}>
            <Text style={styles.caption}> {props.label}</Text>
            <Text>{props.value}</Text>
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
        marginRight: theme.sizes.base,
        marginLeft: theme.sizes.base,
        marginTop: theme.sizes.base
    }

});
export { SliderLabel };
