import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Slider from "react-native-slider";
import { theme, config } from "../constants";
import { SliderLabel } from "./SliderLabel";
import { SliderComp } from "./slider";

const SipDelay = (props) => {
  return (
    <View>
      <SliderLabel
        value={props.investment.toFixed(0)}
        caption="Rs."
        onChange={props.setInvestment}
        label="Monthly Investment"
        max={config.sliderMeasures.maxInvestment}
      ></SliderLabel>
      <SliderComp
        min={config.sliderMeasures.minInvestment}
        max={config.sliderMeasures.maxInvestment}
        value={props.investment}
        onChange={props.setInvestment}
        step={config.sliderMeasures.amountStep}
      ></SliderComp>
      <SliderLabel
        value={props.period.toFixed(0)}
        onChange={props.setPeriod}
        caption="years"
        max={config.sliderMeasures.maxPeriod}
        label="Investment Period"
      ></SliderLabel>
      <SliderComp
        min={config.sliderMeasures.minPeriod}
        max={config.sliderMeasures.maxPeriod}
        value={props.period}
        onChange={props.setPeriod}
        step={config.sliderMeasures.timeStep}
      ></SliderComp>
      <SliderLabel
        value={props.delay.toFixed(0)}
        caption="months"
        label="Delay in starting SIP (months)"
        max={config.sliderMeasures.maxDelay}
        onChange={props.setDelay}
      ></SliderLabel>
      <SliderComp
        min={config.sliderMeasures.minDelay}
        max={config.sliderMeasures.maxDelay}
        value={props.delay}
        onChange={props.setDelay}
      ></SliderComp>
      <SliderLabel
        value={props.returns.toFixed(0)}
        caption="%"
        onChange={props.setReturn}
        max={config.sliderMeasures.maxReturn}
        label="Expected Returns (annual)"
        step={config.sliderMeasures.roiStep}
      ></SliderLabel>
      <SliderComp
        min={config.sliderMeasures.minReturn}
        max={config.sliderMeasures.maxReturn}
        value={props.returns}
        onChange={props.setReturn}
      ></SliderComp>
    </View>
  );
};

const styles = StyleSheet.create({});
export { SipDelay };
