import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Slider from 'react-native-slider'
import { theme, config } from '../constants'
import { SliderLabel } from "./SliderLabel";
import { SliderComp } from "./slider";

const Sip = (props) => {


    return (
        <View>
            <SliderLabel
              value={props.investment.toFixed(0)}
              onChange={props.setInvestment}
              label="Monthly Investment"
              caption="Rs."
              max={config.sliderMeasures.maxInvestment}>
            </SliderLabel>
            <SliderComp
              min={config.sliderMeasures.minInvestment}
              max={config.sliderMeasures.maxInvestment}
              value={props.investment} onChange={props.setInvestment}>
            </SliderComp>
            <SliderLabel
              value={props.period.toFixed(0)}
              label="Investment Period"
              caption="years"
              onChange={props.setPeriod}
              max={config.sliderMeasures.maxPeriod}>
            </SliderLabel>
            <SliderComp
              min={config.sliderMeasures.minPeriod}
              max={config.sliderMeasures.maxPeriod}
              value={props.period} onChange={props.setPeriod}>
            </SliderComp>
            <SliderLabel
              value={props.returns.toFixed(0)}
              label="Expected Returns (annual)"
              caption={"%"}
              onChange={props.setReturn}
              max={config.sliderMeasures.maxReturn}>
            </SliderLabel>
            <SliderComp
              min={config.sliderMeasures.minReturn}
              max={config.sliderMeasures.maxReturn}
              value={props.returns} onChange={props.setReturn}>
            </SliderComp>
          </View>
    );
};

const styles = StyleSheet.create({


});
export { Sip };
