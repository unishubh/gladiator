import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Slider from 'react-native-slider'
import { theme, config } from '../constants'

const SliderComp = (props) => {


    return (
        <View>

            <Slider
                minimumValue={props.min}
                maximumValue={props.max}
                style={{ height: 19 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgb(84, 234, 200)"
                value={props.value}
                marginRight={theme.sizes.base}
                marginLeft={theme.sizes.base}
                marginTop={theme.sizes.base * 0.25}
                step={props.step}
                onSlidingComplete={value => props.onChange(value)}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    thumb: {
        width: theme.sizes.base * 1.25,
        height: theme.sizes.base * 1.25,
        borderRadius: theme.sizes.base,
        borderColor: theme.colors.tertiary,
        borderWidth: 3,
        backgroundColor: theme.colors.tertiary

    }

});
export { SliderComp };
