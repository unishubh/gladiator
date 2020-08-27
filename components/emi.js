import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Slider from "react-native-slider";
import { theme, config } from "../constants";
import { SliderLabel } from "./SliderLabel";
import { SliderComp } from "./slider";

const Emicalc = (props) => {
  return (
    <View>
      <SliderLabel
        value={props.investment.toFixed(0)}
        label="Loan Amount"
        caption="Rs."
        max={config.sliderMeasures.maxInvestment}
        onChange={props.setInvestment}
      ></SliderLabel>
      <SliderComp
        min={config.sliderMeasures.minInvestment}
        max={config.sliderMeasures.maxInvestment}
        value={props.investment}
        step={config.sliderMeasures.amountStep}
        onChange={props.setInvestment}
      ></SliderComp>
      <SliderLabel
        value={props.period.toFixed(0)}
        caption="years"
        onChange={props.setPeriod}
        max={config.sliderMeasures.maxPeriod}
        label="Tenure"
      ></SliderLabel>
      <SliderComp
        min={config.sliderMeasures.minPeriod}
        max={config.sliderMeasures.maxPeriod}
        value={props.period}
        onChange={props.setPeriod}
        step={config.sliderMeasures.timeStep}
      ></SliderComp>
      <SliderLabel
        value={props.returns.toFixed(0)}
        caption="%"
        onChange={props.setReturn}
        max={config.sliderMeasures.maxReturn}
        label="Interest Rate (annual)"
      ></SliderLabel>
      <SliderComp
        min={config.sliderMeasures.minReturn}
        max={config.sliderMeasures.maxReturn}
        value={props.returns}
        onChange={props.setReturn}
        step={config.sliderMeasures.roiStep}
      ></SliderComp>
    </View>
  );
};

const styles = StyleSheet.create({});
export { Emicalc };
